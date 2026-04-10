/**
 * Format a date to locale string
 */
export function formatDate(date, options = {}) {
  const defaults = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', { ...defaults, ...options });
}

/**
 * Format a number to compact notation
 */
export function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

/**
 * Truncate text with ellipsis
 */
export function truncate(str, maxLen = 50) {
  if (!str) return '';
  return str.length > maxLen ? str.slice(0, maxLen) + '...' : str;
}

/**
 * Generate initials from a name
 */
export function getInitials(name) {
  if (!name) return '';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Get a greeting based on time of day
 */
export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

/**
 * Generate a random color from a name (for avatars)
 */
export function getAvatarColor(name) {
  const colors = [
    '#7C3AED', '#6D28D9', '#A78BFA', '#3B82F6',
    '#10B981', '#F59E0B', '#EF4444', '#EC4899',
  ];
  let hash = 0;
  for (let i = 0; i < (name || '').length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

/**
 * Delay utility
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
