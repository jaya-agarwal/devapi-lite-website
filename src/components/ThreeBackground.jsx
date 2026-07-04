import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const mountRef = useRef(null)

  useEffect(() => {
    const el = mountRef.current
    const W = window.innerWidth, H = window.innerHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // Particle field — floating API nodes
    const count = 180
    const positions = new Float32Array(count * 3)
    const colors    = new Float32Array(count * 3)
    const sizes     = new Float32Array(count)

    const colorA = new THREE.Color('#6c8fff')
    const colorB = new THREE.Color('#a855f7')
    const colorC = new THREE.Color('#4ade80')

    for (let i = 0; i < count; i++) {
      positions[i*3]   = (Math.random() - 0.5) * 80
      positions[i*3+1] = (Math.random() - 0.5) * 60
      positions[i*3+2] = (Math.random() - 0.5) * 40
      sizes[i] = Math.random() * 2 + 0.5

      const pick = Math.random()
      const c = pick < 0.5 ? colorA : pick < 0.8 ? colorB : colorC
      colors[i*3] = c.r; colors[i*3+1] = c.g; colors[i*3+2] = c.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size',     new THREE.BufferAttribute(sizes, 1))

    const mat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // Connection lines between nearby particles
    const lineMat = new THREE.LineBasicMaterial({
      color: '#6c8fff', transparent: true, opacity: 0.06
    })
    for (let i = 0; i < 40; i++) {
      const a = Math.floor(Math.random() * count)
      const b = Math.floor(Math.random() * count)
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(positions[a*3], positions[a*3+1], positions[a*3+2]),
        new THREE.Vector3(positions[b*3], positions[b*3+1], positions[b*3+2]),
      ])
      scene.add(new THREE.Line(lineGeo, lineMat))
    }

    // Floating rings
    const ringGeo = new THREE.TorusGeometry(12, 0.04, 8, 80)
    const ringMat = new THREE.MeshBasicMaterial({ color: '#2a2d3e', transparent: true, opacity: 0.4 })
    const ring1 = new THREE.Mesh(ringGeo, ringMat)
    ring1.rotation.x = Math.PI / 3
    scene.add(ring1)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(18, 0.03, 8, 100),
      new THREE.MeshBasicMaterial({ color: '#1e2030', transparent: true, opacity: 0.3 })
    )
    ring2.rotation.x = Math.PI / 5
    ring2.rotation.y = Math.PI / 4
    scene.add(ring2)

    // Mouse parallax
    let mouseX = 0, mouseY = 0
    const onMouse = (e) => {
      mouseX = (e.clientX / W - 0.5) * 2
      mouseY = (e.clientY / H - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // Resize
    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // Animate
    let frame
    let t = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      t += 0.004

      points.rotation.y = t * 0.06 + mouseX * 0.08
      points.rotation.x = mouseY * 0.05

      ring1.rotation.z = t * 0.03
      ring2.rotation.z = -t * 0.02
      ring1.rotation.x = Math.PI / 3 + mouseY * 0.04
      ring2.rotation.y = Math.PI / 4 + mouseX * 0.04

      // Breathe opacity
      mat.opacity = 0.45 + Math.sin(t) * 0.15

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
