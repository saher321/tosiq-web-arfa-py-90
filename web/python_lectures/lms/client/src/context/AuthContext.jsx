import { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers } from '../utils/mockData';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for persisted session
    const savedUser = localStorage.getItem('lms_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('lms_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role = 'admin') => {
    // Mock login — accepts any password
    const mockUser = mockUsers[role];
    if (!mockUser) {
      toast.error('Invalid role selected');
      return false;
    }

    const userData = { ...mockUser, email };
    setUser(userData);
    localStorage.setItem('lms_user', JSON.stringify(userData));
    localStorage.setItem('lms_token', 'mock-jwt-token-' + role);
    toast.success(`Welcome back, ${userData.name}!`);
    return true;
  };

  const register = async (data) => {
    const userData = {
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      // role: data.role || 'student',
    };
    setUser(userData);
    // localStorage.setItem('lms_user', JSON.stringify(userData));
    // localStorage.setItem('lms_token', 'mock-jwt-token-' + userData.role);
    toast.success('Registration successful!');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lms_user');
    localStorage.removeItem('lms_token');
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
