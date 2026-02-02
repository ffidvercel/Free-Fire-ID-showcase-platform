/**
 * Formats a number according to the Indian locale (en-IN).
 * This handles lakhs, crores, etc. correctly.
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}
