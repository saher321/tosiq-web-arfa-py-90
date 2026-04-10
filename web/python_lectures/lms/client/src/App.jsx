import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

// Layouts
import AdminLayout from './layouts/AdminLayout';
import StudentLayout from './layouts/StudentLayout';
import TeacherLayout from './layouts/TeacherLayout';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Admin Pages
import AdminDashboard from './pages/admin/dashboard/Dashboard';
import Departments from './pages/admin/departments/Departments';
import AdminCourses from './pages/admin/courses/Courses';
import Students from './pages/admin/students/Students';
import Teachers from './pages/admin/teachers/Teachers';
import AdminGrades from './pages/admin/grades/Grades';
import Settings from './pages/admin/settings/Settings';

// Student Pages
import StudentDashboard from './pages/student/dashboard/Dashboard';
import StudentCourses from './pages/student/courses/Courses';
import StudentGrades from './pages/student/grades/Grades';

// Teacher Pages
import TeacherDashboard from './pages/teacher/dashboard/Dashboard';
import TeacherCourses from './pages/teacher/courses/Courses';
import TeacherGrades from './pages/teacher/grades/Grades';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="departments" element={<Departments />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="grades" element={<AdminGrades />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="courses" element={<StudentCourses />} />
            <Route path="grades" element={<StudentGrades />} />
          </Route>

          {/* Teacher Routes */}
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="courses" element={<TeacherCourses />} />
            <Route path="grades" element={<TeacherGrades />} />
          </Route>

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#fff',
            color: '#1F2937',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: '1px solid #E5E7EB',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#7C3AED', secondary: '#fff' },
          },
        }}
      />
    </AuthProvider>
  );
}

export default App;
