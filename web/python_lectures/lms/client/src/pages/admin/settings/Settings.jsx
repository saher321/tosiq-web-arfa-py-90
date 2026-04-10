import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  HiOutlineUserCircle, HiOutlineLockClosed, HiOutlineBellAlert,
  HiOutlinePaintBrush, HiOutlineCheckCircle,
} from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const tabs = [
  { id: 'profile', label: 'Profile', icon: HiOutlineUserCircle },
  { id: 'password', label: 'Password', icon: HiOutlineLockClosed },
  { id: 'notifications', label: 'Notifications', icon: HiOutlineBellAlert },
  { id: 'appearance', label: 'Appearance', icon: HiOutlinePaintBrush },
];

export default function Settings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      department: user?.department || '',
    },
  });

  const onSaveProfile = (data) => {
    toast.success('Profile updated successfully!');
  };

  const onChangePassword = (data) => {
    toast.success('Password changed successfully!');
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-text-primary">Settings</h1>
        <p className="text-sm text-text-muted mt-1">Manage your account and application preferences</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tabs */}
        <motion.div variants={item} className="glass-card p-4 h-fit">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'text-text-secondary hover:bg-primary-50 hover:text-primary'
                }`}
              >
                <tab.icon className="text-lg" />
                {tab.label}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Content */}
        <motion.div variants={item} className="lg:col-span-3 glass-card p-6">
          {activeTab === 'profile' && (
            <form onSubmit={handleSubmit(onSaveProfile)} className="space-y-5">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  {errors.name && <p className="text-xs text-danger mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Department</label>
                  <input
                    {...register('department')}
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1.5">Role</label>
                  <input
                    value={user?.role || ''}
                    disabled
                    className="w-full h-11 px-4 rounded-xl border border-gray-light bg-gray-light/20 text-sm text-text-muted capitalize"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all cursor-pointer"
              >
                Save Changes
              </button>
            </form>
          )}

          {activeTab === 'password' && (
            <form onSubmit={handleSubmit(onChangePassword)} className="space-y-5 max-w-md">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Change Password</h2>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-xl border border-gray-light bg-ghost text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all cursor-pointer"
              >
                Update Password
              </button>
            </form>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Notification Preferences</h2>
              {[
                { label: 'Email notifications for new enrollments', enabled: true },
                { label: 'Push notifications for grade submissions', enabled: true },
                { label: 'Email digest (weekly summary)', enabled: false },
                { label: 'SMS alerts for important events', enabled: false },
                { label: 'Notifications for course updates', enabled: true },
              ].map((notif, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-light/30 last:border-0">
                  <span className="text-sm text-text-primary">{notif.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={notif.enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-light rounded-full peer-checked:bg-primary transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5" />
                  </label>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Appearance</h2>
              <div>
                <p className="text-sm font-medium text-text-primary mb-3">Theme</p>
                <div className="flex gap-4">
                  {['Light', 'Dark', 'System'].map((theme) => (
                    <button
                      key={theme}
                      className={`px-6 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                        theme === 'Light'
                          ? 'border-primary bg-primary-50 text-primary'
                          : 'border-gray-light bg-white text-text-secondary hover:border-primary'
                      }`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary mb-3">Sidebar</p>
                <div className="flex gap-4">
                  {['Expanded', 'Collapsed'].map((mode) => (
                    <button
                      key={mode}
                      className={`px-6 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                        mode === 'Expanded'
                          ? 'border-primary bg-primary-50 text-primary'
                          : 'border-gray-light bg-white text-text-secondary hover:border-primary'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
