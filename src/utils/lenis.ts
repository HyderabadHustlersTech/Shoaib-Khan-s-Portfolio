import Lenis from 'lenis'

let lenisInstance: Lenis | null = null
let rafId: number | null = null

export const initLenis = (): Lenis | null => {
  // Disabled Lenis for better performance - using native smooth scrolling instead
  return null
}

export const getLenis = (): Lenis | null => {
  return lenisInstance
}

export const destroyLenis = (): void => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}