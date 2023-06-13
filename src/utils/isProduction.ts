export const isProduction = (): boolean => {
  if (typeof window !== 'undefined') {
    if (window.location.href.includes('localhost')) {
      return false
    }
  }
  return true
}
