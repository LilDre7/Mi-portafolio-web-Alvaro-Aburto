import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import * as THREE from 'three';
import { motion } from "framer-motion";

function Scene() {  
  return (
    <motion.section 
    initial={{ width: 0 }}
    animate={{  width: "100%" }}
    exit={{ z: "100%" }}
    transition={{ duration: 1 }}
    className="container mt-10">
      <Canvas
        camera={{
          position: [0, 6, 35],
          fov: 55,
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
          position={[14 , 14, 14]}
          color={"#ffffff"}
          intensity={1.3}
        />

        <ambientLight 
          intensity={0.5}
          color={"#ffffff"}
        />
        <OrbitControls 
          target={[0, 4, 1]}
          enablePan={false}
        />
      </Canvas>
    </motion.section>
  );
}

export default Scene;
