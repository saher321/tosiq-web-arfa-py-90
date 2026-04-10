import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMagnifyingGlass, HiOutlineUsers, HiOutlineEnvelope } from 'react-icons/hi2';
import { mockStudents } from '../../../utils/mockData';
import { getInitials, getAvatarColor } from '../../../utils/common';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Students() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = mockStudents.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.enrollmentId.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || s.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">Students</h1>
        <p className="text-sm text-text-muted mt-1">View and manage student records</p>
      </motion.div>

      {/* Stat Summary */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Students', value: mockStudents.length, color: '#7C3AED' },
          { label: 'Active', value: mockStudents.filter((s) => s.status === 'active').length, color: '#10B981' },
          { label: 'Avg. GPA', value: (mockStudents.reduce((a, s) => a + s.gpa, 0) / mockStudents.length).toFixed(2), color: '#3B82F6' },
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
            placeholder="Search by name or ID..."
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
              className={`px-4 py-2 text-sm rounded-lg transition-all cursor-pointer ${
                filter === f
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
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">ID</th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Department</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Semester</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">GPA</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Courses</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
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
                  <td className="px-6 py-4 text-sm text-primary font-mono">{student.enrollmentId}</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{student.department}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{student.semester}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-sm font-semibold ${
                      student.gpa >= 3.7 ? 'text-success' : student.gpa >= 3.0 ? 'text-primary' : 'text-warning'
                    }`}>
                      {student.gpa}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{student.enrolledCourses}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'active' ? 'bg-success/10 text-success' : 'bg-gray-light/30 text-text-muted'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-text-muted text-sm">No students found</div>
        )}
      </motion.div>
    </motion.div>
  );
}
