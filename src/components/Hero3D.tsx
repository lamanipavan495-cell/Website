import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import createVillaModel from './VillaModel'

export default function Hero3D() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#f8f1e8')
    scene.fog = new THREE.Fog('#f8f1e8', 6, 16)

    const width = wrapper.clientWidth || 520
    const height = wrapper.clientHeight || 520

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 60)
    camera.position.set(0, 2.45, 9.4)
    camera.lookAt(0, 2.0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    wrapper.innerHTML = ''
    wrapper.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.82)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.25)
    keyLight.position.set(6, 8, 5)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.set(1024, 1024)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xd8e0ff, 0.7)
    fillLight.position.set(-4, 4, -3)
    scene.add(fillLight)

    const pointLight = new THREE.PointLight(0xffe2b3, 1.0, 14)
    pointLight.position.set(0, 4.5, 3)
    scene.add(pointLight)

    const villa = createVillaModel()
    villa.rotation.y = Math.PI / 5.8 + 0.08
    scene.add(villa)

    const clock = new THREE.Clock()
    let frame = 0
    let nextTilt = { x: 0, y: 0 }

    const updateRotation = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6
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

    const resizeRenderer = () => {
      const width = wrapper.clientWidth || 520
      const height = wrapper.clientHeight || 520
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      villa.rotation.y = Math.PI / 5.8 + 0.08 + elapsed * 0.06
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()
    resizeRenderer()
    window.addEventListener('resize', resizeRenderer)
    wrapper.addEventListener('pointermove', updateRotation)
    wrapper.addEventListener('pointerleave', resetRotation)

    return () => {
      window.removeEventListener('resize', resizeRenderer)
      wrapper.removeEventListener('pointermove', updateRotation)
      wrapper.removeEventListener('pointerleave', resetRotation)
      if (frame) cancelAnimationFrame(frame)
      renderer.dispose()
      wrapper.innerHTML = ''
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
          <div className="hero-3d-model" />
        </motion.div>
      </div>
    </motion.div>
  )
}
