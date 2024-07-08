// src/components/EarthModel.tsx

'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Earth = () => {
  const earthRef = useRef<any>();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;
    }
  });

  const { scene } = useGLTF('/assets/models/earth.glb'); 

  return <primitive ref={earthRef} object={scene} scale={[2.2, 2.2, 2.2]} position={[0, -.3, 0]}/>;
};

const EarthModel = () => {
  return (
    <Canvas style={{ height: '400px', width: '500px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Earth />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default EarthModel;
