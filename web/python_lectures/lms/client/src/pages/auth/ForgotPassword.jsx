import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import toast from 'react-hot-toast';

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // Mock API call
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
    toast.success('Reset link sent to your email!');
  };

  return (
    <div className="min-h-screen bg-ghost flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/30 mb-4">
              <HiOutlineEnvelope className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Forgot Password?</h1>
            <p className="text-sm text-text-muted mt-1">
              {sent ? 'Check your email for the reset link' : 'Enter your email to receive a reset link'}
            </p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                  })}
                  className="w-full h-11 px-4 rounded-xl border border-gray-light bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {errors.email && <p className="text-xs text-danger mt-1">{errors.email.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-text-secondary mb-4">
                We've sent a password reset link to your email address. Please check your inbox.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-sm text-primary font-medium hover:text-primary-dark cursor-pointer"
              >
                Didn't receive it? Send again
              </button>
            </div>
          )}

          <p className="text-center text-sm text-text-muted mt-6">
            <Link to="/login" className="text-primary font-medium hover:text-primary-dark">
              ← Back to Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
