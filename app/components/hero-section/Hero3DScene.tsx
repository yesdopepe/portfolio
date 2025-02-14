'use client';
import { Suspense, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

function Model() {
  const meshRef = useRef<Mesh>(null);
  const materials = useLoader(MTLLoader, '/laptop/laptop.mtl');
  const obj = useLoader(OBJLoader, '/laptop/laptop.obj', (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={obj}
      scale={0.01}
      position={[0, -1, 0]}
    />
  );
}

export function Hero3DScene() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight position={[0, 5, 5]} angle={0.3} penumbra={1} intensity={1} castShadow />
      <perspectiveCamera position={[3, 20, 20]} />
      <Model />
    </Suspense>
  );
}