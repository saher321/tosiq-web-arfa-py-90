import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineBars3,
  HiOutlineChevronRight,
} from 'react-icons/hi2';
import { useAuth } from '../context/AuthContext';
import { getInitials, getAvatarColor, getGreeting } from '../utils/common';

const breadcrumbMap = {
  admin: 'Admin',
  student: 'Student',
  teacher: 'Teacher',
  dashboard: 'Dashboard',
  departments: 'Departments',
  courses: 'Courses',
  students: 'Students',
  teachers: 'Teachers',
  grades: 'Grades',
  settings: 'Settings',
};

export default function Header({ onMenuToggle }) {
  const { user } = useAuth();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef(null);

  // Generate breadcrumbs from path
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const breadcrumbs = pathSegments.map((seg) => breadcrumbMap[seg] || seg);

  // Close notification dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const mockNotifications = [
    { id: 1, text: 'New assignment submitted by Ali Hassan', time: '5m ago', unread: true },
    { id: 2, text: 'Department meeting at 3:00 PM', time: '1h ago', unread: true },
    { id: 3, text: 'Grade report ready for review', time: '3h ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-light/50">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left: hamburger + breadcrumb */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <HiOutlineBars3 className="text-xl text-text-primary" />
          </button>

          <div>
            {/* Greeting */}
            <h2 className="text-lg font-semibold text-text-primary">
              {getGreeting()}, <span className="gradient-text">{user?.name?.split(' ')[0]}</span>
            </h2>
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-xs text-text-muted">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <HiOutlineChevronRight className="text-[10px]" />}
                  <span className={i === breadcrumbs.length - 1 ? 'text-primary font-medium' : ''}>
                    {crumb}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: search, notifications, profile */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  placeholder="Search..."
                  className="absolute right-10 top-1/2 -translate-y-1/2 h-9 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
              )}
            </AnimatePresence>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer"
            >
              <HiOutlineMagnifyingGlass className="text-lg text-text-secondary" />
            </button>
          </div>

          {/* Notifications */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative p-2.5 rounded-xl hover:bg-primary-50 transition-colors cursor-pointer"
            >
              <HiOutlineBell className="text-lg text-text-secondary" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full animate-pulse-glow" />
            </button>

            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-2xl border border-gray-light/50 overflow-hidden"
                >
                  <div className="px-4 py-3 border-b border-gray-light/50">
                    <h3 className="font-semibold text-sm text-text-primary">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {mockNotifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-4 py-3 hover:bg-ghost transition-colors cursor-pointer border-b border-gray-light/30 last:border-0 ${
                          n.unread ? 'bg-primary-50/30' : ''
                        }`}
                      >
                        <p className="text-sm text-text-primary">{n.text}</p>
                        <p className="text-xs text-text-muted mt-1">{n.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2.5 border-t border-gray-light/50 text-center">
                    <button className="text-xs text-primary font-medium hover:underline cursor-pointer">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3 pl-3 border-l border-gray-light/50">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: getAvatarColor(user?.name) }}
            >
              {getInitials(user?.name)}
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-text-primary">{user?.name}</p>
              <p className="text-xs text-text-muted capitalize">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
