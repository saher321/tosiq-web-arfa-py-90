import { motion } from 'framer-motion';
import { HiOutlineBookOpen, HiOutlineUsers, HiOutlineCalendarDays, HiOutlinePencilSquare } from 'react-icons/hi2';
import { mockTeacherCourses } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function TeacherCourses() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">My Courses</h1>
        <p className="text-sm text-text-muted mt-1">Manage your courses, content, and assignments</p>
      </motion.div>

      <motion.div variants={item} className="space-y-5">
        {mockTeacherCourses.map((course) => (
          <motion.div key={course.id} whileHover={{ y: -2 }} className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HiOutlineBookOpen className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">{course.name}</h3>
                  <p className="text-xs text-primary font-mono mt-0.5">{course.code} • {course.semester}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-text-secondary">
                    <span className="flex items-center gap-1"><HiOutlineUsers /> {course.students} students</span>
                    <span className="flex items-center gap-1"><HiOutlineCalendarDays /> {course.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-center px-4 py-2 rounded-xl bg-ghost">
                  <p className="text-xl font-bold text-text-primary">{course.assignments}</p>
                  <p className="text-[10px] text-text-muted">Assignments</p>
                </div>
                <div className="text-center px-4 py-2 rounded-xl bg-warning/10">
                  <p className="text-xl font-bold text-warning">{course.pending}</p>
                  <p className="text-[10px] text-text-muted">Pending</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer">
                  <HiOutlinePencilSquare /> Manage
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
