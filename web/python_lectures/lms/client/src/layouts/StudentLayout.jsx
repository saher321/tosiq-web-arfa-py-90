import { useState } from 'react';
import { Outlet, Navigate } from 'react-router';
import { motion } from 'framer-motion';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';
import { useAuth } from '../context/AuthContext';

export default function StudentLayout() {
  const { user, isAuthenticated } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (user?.role !== 'student') return <Navigate to={`/${user?.role}/dashboard`} replace />;

  return (
    <div className="min-h-screen bg-ghost">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <motion.div
        animate={{ marginLeft: collapsed ? 78 : 260 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex flex-col min-h-screen"
      >
        <Header onMenuToggle={() => setCollapsed(!collapsed)} />
        <main className="flex-1 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}
