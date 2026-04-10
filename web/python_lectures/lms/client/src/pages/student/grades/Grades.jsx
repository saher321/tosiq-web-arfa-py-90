import { motion } from 'framer-motion';
import { mockGrades } from '../../../utils/mockData';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const gradeColors = {
  'A+': 'text-success', 'A': 'text-success', 'A-': 'text-success',
  'B+': 'text-primary', 'B': 'text-primary', 'B-': 'text-primary',
  'C+': 'text-warning', 'C': 'text-warning',
};

export default function StudentGrades() {
  const myGrades = mockGrades.filter((g) => g.student === 'Ali Hassan');

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">My Grades</h1>
        <p className="text-sm text-text-muted mt-1">View your academic performance across subjects</p>
      </motion.div>

      {/* GPA Summary */}
      <motion.div variants={item} className="glass-card p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">3.72</p>
            <p className="text-[10px] text-white/70">CGPA</p>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-text-primary">Academic Standing: <span className="text-success">Good</span></h3>
          <p className="text-sm text-text-muted mt-1">You are performing above the department average (3.45)</p>
        </div>
      </motion.div>

      {/* Grades Table */}
      <motion.div variants={item} className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-light/50">
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Course</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Midterm</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Final</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Assignment</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Total</th>
                <th className="text-center text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Grade</th>
              </tr>
            </thead>
            <tbody>
              {myGrades.map((grade) => (
                <tr key={grade.id} className="border-b border-gray-light/30 last:border-0 hover:bg-primary-50/20 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-text-primary">{grade.course}</p>
                    <p className="text-xs text-primary font-mono">{grade.code}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{grade.midterm}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{grade.final}</td>
                  <td className="px-6 py-4 text-sm text-text-primary text-center">{grade.assignment}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-text-primary text-center">{grade.total}%</td>
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
      </motion.div>
    </motion.div>
  );
}
