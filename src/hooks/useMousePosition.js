import { useState, useEffect } from 'react'

/**
 * Returns normalized mouse position relative to element or viewport
 * Used for: magnetic cursor, tilt effects, hero profile image
 */
export function useMousePosition(elementRef = null) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [normalized, setNormalized] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
        setNormalized({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) })
      }
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [elementRef])

  return elementRef ? { ...mousePosition, normalized } : mousePosition
}
