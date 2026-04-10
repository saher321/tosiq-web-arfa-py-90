// Mock data for the LMS Dashboard

export const mockUsers = {
  admin: {
    id: 1,
    name: 'Dr. Sarah Ahmed',
    email: 'admin@lms.edu',
    role: 'admin',
    avatar: null,
    department: 'Computer Science',
  },
  student: {
    id: 2,
    name: 'Ali Hassan',
    email: 'student@lms.edu',
    role: 'student',
    avatar: null,
    department: 'Computer Science',
    enrollmentId: 'STU-2024-001',
    semester: 6,
    gpa: 3.72,
  },
  teacher: {
    id: 3,
    name: 'Prof. Maria Khan',
    email: 'teacher@lms.edu',
    role: 'teacher',
    avatar: null,
    department: 'Computer Science',
    employeeId: 'TCH-2024-001',
  },
};

export const mockDepartments = [
  { id: 1, name: 'Computer Science', head: 'Dr. Sarah Ahmed', students: 320, teachers: 18, courses: 24, status: 'active' },
  { id: 2, name: 'Electrical Engineering', head: 'Prof. Usman Ali', students: 280, teachers: 15, courses: 20, status: 'active' },
  { id: 3, name: 'Business Administration', head: 'Dr. Fatima Noor', students: 410, teachers: 22, courses: 28, status: 'active' },
  { id: 4, name: 'Mathematics', head: 'Dr. Imran Sheikh', students: 150, teachers: 10, courses: 16, status: 'active' },
  { id: 5, name: 'Physics', head: 'Prof. Ayesha Siddiqui', students: 120, teachers: 8, courses: 12, status: 'active' },
  { id: 6, name: 'English Literature', head: 'Dr. Nadia Hussain', students: 95, teachers: 7, courses: 10, status: 'inactive' },
];

export const mockCourses = [
  { id: 1, code: 'CS-301', name: 'Data Structures & Algorithms', department: 'Computer Science', teacher: 'Prof. Maria Khan', students: 45, credits: 3, semester: 'Fall 2025', status: 'active' },
  { id: 2, code: 'CS-401', name: 'Machine Learning', department: 'Computer Science', teacher: 'Dr. Ahmed Raza', students: 38, credits: 3, semester: 'Fall 2025', status: 'active' },
  { id: 3, code: 'CS-302', name: 'Database Systems', department: 'Computer Science', teacher: 'Prof. Bilal Tariq', students: 42, credits: 3, semester: 'Fall 2025', status: 'active' },
  { id: 4, code: 'EE-201', name: 'Circuit Analysis', department: 'Electrical Engineering', teacher: 'Prof. Usman Ali', students: 35, credits: 4, semester: 'Fall 2025', status: 'active' },
  { id: 5, code: 'BA-101', name: 'Principles of Management', department: 'Business Administration', teacher: 'Dr. Fatima Noor', students: 60, credits: 3, semester: 'Fall 2025', status: 'active' },
  { id: 6, code: 'MTH-201', name: 'Linear Algebra', department: 'Mathematics', teacher: 'Dr. Imran Sheikh', students: 28, credits: 3, semester: 'Fall 2025', status: 'active' },
  { id: 7, code: 'CS-501', name: 'Artificial Intelligence', department: 'Computer Science', teacher: 'Dr. Sarah Ahmed', students: 30, credits: 3, semester: 'Spring 2026', status: 'upcoming' },
  { id: 8, code: 'PHY-101', name: 'Mechanics', department: 'Physics', teacher: 'Prof. Ayesha Siddiqui', students: 50, credits: 4, semester: 'Fall 2025', status: 'active' },
];

