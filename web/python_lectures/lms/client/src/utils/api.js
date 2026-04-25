import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

export const SIGNUP_API = `${API_BASE_URL}/signup/`;
export const LOGIN_API = `${API_BASE_URL}/login/`;

export const DEPTS_API = `${API_BASE_URL}/departments/`;
export const DEPT_CREATE_API = `${API_BASE_URL}/departments/create`;
export const DEPT_UPDATE_API = `${API_BASE_URL}/departments/update/`;
export const DEPT_DELETE_API = `${API_BASE_URL}/departments/delete/`;

export const STUDENTS_API = `${API_BASE_URL}/students/`;
export const STUDENT_CREATE_API = `${API_BASE_URL}/students/create`;
export const STUDENT_UPDATE_API = `${API_BASE_URL}/students/update/`;
export const STUDENT_DELETE_API = `${API_BASE_URL}/students/delete/`;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('lms_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('lms_token');
      localStorage.removeItem('lms_user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);



export default api;
