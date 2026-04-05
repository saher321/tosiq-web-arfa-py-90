function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-900">LMS</p>
          <p className="text-xs text-slate-500">Minimal course hub for students and instructors.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} LMS</span>
          <a href="#" className="transition hover:text-slate-900">
            Terms
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Privacy
          </a>
          <a href="#" className="transition hover:text-slate-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