export const mockStudents = [
  { id: 1, name: 'Ali Hassan', enrollmentId: 'STU-2024-001', email: 'ali@lms.edu', department: 'Computer Science', semester: 6, gpa: 3.72, status: 'active', enrolledCourses: 5 },
  { id: 2, name: 'Zara Malik', enrollmentId: 'STU-2024-002', email: 'zara@lms.edu', department: 'Computer Science', semester: 4, gpa: 3.85, status: 'active', enrolledCourses: 6 },
  { id: 3, name: 'Omar Farooq', enrollmentId: 'STU-2024-003', email: 'omar@lms.edu', department: 'Electrical Engineering', semester: 5, gpa: 3.45, status: 'active', enrolledCourses: 5 },
  { id: 4, name: 'Hira Asif', enrollmentId: 'STU-2024-004', email: 'hira@lms.edu', department: 'Business Administration', semester: 3, gpa: 3.90, status: 'active', enrolledCourses: 6 },
  { id: 5, name: 'Rayan Ahmed', enrollmentId: 'STU-2024-005', email: 'rayan@lms.edu', department: 'Computer Science', semester: 8, gpa: 3.60, status: 'active', enrolledCourses: 4 },
  { id: 6, name: 'Sana Qureshi', enrollmentId: 'STU-2024-006', email: 'sana@lms.edu', department: 'Mathematics', semester: 2, gpa: 3.95, status: 'active', enrolledCourses: 7 },
  { id: 7, name: 'Bilal Nawaz', enrollmentId: 'STU-2024-007', email: 'bilal@lms.edu', department: 'Physics', semester: 6, gpa: 3.30, status: 'inactive', enrolledCourses: 0 },
  { id: 8, name: 'Amna Riaz', enrollmentId: 'STU-2024-008', email: 'amna@lms.edu', department: 'Computer Science', semester: 4, gpa: 3.78, status: 'active', enrolledCourses: 5 },
];

export const mockTeachers = [
  { id: 1, name: 'Prof. Maria Khan', employeeId: 'TCH-2024-001', email: 'maria@lms.edu', department: 'Computer Science', designation: 'Associate Professor', courses: 3, students: 125, status: 'active' },
  { id: 2, name: 'Dr. Ahmed Raza', employeeId: 'TCH-2024-002', email: 'ahmed@lms.edu', department: 'Computer Science', designation: 'Assistant Professor', courses: 2, students: 76, status: 'active' },
  { id: 3, name: 'Prof. Bilal Tariq', employeeId: 'TCH-2024-003', email: 'bilal@lms.edu', department: 'Computer Science', designation: 'Professor', courses: 2, students: 84, status: 'active' },
  { id: 4, name: 'Prof. Usman Ali', employeeId: 'TCH-2024-004', email: 'usman@lms.edu', department: 'Electrical Engineering', designation: 'Professor', courses: 3, students: 105, status: 'active' },
  { id: 5, name: 'Dr. Fatima Noor', employeeId: 'TCH-2024-005', email: 'fatima@lms.edu', department: 'Business Administration', designation: 'Associate Professor', courses: 2, students: 120, status: 'active' },
  { id: 6, name: 'Dr. Imran Sheikh', employeeId: 'TCH-2024-006', email: 'imran@lms.edu', department: 'Mathematics', designation: 'Assistant Professor', courses: 2, students: 56, status: 'active' },
];

export const mockGrades = [
  { id: 1, student: 'Ali Hassan', course: 'Data Structures & Algorithms', code: 'CS-301', midterm: 85, final: 78, assignment: 90, total: 84, grade: 'A-', semester: 'Fall 2025' },
  { id: 2, student: 'Ali Hassan', course: 'Database Systems', code: 'CS-302', midterm: 72, final: 80, assignment: 88, total: 80, grade: 'B+', semester: 'Fall 2025' },
  { id: 3, student: 'Zara Malik', course: 'Data Structures & Algorithms', code: 'CS-301', midterm: 92, final: 88, assignment: 95, total: 91, grade: 'A', semester: 'Fall 2025' },
  { id: 4, student: 'Zara Malik', course: 'Machine Learning', code: 'CS-401', midterm: 88, final: 85, assignment: 92, total: 88, grade: 'A', semester: 'Fall 2025' },
  { id: 5, student: 'Omar Farooq', course: 'Circuit Analysis', code: 'EE-201', midterm: 70, final: 75, assignment: 82, total: 76, grade: 'B', semester: 'Fall 2025' },
  { id: 6, student: 'Hira Asif', course: 'Principles of Management', code: 'BA-101', midterm: 95, final: 92, assignment: 98, total: 95, grade: 'A+', semester: 'Fall 2025' },
  { id: 7, student: 'Rayan Ahmed', course: 'Machine Learning', code: 'CS-401', midterm: 68, final: 72, assignment: 80, total: 73, grade: 'B-', semester: 'Fall 2025' },
  { id: 8, student: 'Sana Qureshi', course: 'Linear Algebra', code: 'MTH-201', midterm: 98, final: 95, assignment: 100, total: 97, grade: 'A+', semester: 'Fall 2025' },
];

