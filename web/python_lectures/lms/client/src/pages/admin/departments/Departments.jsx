import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlinePlus, HiOutlinePencilSquare, HiOutlineTrash,
  HiOutlineMagnifyingGlass, HiOutlineBuildingOffice2, HiOutlineXMark,
} from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { mockDepartments } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Departments() {
  const [departments, setDepartments] = useState(mockDepartments);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.head.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditing(null);
    reset({ name: '', head: '', status: 'active' });
    setModalOpen(true);
  };

  const openEdit = (dept) => {
    setEditing(dept);
    setValue('name', dept.name);
    setValue('head', dept.head);
    setValue('status', dept.status);
    setModalOpen(true);
  };

  const onSubmit = (data) => {
    if (editing) {
      setDepartments((prev) =>
        prev.map((d) => (d.id === editing.id ? { ...d, ...data } : d))
      );
      toast.success('Department updated!');
    } else {
      setDepartments((prev) => [
        ...prev,
        { id: Date.now(), ...data, students: 0, teachers: 0, courses: 0 },
      ]);
      toast.success('Department added!');
    }
    setModalOpen(false);
    reset();
  };

  const handleDelete = (id) => {
    setDepartments((prev) => prev.filter((d) => d.id !== id));
    toast.success('Department deleted');
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Departments</h1>
          <p className="text-sm text-text-muted mt-1">Manage all departments in the institution</p>
        </div>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <HiOutlinePlus className="text-lg" /> Add Department
        </button>
      </motion.div>

      {/* Search */}
      <motion.div variants={item} className="relative max-w-md">
        <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Search departments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-light bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </motion.div>

      {/* Table */}
      <motion.div variants={item} className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-light/50">
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Department</th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Head</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Students</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Teachers</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Courses</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Status</th>
                <th className="text-right text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((dept) => (
                <tr key={dept.id} className="border-b border-gray-light/30 last:border-0 hover:bg-primary-50/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <HiOutlineBuildingOffice2 className="text-primary text-lg" />
                      </div>
                      <span className="text-sm font-medium text-text-primary">{dept.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{dept.head}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center font-medium">{dept.students}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center font-medium">{dept.teachers}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center font-medium">{dept.courses}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      dept.status === 'active'
                        ? 'bg-success/10 text-success'
                        : 'bg-gray-light/30 text-text-muted'
                    }`}>
                      {dept.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(dept)} className="p-2 rounded-lg hover:bg-primary-50 text-text-muted hover:text-primary transition-colors cursor-pointer">
                        <HiOutlinePencilSquare className="text-lg" />
                      </button>
                      <button onClick={() => handleDelete(dept.id)} className="p-2 rounded-lg hover:bg-red-50 text-text-muted hover:text-danger transition-colors cursor-pointer">
                        <HiOutlineTrash className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-text-muted text-sm">No departments found</div>
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
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-text-primary">
                  {editing ? 'Edit Department' : 'Add Department'}
                </h2>
                <button onClick={() => setModalOpen(false)} className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <HiOutlineXMark className="text-xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Department Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="e.g. Computer Science"
                  />
                  {errors.name && <p className="text-xs text-danger mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Department Head</label>
                  <input
                    {...register('head', { required: 'Head is required' })}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="e.g. Dr. John Doe"
                  />
                  {errors.head && <p className="text-xs text-danger mt-1">{errors.head.message}</p>}
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
