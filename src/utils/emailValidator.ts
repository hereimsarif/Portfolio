export default function emailValidator(email: string) {
  // Simple RFC 5322 compliant regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
