import { HiOutlineAcademicCap } from 'react-icons/hi2';

export default function Footer() {
  return (
    <footer className="border-t border-gray-light/50 bg-white/50 backdrop-blur-sm">
      <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <HiOutlineAcademicCap className="text-primary text-lg" />
          <span>
            © {new Date().getFullYear()} <span className="font-medium text-text-primary">LMS Dashboard</span>. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-muted">
          <span>Version 1.0.0</span>
          <span className="w-1 h-1 bg-gray-light rounded-full" />
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="w-1 h-1 bg-gray-light rounded-full" />
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
