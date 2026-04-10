import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMagnifyingGlass, HiOutlineFunnel } from 'react-icons/hi2';
import { mockGrades } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const gradeColors = {
  'A+': 'text-success', 'A': 'text-success', 'A-': 'text-success',
  'B+': 'text-primary', 'B': 'text-primary', 'B-': 'text-primary',
  'C+': 'text-warning', 'C': 'text-warning', 'C-': 'text-warning',
  'D': 'text-danger', 'F': 'text-danger',
};

export default function Grades() {
  const [search, setSearch] = useState('');
  const [semesterFilter, setSemesterFilter] = useState('all');

  const filtered = mockGrades.filter((g) => {
    const matchSearch = g.student.toLowerCase().includes(search.toLowerCase()) ||
      g.course.toLowerCase().includes(search.toLowerCase());
    const matchSemester = semesterFilter === 'all' || g.semester === semesterFilter;
    return matchSearch && matchSemester;
  });

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">Grades</h1>
        <p className="text-sm text-text-muted mt-1">View and manage student grades across courses</p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search by student or course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-light bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <select
          value={semesterFilter}
          onChange={(e) => setSemesterFilter(e.target.value)}
          className="h-11 px-4 rounded-xl border border-gray-light bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
        >
          <option value="all">All Semesters</option>
          <option value="Fall 2025">Fall 2025</option>
          <option value="Spring 2026">Spring 2026</option>
        </select>
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
                  <td className="px-6 py-4 text-sm font-medium text-text-primary">{grade.student}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-text-primary">{grade.course}</p>
                      <p className="text-xs text-primary font-mono">{grade.code}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{grade.midterm}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{grade.final}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{grade.assignment}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-semibold text-text-primary">{grade.total}</span>
                  </td>
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
