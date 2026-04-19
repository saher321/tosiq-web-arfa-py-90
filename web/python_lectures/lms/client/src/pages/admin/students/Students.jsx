import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlinePlus, HiOutlinePencilSquare, HiOutlineTrash,
  HiOutlineMagnifyingGlass, HiOutlineUsers, HiOutlineEnvelope, HiOutlineXMark,
} from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api, { STUDENTS_API, STUDENT_CREATE_API, STUDENT_DELETE_API, STUDENT_UPDATE_API, DEPTS_API } from '../../../utils/api.js';
import { getInitials, getAvatarColor } from '../../../utils/common.js';
import { uploadImage } from '../../../utils/cloudinary.js';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Students() {
  const [students, setStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const getStudents = async () => {
    try {
      const response = await api.get(STUDENTS_API);
      console.log(response.data.data);
      setStudents(response.data.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const getDepartments = async () => {
    try {
      const response = await api.get(DEPTS_API);
      setDepartments(response.data.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  useEffect(() => {
    getStudents();
    getDepartments();
  }, []);

  const getFilteredStudents = () => {
    if (students.length === 0) return [];
    const filtered = students.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.enrollment_no.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === 'all' || s.status === filter;
      return matchSearch && matchFilter;
    });
    return filtered;
  };

  const openAdd = () => {
    setEditing(null);
    reset({ name: '', image: '', enrollment_no: '', email: '', dept: '', semester: '', cgpa: '', status: 'active' });
    setModalOpen(true);
  };

  const openEdit = (student) => {
    setEditing(student);
    setValue('name', student.name);
    setValue('image', student.image);
    setValue('enrollment_no', student.enrollment_no);
    setValue('email', student.email);
    setValue('dept', student.dept);
    setValue('semester', student.semester);
    setValue('cgpa', student.cgpa);
    setValue('status', student.status);
    setModalOpen(true);
  };

  const onImageSelect = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue('image', reader.result);
      };
      const url = reader.readAsDataURL(file);
      console.log(url)
    }
  };

  const saveStudent = async (data) => {
    if (editing) {
      const response = await api.patch(STUDENT_UPDATE_API + editing.id, data);
      if (response.data.status == true) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      await getStudents();
    } else {
      // const url = await uploadImage(data.image);
      // data.image = url;
      // console.log(data)
      const response = await api.post(STUDENT_CREATE_API, data);
      if (response.data.status == true) {
        toast.success(response.data.message);
        await getStudents();
      } else {
        toast.error(response.data.message);
      }
    }
    setModalOpen(false);
    reset();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      const response = await api.delete(STUDENT_DELETE_API + id);
      if (response.data.status == true) {
        toast.success(response.data.message);
        await getStudents();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("ERR:", error);
    }
  };

  // Helper to get department name by id
  const getDeptName = (deptId) => {
    const dept = departments.find((d) => d.id === deptId);
    return dept ? dept.name : deptId;
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Students</h1>
          <p className="text-sm text-text-muted mt-1">View and manage student records</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <HiOutlinePlus className="text-lg" /> Add Student
        </button>
      </motion.div>

      {/* Stat Summary */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Students', value: students.length, color: '#7C3AED' },
          { label: 'Active', value: students.filter((s) => s.status === 'active').length, color: '#10B981' },
          { label: 'Avg. CGPA', value: students.length > 0 ? (students.reduce((a, s) => a + parseFloat(s.cgpa || 0), 0) / students.length).toFixed(2) : '0.00', color: '#3B82F6' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.color + '15' }}>
              <HiOutlineUsers className="text-lg" style={{ color: stat.color }} />
            </div>
            <div>
              <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Search & Filter */}
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search by name or enrollment no..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-light bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'active', 'inactive'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm rounded-lg transition-all cursor-pointer ${filter === f
                ? 'bg-primary text-white shadow-md'
                : 'bg-white text-text-secondary hover:bg-primary-50 border border-gray-light'
                }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Table */}
      <motion.div variants={item} className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-light/50">
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Student</th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Enrollment No</th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Department</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Semester</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">CGPA</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Status</th>
                <th className="text-right text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredStudents().map((student) => (
                <tr key={student.id} className="border-b border-gray-light/30 last:border-0 hover:bg-primary-50/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: getAvatarColor(student.name) }}
                      >
                        {getInitials(student.name)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-primary">{student.name}</p>
                        <p className="text-xs text-text-muted flex items-center gap-1">
                          <HiOutlineEnvelope className="text-[10px]" /> {student.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-primary font-mono">{student.enrollment_no}</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{getDeptName(student.dept)}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{student.semester}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center font-medium">{student.cgpa}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`capitalize inline-flex px-3 py-1 rounded-full text-xs font-medium ${student.status === 'active'
                      ? 'bg-success/10 text-success'
                      : 'bg-gray-light/30 text-text-muted'
                      }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(student)} className="p-2 rounded-lg hover:bg-primary-50 text-text-muted hover:text-primary transition-colors cursor-pointer">
                        <HiOutlinePencilSquare className="text-lg" />
                      </button>
                      <button onClick={() => handleDelete(student.id)} className="p-2 rounded-lg hover:bg-red-50 text-text-muted hover:text-danger transition-colors cursor-pointer">
                        <HiOutlineTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {getFilteredStudents().length === 0 && (
          <div className="text-center py-12 text-text-muted text-sm">No students found</div>
        )}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-text-primary">
                  {editing ? 'Edit Student' : 'Add Student'}
                </h2>
                <button onClick={() => setModalOpen(false)} className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <HiOutlineXMark className="text-xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit(saveStudent)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Student Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="e.g. Ali Hassan"
                  />
                  {errors.name && <p className="text-xs text-danger mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Image URL</label>
                  <input
                    {...register('image')}
                    type='file'
                    accept='image/*'
                    onChange={onImageSelect}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="e.g. https://example.com/photo.jpg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Enrollment No</label>
                  <input
                    {...register('enrollment_no', { required: 'Enrollment number is required' })}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="e.g. STU-2024-001"
                  />
                  {errors.enrollment_no && <p className="text-xs text-danger mt-1">{errors.enrollment_no.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="e.g. ali@lms.edu"
                  />
                  {errors.email && <p className="text-xs text-danger mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Department</label>
                  <select
                    {...register('dept', { required: 'Department is required' })}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                  {errors.dept && <p className="text-xs text-danger mt-1">{errors.dept.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Semester</label>
                    <input
                      type="number"
                      {...register('semester', { required: 'Semester is required', min: { value: 1, message: 'Min 1' }, max: { value: 8, message: 'Max 8' } })}
                      className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="e.g. 6"
                    />
                    {errors.semester && <p className="text-xs text-danger mt-1">{errors.semester.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">CGPA</label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('cgpa', { required: 'CGPA is required', min: { value: 0, message: 'Min 0' }, max: { value: 4, message: 'Max 4' } })}
                      className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="e.g. 3.72"
                    />
                    {errors.cgpa && <p className="text-xs text-danger mt-1">{errors.cgpa.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Status</label>
                  <select
                    {...register('status')}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="flex-1 h-11 border border-gray-light rounded-xl text-sm font-medium text-text-secondary hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 h-11 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all cursor-pointer"
                  >
                    {editing ? 'Update' : 'Add'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
