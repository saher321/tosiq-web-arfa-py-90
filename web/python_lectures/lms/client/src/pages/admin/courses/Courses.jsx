import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineMagnifyingGlass, HiOutlineBookOpen, HiOutlinePencilSquare,
  HiOutlineTrash, HiOutlineFunnel,
} from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { mockCourses } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Courses() {
  const [courses, setCourses] = useState(mockCourses);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filtered = courses.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || c.status === filter;
    return matchSearch && matchFilter;
  });

  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    toast.success('Course deleted');
  };

  const statusColors = {
    active: 'bg-success/10 text-success',
    upcoming: 'bg-info/10 text-info',
    completed: 'bg-gray-light/30 text-text-muted',
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">Courses</h1>
        <p className="text-sm text-text-muted mt-1">Manage all courses across departments</p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search by name or code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-light bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineFunnel className="text-text-muted" />
          {['all', 'active', 'upcoming'].map((f) => (
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

      {/* Course Cards Grid */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -4 }}
            className="glass-card p-5 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <HiOutlineBookOpen className="text-primary text-xl" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[course.status]}`}>
                {course.status}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-text-primary">{course.name}</h3>
            <p className="text-xs text-primary font-medium mt-0.5">{course.code}</p>

            <div className="mt-3 space-y-2 text-xs text-text-secondary flex-1">
              <div className="flex justify-between">
                <span>Department</span>
                <span className="font-medium text-text-primary">{course.department}</span>
              </div>
              <div className="flex justify-between">
                <span>Teacher</span>
                <span className="font-medium text-text-primary">{course.teacher}</span>
              </div>
              <div className="flex justify-between">
                <span>Students</span>
                <span className="font-medium text-text-primary">{course.students}</span>
              </div>
              <div className="flex justify-between">
                <span>Credits</span>
                <span className="font-medium text-text-primary">{course.credits}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-light/50">
              <button className="flex-1 py-2 text-xs font-medium text-primary hover:bg-primary-50 rounded-lg transition-colors cursor-pointer">
                <HiOutlinePencilSquare className="inline mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="flex-1 py-2 text-xs font-medium text-danger hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
              >
                <HiOutlineTrash className="inline mr-1" /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-text-muted text-sm">No courses found</div>
      )}
    </motion.div>
  );
}
