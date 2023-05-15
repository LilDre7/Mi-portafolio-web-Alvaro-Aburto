import { Canvas, useFrame } from "@react-three/fiber";
import Laptop from "./Laptop";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

function CameraComponent() {
  const cameraRef = useRef();

  useFrame(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const aspectRatio = width / height;
    let fieldOfView;

    if (width <= 400) {
      fieldOfView = 20; // Tamaño de cámara para ancho de ventana menor o igual a 400px
    } else if (width <= 800) {
      fieldOfView = 40; // Tamaño de cámara para ancho de ventana entre 401px y 800px
    } else {
      fieldOfView = 20; // Tamaño de cámara para ancho de ventana mayor a 800px
    }

    const camera = cameraRef.current;

    // Actualizar la posición y el tamaño de la cámara
    camera.aspect = aspectRatio;
    camera.fov = fieldOfView;
    camera.updateProjectionMatrix();
  });

  return <perspectiveCamera ref={cameraRef} />;
}

function Scene() {
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%" }}
      transition={{ duration: 1 }}
      className="container mt-10"
    >
      <Canvas
        camera={{
          position: [0, 6, 37],
          fov: 70,
        }}
        gl={{
          outputEncoding: THREE.BasicDepthPacking,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 4.5,
        }}
      >
        <CameraComponent />
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>

        <directionalLight
          position={[14, 14, 14]}
          color={"#ffffff"}
          intensity={1.3}
        />

        <ambientLight intensity={0.5} color={"#ffffff"} />
        <OrbitControls target={[0, 4, 1]} enablePan={false} />

        

      </Canvas>
    </motion.section>
  );
}

export default Scene;
