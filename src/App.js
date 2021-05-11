import React, {Suspense} from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Model from './components/three/Scene';
import "./App.css";

function App() {
  return (
    <>
    <Canvas colorManagement shadowMap camera={{position: [-5, 4, 4], fov: 40}}>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
    </>
  );
}

export default App;
