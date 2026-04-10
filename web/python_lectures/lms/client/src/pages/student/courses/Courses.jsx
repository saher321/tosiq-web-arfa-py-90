import { motion } from 'framer-motion';
import { HiOutlineBookOpen, HiOutlineClock, HiOutlineAcademicCap } from 'react-icons/hi2';
import { mockStudentCourses } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function StudentCourses() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">My Courses</h1>
        <p className="text-sm text-text-muted mt-1">View your enrolled courses and track progress</p>
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {mockStudentCourses.map((course) => (
          <motion.div key={course.id} whileHover={{ y: -4 }} className="glass-card p-5 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <HiOutlineBookOpen className="text-primary text-xl" />
              </div>
              <span className="text-lg font-bold text-success">{course.grade}</span>
            </div>

            <h3 className="text-sm font-semibold text-text-primary">{course.name}</h3>
            <p className="text-xs text-primary font-mono mt-0.5">{course.code}</p>

            <div className="mt-3 space-y-2 text-xs text-text-secondary flex-1">
              <div className="flex items-center gap-2">
                <HiOutlineAcademicCap className="text-sm text-text-muted" />
                <span>{course.teacher}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineClock className="text-sm text-text-muted" />
                <span>{course.schedule}</span>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4 pt-3 border-t border-gray-light/50">
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-text-muted">Progress</span>
                <span className="font-medium text-primary">{course.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-light/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