export const mockStats = {
  totalStudents: 1375,
  totalTeachers: 80,
  totalCourses: 110,
  totalDepartments: 6,
  activeEnrollments: 4250,
  averageGPA: 3.65,
};

export const mockEnrollmentData = [
  { month: 'Jan', students: 120, courses: 8 },
  { month: 'Feb', students: 180, courses: 12 },
  { month: 'Mar', students: 250, courses: 15 },
  { month: 'Apr', students: 310, courses: 18 },
  { month: 'May', students: 280, courses: 16 },
  { month: 'Jun', students: 150, courses: 10 },
  { month: 'Jul', students: 90, courses: 6 },
  { month: 'Aug', students: 200, courses: 14 },
  { month: 'Sep', students: 380, courses: 22 },
  { month: 'Oct', students: 420, courses: 24 },
  { month: 'Nov', students: 350, courses: 20 },
  { month: 'Dec', students: 300, courses: 18 },
];

export const mockDepartmentDistribution = [
  { name: 'Computer Science', value: 320, color: '#7C3AED' },
  { name: 'Electrical Eng.', value: 280, color: '#A78BFA' },
  { name: 'Business Admin.', value: 410, color: '#6D28D9' },
  { name: 'Mathematics', value: 150, color: '#C4B5FD' },
  { name: 'Physics', value: 120, color: '#DDD6FE' },
  { name: 'English Lit.', value: 95, color: '#EDE9FE' },
];

export const mockRecentActivity = [
  { id: 1, action: 'New student registered', user: 'Amna Riaz', time: '2 minutes ago', type: 'student' },
  { id: 2, action: 'Course grade submitted', user: 'Prof. Maria Khan', time: '15 minutes ago', type: 'grade' },
  { id: 3, action: 'Department meeting scheduled', user: 'Dr. Sarah Ahmed', time: '1 hour ago', type: 'event' },
  { id: 4, action: 'New course added', user: 'Admin', time: '3 hours ago', type: 'course' },
  { id: 5, action: 'Assignment deadline extended', user: 'Prof. Bilal Tariq', time: '5 hours ago', type: 'course' },
  { id: 6, action: 'Student enrollment approved', user: 'Admin', time: '1 day ago', type: 'student' },
];

export const mockStudentCourses = [
  { id: 1, code: 'CS-301', name: 'Data Structures & Algorithms', teacher: 'Prof. Maria Khan', progress: 75, grade: 'A-', schedule: 'Mon, Wed 10:00 AM' },
  { id: 2, code: 'CS-302', name: 'Database Systems', teacher: 'Prof. Bilal Tariq', progress: 60, grade: 'B+', schedule: 'Tue, Thu 2:00 PM' },
  { id: 3, code: 'CS-401', name: 'Machine Learning', teacher: 'Dr. Ahmed Raza', progress: 45, grade: 'B', schedule: 'Mon, Wed 2:00 PM' },
  { id: 4, code: 'MTH-201', name: 'Linear Algebra', teacher: 'Dr. Imran Sheikh', progress: 80, grade: 'A', schedule: 'Tue, Thu 10:00 AM' },
  { id: 5, code: 'PHY-101', name: 'Mechanics', teacher: 'Prof. Ayesha Siddiqui', progress: 55, grade: 'B+', schedule: 'Fri 10:00 AM' },
];

export const mockTeacherCourses = [
  { id: 1, code: 'CS-301', name: 'Data Structures & Algorithms', students: 45, assignments: 8, pending: 12, schedule: 'Mon, Wed 10:00 AM', semester: 'Fall 2025' },
  { id: 2, code: 'CS-201', name: 'Object Oriented Programming', students: 52, assignments: 6, pending: 5, schedule: 'Tue, Thu 10:00 AM', semester: 'Fall 2025' },
  { id: 3, code: 'CS-101', name: 'Introduction to Programming', students: 60, assignments: 10, pending: 20, schedule: 'Mon, Wed, Fri 2:00 PM', semester: 'Fall 2025' },
];
