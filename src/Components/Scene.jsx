import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import * as THREE from 'three';

function Scene() {  
  return (
    <div className="container mt-10">
      <Canvas
        camera={{
          position: [0, 6, 35],
          fov: 65,
        }}

          gl={{
            outputEncoding: THREE.BasicDepthPacking,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 4.5,
          }}
      >
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>

        <directionalLight 
          position={[10 , 10, 10]}
          color={"#ffffff"}
          intensity={1.3}
        />

        <ambientLight 
          intensity={0.5}
          color={"#ffffff"}
        />
        <OrbitControls 
          target={[0, 6, 1]}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

export default Scene;
