/**
 * Trims a string to make it suitable for use in a <meta name="description"> tag.
 *
 * @param {string} input
 * @param {number} [maxLength=160]
 * @returns {string}
 */
export function cutToMetaDescription(input: string, maxLength: number = 160) {
  const slice = input.slice(0, maxLength);
  const dotIndex = slice.lastIndexOf('.');

  if (dotIndex !== -1) {
    return slice.slice(0, dotIndex + 1);
  }

  const spaceIndex = slice.lastIndexOf(' ');
  return spaceIndex !== -1 ? slice.slice(0, spaceIndex) + '…' : slice;
}
