import * as THREE from 'three'

export default function createVillaModel() {
  const group = new THREE.Group()
  group.scale.set(0.8, 0.8, 0.8)
  group.position.set(0, -0.45, 0)

  const gardenMaterial = new THREE.MeshStandardMaterial({ color: '#dfeccf', roughness: 0.95 })
  const garden = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), gardenMaterial)
  garden.rotation.x = -Math.PI / 2
  garden.position.y = -0.08
  garden.receiveShadow = true
  group.add(garden)

  const driveway = new THREE.Mesh(
    new THREE.BoxGeometry(8.4, 0.08, 4.2),
    new THREE.MeshStandardMaterial({ color: '#c7b08c', roughness: 0.92 })
  )
  driveway.position.set(0, 0.02, 4.8)
  driveway.receiveShadow = true
  group.add(driveway)

  const mainBody = new THREE.Mesh(
    new THREE.BoxGeometry(5.8, 2.8, 3.9),
    new THREE.MeshStandardMaterial({ color: '#d9b79a', roughness: 0.85 })
  )
  mainBody.position.set(0, 1.4, 0)
  mainBody.castShadow = true
  mainBody.receiveShadow = true
  group.add(mainBody)

  const upperBody = new THREE.Mesh(
    new THREE.BoxGeometry(4.6, 1.9, 3.3),
    new THREE.MeshStandardMaterial({ color: '#c08d69', roughness: 0.8 })
  )
  upperBody.position.set(0, 3.45, 0)
  upperBody.castShadow = true
  upperBody.receiveShadow = true
  group.add(upperBody)

  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(6.2, 0.5, 4.4),
    new THREE.MeshStandardMaterial({ color: '#7a4f34', roughness: 0.75 })
  )
  roof.position.set(0, 4.8, 0)
  roof.castShadow = true
  roof.receiveShadow = true
  group.add(roof)

  const roofCap = new THREE.Mesh(
    new THREE.ConeGeometry(3.25, 1.25, 4),
    new THREE.MeshStandardMaterial({ color: '#5e3d28', roughness: 0.7 })
  )
  roofCap.position.set(0, 5.42, 0)
  roofCap.castShadow = true
  roofCap.receiveShadow = true
  group.add(roofCap)

  const porch = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 0.34, 2.4),
    new THREE.MeshStandardMaterial({ color: '#b99772', roughness: 0.9 })
  )
  porch.position.set(0, 0.95, 2.2)
  porch.castShadow = true
  porch.receiveShadow = true
  group.add(porch)

  const steps = new THREE.Mesh(
    new THREE.BoxGeometry(2.0, 0.24, 1.0),
    new THREE.MeshStandardMaterial({ color: '#8f6c4d' })
  )
  steps.position.set(0, 0.43, 3.2)
  steps.castShadow = true
  steps.receiveShadow = true
  group.add(steps)

  const porchRail = new THREE.Mesh(
    new THREE.BoxGeometry(2.2, 0.1, 0.12),
    new THREE.MeshStandardMaterial({ color: '#7f5b3b' })
  )
  porchRail.position.set(0, 1.35, 1.15)
  porchRail.castShadow = true
  porchRail.receiveShadow = true
  group.add(porchRail)

  const frontBand = new THREE.Mesh(
    new THREE.BoxGeometry(6.0, 0.22, 0.22),
    new THREE.MeshStandardMaterial({ color: '#8d5f3f' })
  )
  frontBand.position.set(0, 2.84, 1.96)
  frontBand.castShadow = true
  frontBand.receiveShadow = true
  group.add(frontBand)

  const sideBand = new THREE.Mesh(
    new THREE.BoxGeometry(0.22, 0.26, 3.9),
    new THREE.MeshStandardMaterial({ color: '#8d5f3f' })
  )
  sideBand.position.set(-2.82, 2.84, 0)
  sideBand.castShadow = true
  sideBand.receiveShadow = true
  group.add(sideBand)

  const sideBandRight = sideBand.clone()
  sideBandRight.position.set(2.82, 2.84, 0)
  group.add(sideBandRight)

  const columnMaterial = new THREE.MeshStandardMaterial({ color: '#8a6a4f' })
  const columns = [
    [-1.6, 2.2],
    [1.6, 2.2],
    [-1.6, -2.2],
    [1.6, -2.2],
  ]
  columns.forEach(([x, z]) => {
    const column = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 1.45, 10), columnMaterial)
    column.position.set(x, 0.72, z)
    column.castShadow = true
    column.receiveShadow = true
    group.add(column)
  })

  const windowMaterial = new THREE.MeshStandardMaterial({
    color: '#d8f0ff',
    emissive: '#75aee8',
    emissiveIntensity: 0.2,
    metalness: 0.15,
    roughness: 0.28,
  })

  const addWindow = (x: number, y: number, z: number, width = 0.6, height = 0.75) => {
    const windowMesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.08), windowMaterial)
    windowMesh.position.set(x, y, z)
    windowMesh.castShadow = true
    windowMesh.receiveShadow = true
    group.add(windowMesh)
  }

  addWindow(-1.3, 1.55, 1.95)
  addWindow(1.3, 1.55, 1.95)
  addWindow(-1.3, 3.45, 1.6)
  addWindow(1.3, 3.45, 1.6)
  addWindow(-2.05, 2.0, 0.22, 0.44, 1.08)
  addWindow(2.05, 2.0, 0.22, 0.44, 1.08)
  addWindow(-0.95, 2.0, 1.97, 0.58, 0.98)
  addWindow(0.95, 2.0, 1.97, 0.58, 0.98)

  const balcony = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 0.16, 1.5),
    new THREE.MeshStandardMaterial({ color: '#b69578' })
  )
  balcony.position.set(0, 3.95, -1.55)
  balcony.castShadow = true
  balcony.receiveShadow = true
  group.add(balcony)

  const planter = new THREE.Mesh(
    new THREE.BoxGeometry(2.1, 0.38, 0.9),
    new THREE.MeshStandardMaterial({ color: '#6d4c2f' })
  )
  planter.position.set(-2.55, 0.18, -1.8)
  planter.castShadow = true
  planter.receiveShadow = true
  group.add(planter)

  const greenery = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.62, 0.72, 10),
    new THREE.MeshStandardMaterial({ color: '#5c8b4f' })
  )
  greenery.position.set(-2.55, 0.46, -1.8)
  greenery.castShadow = true
  greenery.receiveShadow = true
  group.add(greenery)

  return group
}
