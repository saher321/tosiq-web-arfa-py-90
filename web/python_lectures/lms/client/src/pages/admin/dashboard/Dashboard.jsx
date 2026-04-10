import { motion } from 'framer-motion';
import {
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice2,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowTrendingDown,
  HiOutlineAcademicCap,
  HiOutlineClipboardDocumentList,
} from 'react-icons/hi2';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar,
} from 'recharts';
import {
  mockStats, mockEnrollmentData, mockDepartmentDistribution, mockRecentActivity,
} from '../../../utils/mockData';
import { formatNumber } from '../../../utils/common';

const statCards = [
  { label: 'Total Students', value: mockStats.totalStudents, icon: HiOutlineUsers, color: '#7C3AED', change: '+12%', up: true },
  { label: 'Total Teachers', value: mockStats.totalTeachers, icon: HiOutlineUserGroup, color: '#3B82F6', change: '+5%', up: true },
  { label: 'Active Courses', value: mockStats.totalCourses, icon: HiOutlineBookOpen, color: '#10B981', change: '+8%', up: true },
  { label: 'Departments', value: mockStats.totalDepartments, icon: HiOutlineBuildingOffice2, color: '#F59E0B', change: '0%', up: true },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const activityIcons = {
  student: HiOutlineUsers,
  grade: HiOutlineClipboardDocumentList,
  event: HiOutlineAcademicCap,
  course: HiOutlineBookOpen,
};

const activityColors = {
  student: '#7C3AED',
  grade: '#10B981',
  event: '#3B82F6',
  course: '#F59E0B',
};

export default function Dashboard() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      {/* Page Title */}
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">Dashboard Overview</h1>
        <p className="text-sm text-text-muted mt-1">Welcome to the admin dashboard. Here's what's happening today.</p>
      </motion.div>

      {/* Stat Cards */}
      <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4 }}
            className="glass-card p-5 flex items-start justify-between"
          >
            <div>
              <p className="text-sm text-text-muted">{stat.label}</p>
              <p className="text-3xl font-bold text-text-primary mt-1">{formatNumber(stat.value)}</p>
              <div className="flex items-center gap-1 mt-2">
                {stat.up ? (
                  <HiOutlineArrowTrendingUp className="text-success text-sm" />
                ) : (
                  <HiOutlineArrowTrendingDown className="text-danger text-sm" />
                )}
                <span className={`text-xs font-medium ${stat.up ? 'text-success' : 'text-danger'}`}>
                  {stat.change}
                </span>
                <span className="text-xs text-text-muted">vs last month</span>
              </div>
            </div>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: stat.color + '15' }}
            >
              <stat.icon className="text-2xl" style={{ color: stat.color }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Enrollment Trend - Area Chart */}
        <motion.div variants={item} className="lg:col-span-2 glass-card p-5">
          <h3 className="text-base font-semibold text-text-primary mb-4">Enrollment Trends</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={mockEnrollmentData}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorCourses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9CA3AF' }} />
              <YAxis tick={{ fontSize: 12, fill: '#9CA3AF' }} />
              <Tooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                }}
              />
              <Area type="monotone" dataKey="students" stroke="#7C3AED" fill="url(#colorStudents)" strokeWidth={2} />
              <Area type="monotone" dataKey="courses" stroke="#A78BFA" fill="url(#colorCourses)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Department Distribution - Pie Chart */}
        <motion.div variants={item} className="glass-card p-5">
          <h3 className="text-base font-semibold text-text-primary mb-4">Students by Department</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={mockDepartmentDistribution}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {mockDepartmentDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {mockDepartmentDistribution.slice(0, 4).map((dept, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dept.color }} />
                  <span className="text-text-secondary">{dept.name}</span>
                </div>
                <span className="font-medium text-text-primary">{dept.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Course Performance - Bar Chart */}
        <motion.div variants={item} className="glass-card p-5">
          <h3 className="text-base font-semibold text-text-primary mb-4">Monthly Course Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={mockEnrollmentData.slice(0, 6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9CA3AF' }} />
              <YAxis tick={{ fontSize: 12, fill: '#9CA3AF' }} />
              <Tooltip
                contentStyle={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                }}
              />
              <Bar dataKey="students" fill="#7C3AED" radius={[6, 6, 0, 0]} />
              <Bar dataKey="courses" fill="#C4B5FD" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={item} className="glass-card p-5">
          <h3 className="text-base font-semibold text-text-primary mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {mockRecentActivity.map((activity) => {
              const Icon = activityIcons[activity.type] || HiOutlineUsers;
              const color = activityColors[activity.type] || '#7C3AED';
              return (
                <div key={activity.id} className="flex items-start gap-3 group">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: color + '15' }}
                  >
                    <Icon className="text-lg" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary font-medium">{activity.action}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-text-muted">{activity.user}</span>
                      <span className="w-1 h-1 bg-gray-light rounded-full" />
                      <span className="text-xs text-text-muted">{activity.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Quick Stats Bar */}
      <motion.div variants={item} className="glass-card p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">{formatNumber(mockStats.activeEnrollments)}</p>
            <p className="text-sm text-text-muted mt-1">Active Enrollments</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">{mockStats.averageGPA}</p>
            <p className="text-sm text-text-muted mt-1">Average GPA</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">98%</p>
            <p className="text-sm text-text-muted mt-1">Attendance Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">4.8</p>
            <p className="text-sm text-text-muted mt-1">Avg. Rating</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
