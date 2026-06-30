import { motion } from 'framer-motion'
import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))
const sceneUrl = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode'

export default function Hero3D() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    let frame = 0
    let nextTilt = { x: 0, y: 0 }

    const updateRotation = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8
      nextTilt = { x, y }
      if (!frame) {
        frame = requestAnimationFrame(() => {
          setTilt(nextTilt)
          frame = 0
        })
      }
    }

    const resetRotation = () => {
      nextTilt = { x: 0, y: 0 }
      if (!frame) {
        frame = requestAnimationFrame(() => {
          setTilt(nextTilt)
          frame = 0
        })
      }
    }

    wrapper.addEventListener('pointermove', updateRotation)
    wrapper.addEventListener('pointerleave', resetRotation)

    return () => {
      wrapper.removeEventListener('pointermove', updateRotation)
      wrapper.removeEventListener('pointerleave', resetRotation)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <motion.div
      ref={wrapperRef}
      className="hero-visual glass-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="hero-3d-shell">
        <motion.div
          className="hero-3d-inner"
          style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
          transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        >
          <motion.div
            className="hero-3d-model"
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          >
            <Suspense fallback={<div className="hero-3d-fallback">Loading 3D preview...</div>}>
              <Spline
                scene={sceneUrl}
                style={{ width: '100%', height: '100%', background: 'transparent' }}
              />
            </Suspense>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
