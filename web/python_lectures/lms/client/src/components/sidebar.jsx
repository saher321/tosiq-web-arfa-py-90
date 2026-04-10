import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineHome,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineChevronLeft,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2';
import { useAuth } from '../context/AuthContext';
import { getInitials, getAvatarColor } from '../utils/common';

const adminLinks = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: HiOutlineHome },
  { to: '/admin/departments', label: 'Departments', icon: HiOutlineBuildingOffice2 },
  { to: '/admin/courses', label: 'Courses', icon: HiOutlineBookOpen },
  { to: '/admin/students', label: 'Students', icon: HiOutlineUsers },
  { to: '/admin/teachers', label: 'Teachers', icon: HiOutlineUserGroup },
  { to: '/admin/grades', label: 'Grades', icon: HiOutlineClipboardDocumentList },
  { to: '/admin/settings', label: 'Settings', icon: HiOutlineCog6Tooth },
];

const studentLinks = [
  { to: '/student/dashboard', label: 'Dashboard', icon: HiOutlineHome },
  { to: '/student/courses', label: 'My Courses', icon: HiOutlineBookOpen },
  { to: '/student/grades', label: 'My Grades', icon: HiOutlineClipboardDocumentList },
];

const teacherLinks = [
  { to: '/teacher/dashboard', label: 'Dashboard', icon: HiOutlineHome },
  { to: '/teacher/courses', label: 'My Courses', icon: HiOutlineBookOpen },
  { to: '/teacher/grades', label: 'Grades', icon: HiOutlineClipboardDocumentList },
];

const roleLinks = {
  admin: adminLinks,
  student: studentLinks,
  teacher: teacherLinks,
};

export default function Sidebar({ collapsed, setCollapsed }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const links = roleLinks[user?.role] || adminLinks;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const sidebarVariants = {
    expanded: { width: 260 },
    collapsed: { width: 78 },
  };

  return (
    <motion.aside
      initial={false}
      animate={collapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 h-screen z-50 flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #1E1B2E 0%, #2D1B69 100%)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <HiOutlineAcademicCap className="text-white text-xl" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">LMS</span>
            </motion.div>
          )}
        </AnimatePresence>
        {collapsed && (
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center mx-auto">
            <HiOutlineAcademicCap className="text-white text-xl" />
          </div>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors cursor-pointer z-10"
      >
        <motion.div
          animate={{ rotate: collapsed ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiOutlineChevronLeft className="text-sm" />
        </motion.div>
      </button>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-gray-400 hover:bg-white/8 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className={`text-xl flex-shrink-0 ${isActive ? 'text-white' : ''}`} />
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className="text-sm font-medium whitespace-nowrap"
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {/* Tooltip when collapsed */}
                {collapsed && (
                  <div className="absolute left-full ml-3 px-3 py-1.5 bg-sidebar rounded-lg text-white text-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xl z-50">
                    {link.label}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User section */}
      <div className="p-3 border-t border-white/10">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: getAvatarColor(user?.name) }}
          >
            {getInitials(user?.name)}
          </div>
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 min-w-0"
              >
                <p className="text-white text-sm font-medium truncate">{user?.name}</p>
                <p className="text-gray-400 text-xs truncate capitalize">{user?.role}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={handleLogout}
          className={`mt-3 w-full flex items-center gap-2 px-3 py-2 rounded-xl text-gray-400 hover:bg-white/8 hover:text-red-400 transition-all cursor-pointer ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <HiOutlineArrowLeftOnRectangle className="text-xl" />
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.aside>
  );
}
