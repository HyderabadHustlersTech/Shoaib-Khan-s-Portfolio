import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface LenisOptions {
    duration?: number
    easing?: (t: number) => number
    orientation?: 'vertical' | 'horizontal'
    gestureOrientation?: 'vertical' | 'horizontal' | 'both'
    smoothWheel?: boolean
    smoothTouch?: boolean
    touchMultiplier?: number
    wheelMultiplier?: number
    infinite?: boolean
    autoResize?: boolean
    enabled?: boolean
}

const defaultOptions: LenisOptions = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
    autoResize: true,
}

function isTouchDevice(): boolean {
    if (typeof window === 'undefined') return false
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export function useLenis(options: LenisOptions = {}) {
    const { enabled = true, ...lenisOptions } = options
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        if (!enabled) return
        if (isTouchDevice()) return

        const lenis = new Lenis({
            ...defaultOptions,
            ...lenisOptions,
        })

        lenisRef.current = lenis

        let rafId = 0
        function raf(time: number) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
            lenisRef.current = null
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enabled])

    return lenisRef
}

export default useLenis
