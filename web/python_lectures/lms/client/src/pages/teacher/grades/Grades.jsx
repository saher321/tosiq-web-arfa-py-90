import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMagnifyingGlass, HiOutlinePencilSquare, HiOutlineCheckCircle } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { mockGrades } from '../../../utils/mockData';
import { getInitials, getAvatarColor } from '../../../utils/common';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const gradeColors = {
  'A+': 'text-success', 'A': 'text-success', 'A-': 'text-success',
  'B+': 'text-primary', 'B': 'text-primary', 'B-': 'text-primary',
  'C+': 'text-warning', 'C': 'text-warning',
};

export default function TeacherGrades() {
  const [search, setSearch] = useState('');
  const [grades, setGrades] = useState(mockGrades);

  const filtered = grades.filter((g) =>
    g.student.toLowerCase().includes(search.toLowerCase()) ||
    g.course.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    toast.success('Grades saved successfully!');
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Grade Management</h1>
          <p className="text-sm text-text-muted mt-1">Enter and manage student grades</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <HiOutlineCheckCircle className="text-lg" /> Save Grades
        </button>
      </motion.div>

      {/* Search */}
      <motion.div variants={item} className="relative max-w-md">
        <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Search by student or course..."
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
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Student</th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Course</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Midterm</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Final</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Assignment</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Total</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Grade</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((grade) => (
                <tr key={grade.id} className="border-b border-gray-light/30 last:border-0 hover:bg-primary-50/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: getAvatarColor(grade.student) }}
                      >
                        {getInitials(grade.student)}
                      </div>
                      <span className="text-sm font-medium text-text-primary">{grade.student}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-text-primary">{grade.course}</p>
                    <p className="text-xs text-primary font-mono">{grade.code}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input
                      type="number"
                      defaultValue={grade.midterm}
                      min="0"
                      max="100"
                      className="w-16 h-8 text-center text-sm rounded-lg border border-gray-light bg-ghost focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input
                      type="number"
                      defaultValue={grade.final}
                      min="0"
                      max="100"
                      className="w-16 h-8 text-center text-sm rounded-lg border border-gray-light bg-ghost focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <input
                      type="number"
                      defaultValue={grade.assignment}
                      min="0"
                      max="100"
                      className="w-16 h-8 text-center text-sm rounded-lg border border-gray-light bg-ghost focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-text-primary text-center">{grade.total}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-lg font-bold ${gradeColors[grade.grade] || 'text-text-primary'}`}>
                      {grade.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-text-muted text-sm">No grades found</div>
        )}
      </motion.div>
    </motion.div>
  );
}
