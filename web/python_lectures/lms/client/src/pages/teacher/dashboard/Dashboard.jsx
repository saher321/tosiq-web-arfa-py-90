import { motion } from 'framer-motion';
import {
  HiOutlineBookOpen, HiOutlineUsers, HiOutlineClipboardDocumentList,
  HiOutlineDocumentText, HiOutlineCalendarDays,
} from 'react-icons/hi2';
import { mockTeacherCourses } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function TeacherDashboard() {
  const totalStudents = mockTeacherCourses.reduce((a, c) => a + c.students, 0);
  const totalPending = mockTeacherCourses.reduce((a, c) => a + c.pending, 0);

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">Teacher Dashboard</h1>
        <p className="text-sm text-text-muted mt-1">Overview of your courses and student activity</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'My Courses', value: mockTeacherCourses.length, icon: HiOutlineBookOpen, color: '#7C3AED' },
          { label: 'Total Students', value: totalStudents, icon: HiOutlineUsers, color: '#3B82F6' },
          { label: 'Pending Reviews', value: totalPending, icon: HiOutlineClipboardDocumentList, color: '#F59E0B' },
          { label: 'Semester', value: 'Fall 2025', icon: HiOutlineCalendarDays, color: '#10B981' },
        ].map((stat, i) => (
          <motion.div key={i} whileHover={{ y: -4 }} className="glass-card p-5 flex items-start justify-between">
            <div>
              <p className="text-sm text-text-muted">{stat.label}</p>
              <p className="text-3xl font-bold text-text-primary mt-1">{stat.value}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: stat.color + '15' }}>
              <stat.icon className="text-2xl" style={{ color: stat.color }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Course Cards */}
      <motion.div variants={item}>
        <h3 className="text-base font-semibold text-text-primary mb-4">My Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockTeacherCourses.map((course) => (
            <motion.div key={course.id} whileHover={{ y: -4 }} className="glass-card p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <HiOutlineBookOpen className="text-primary text-xl" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">Active</span>
              </div>

              <h3 className="text-sm font-semibold text-text-primary">{course.name}</h3>
              <p className="text-xs text-primary font-mono mt-0.5">{course.code}</p>

              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-ghost">
                  <p className="text-lg font-bold text-text-primary">{course.students}</p>
                  <p className="text-[10px] text-text-muted">Students</p>
                </div>
                <div className="p-2 rounded-lg bg-ghost">
                  <p className="text-lg font-bold text-text-primary">{course.assignments}</p>
                  <p className="text-[10px] text-text-muted">Tasks</p>
                </div>
                <div className="p-2 rounded-lg bg-ghost">
                  <p className="text-lg font-bold text-warning">{course.pending}</p>
                  <p className="text-[10px] text-text-muted">Pending</p>
                </div>
              </div>

              <p className="text-xs text-text-muted mt-3 flex items-center gap-1">
                <HiOutlineCalendarDays /> {course.schedule}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pending Submissions */}
      <motion.div variants={item} className="glass-card p-5">
        <h3 className="text-base font-semibold text-text-primary mb-4">Recent Submissions</h3>
        <div className="space-y-3">
          {[
            { student: 'Ali Hassan', course: 'Data Structures', assignment: 'Lab 08', time: '30 min ago' },
            { student: 'Zara Malik', course: 'Data Structures', assignment: 'Lab 08', time: '1 hour ago' },
            { student: 'Amna Riaz', course: 'OOP', assignment: 'Assignment 5', time: '2 hours ago' },
            { student: 'Rayan Ahmed', course: 'Intro to Programming', assignment: 'Project Proposal', time: '5 hours ago' },
          ].map((sub, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-ghost transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center">
                  <HiOutlineDocumentText className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{sub.student}</p>
                  <p className="text-xs text-text-muted">{sub.course} — {sub.assignment}</p>
                </div>
              </div>
              <span className="text-xs text-text-muted">{sub.time}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
