import { motion } from 'framer-motion';
import {
  HiOutlineBookOpen, HiOutlineClipboardDocumentList, HiOutlineAcademicCap,
  HiOutlineCalendarDays, HiOutlineArrowTrendingUp,
} from 'react-icons/hi2';
import { mockStudentCourses, mockGrades } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function StudentDashboard() {
  const myGrades = mockGrades.filter((g) => g.student === 'Ali Hassan');
  const avgScore = Math.round(myGrades.reduce((a, g) => a + g.total, 0) / myGrades.length);

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">My Dashboard</h1>
        <p className="text-sm text-text-muted mt-1">Track your academic progress and upcoming activities</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Enrolled Courses', value: mockStudentCourses.length, icon: HiOutlineBookOpen, color: '#7C3AED' },
          { label: 'Current GPA', value: '3.72', icon: HiOutlineAcademicCap, color: '#10B981' },
          { label: 'Avg. Score', value: avgScore + '%', icon: HiOutlineArrowTrendingUp, color: '#3B82F6' },
          { label: 'Semester', value: '6th', icon: HiOutlineCalendarDays, color: '#F59E0B' },
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

      {/* Courses Progress */}
      <motion.div variants={item} className="glass-card p-5">
        <h3 className="text-base font-semibold text-text-primary mb-4">Course Progress</h3>
        <div className="space-y-4">
          {mockStudentCourses.map((course) => (
            <div key={course.id} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HiOutlineBookOpen className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-text-primary truncate">{course.name}</p>
                  <span className="text-xs font-medium text-primary ml-2">{course.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-light/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                  />
                </div>
                <p className="text-xs text-text-muted mt-1">{course.teacher} • {course.schedule}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Grades */}
      <motion.div variants={item} className="glass-card p-5">
        <h3 className="text-base font-semibold text-text-primary mb-4">Recent Grades</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myGrades.map((grade) => (
            <div key={grade.id} className="p-4 rounded-xl bg-ghost border border-gray-light/50 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-primary">{grade.course}</p>
                <p className="text-xs text-primary font-mono">{grade.code}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-success">{grade.grade}</p>
                <p className="text-xs text-text-muted">{grade.total}%</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
