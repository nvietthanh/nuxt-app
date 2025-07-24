/**
 * Format a number into Vietnamese currency (VND).
 *
 * @param {number} price
 * @returns {string}
 */
export function formatPrice(price = 0) {
  return price.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

/**
 * Format a large number into a shortened form.
 *
 * @param {number} value
 * @returns {string}
 */
export function formatCompactNumber(value = 0) {
  if (value >= 1_000_000) {
    const formatted = value / 1_000_000;
    return (Number.isInteger(formatted) ? formatted : formatted.toFixed(1)) + 'tr';
  } else if (value >= 1_000) {
    const formatted = value / 1_000;
    return (Number.isInteger(formatted) ? formatted : formatted.toFixed(1)) + 'k';
  } else {
    return value.toString();
  }
}

/**
 * Format time ago from now.
 *
 * @param {string} value
 * @returns {string}
 */
export function timeAgoFromNow(value) {
  const now = new Date()
  const date = new Date(value)
  const diffMs = now.getTime() - date.getTime()

  const seconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)
  const years = Math.floor(days / 365)

  if (years > 0) return `${years} năm trước`
  if (months > 0) return `${months} tháng trước`
  if (weeks > 0) return `${weeks} tuần trước`
  if (days > 0) return `${days} ngày trước`
  if (hours > 0) return `${hours} giờ trước`
  if (minutes > 0) return `${minutes} phút trước`
  return 'Vừa xong'
}
