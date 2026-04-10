import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineMagnifyingGlass, HiOutlineEnvelope, HiOutlineBookOpen,
} from 'react-icons/hi2';
import { mockTeachers } from '../../../utils/mockData';
import { getInitials, getAvatarColor } from '../../../utils/common';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Teachers() {
  const [search, setSearch] = useState('');

  const filtered = mockTeachers.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.employeeId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">Teachers</h1>
        <p className="text-sm text-text-muted mt-1">View and manage teaching staff</p>
      </motion.div>

      {/* Search */}
      <motion.div variants={item} className="relative max-w-md">
        <HiOutlineMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Search teachers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-light bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </motion.div>

      {/* Teacher Cards */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((teacher) => (
          <motion.div
            key={teacher.id}
            whileHover={{ y: -4 }}
            className="glass-card p-6 text-center"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
              style={{ backgroundColor: getAvatarColor(teacher.name) }}
            >
              {getInitials(teacher.name)}
            </div>
            <h3 className="text-base font-semibold text-text-primary">{teacher.name}</h3>
            <p className="text-xs text-primary font-medium mt-0.5">{teacher.designation}</p>
            <p className="text-xs text-text-muted mt-1 flex items-center justify-center gap-1">
              <HiOutlineEnvelope className="text-[10px]" /> {teacher.email}
            </p>

            <div className="mt-4 pt-4 border-t border-gray-light/50 grid grid-cols-3 gap-2">
              <div>
                <p className="text-lg font-bold text-text-primary">{teacher.courses}</p>
                <p className="text-[10px] text-text-muted">Courses</p>
              </div>
              <div>
                <p className="text-lg font-bold text-text-primary">{teacher.students}</p>
                <p className="text-[10px] text-text-muted">Students</p>
              </div>
              <div>
                <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${
                  teacher.status === 'active' ? 'bg-success/10 text-success' : 'bg-gray-light/30 text-text-muted'
                }`}>
                  {teacher.status}
                </span>
              </div>
            </div>

            <p className="text-xs text-text-secondary mt-3 flex items-center justify-center gap-1">
              <HiOutlineBookOpen className="text-sm" /> {teacher.department}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-text-muted text-sm">No teachers found</div>
      )}
    </motion.div>
  );
}
