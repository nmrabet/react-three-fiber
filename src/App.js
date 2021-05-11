import React, {Suspense} from 'react';
import './App.css';
import {OrbitControls} from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import Model from './Shoe-draco';
import "./App.css";

function App() {
  return (
    <>
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 20 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5}/>
        <Model />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
    </Canvas>
    </>
  );
}

export default App;
