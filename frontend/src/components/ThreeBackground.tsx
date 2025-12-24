import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import '../styles/ThreeBackground.css'

export const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000)
    camera.position.z = 80

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 700
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 400
      positions[i + 1] = (Math.random() - 0.5) * 400
      positions[i + 2] = (Math.random() - 0.5) * 400
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMaterial = new THREE.PointsMaterial({
      color: 0x88a3ff,
      size: 1.2,
      transparent: true,
      opacity: 0.8
    })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Light glow plane
    const glowGeometry = new THREE.PlaneGeometry(400, 400)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x3050ff,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.z = -50
    scene.add(glow)

    const clock = new THREE.Clock()

    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      stars.rotation.x = elapsed * 0.02
      stars.rotation.y = elapsed * 0.03
      glow.rotation.z = elapsed * 0.005
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      starGeometry.dispose()
      starMaterial.dispose()
      glowGeometry.dispose()
      glowMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div className="three-bg" ref={mountRef} aria-hidden="true" />
}

