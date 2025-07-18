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
export function formatValue(value = 0) {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + 'tr';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + 'k';
  } else {
    return value.toString();
  }
}
