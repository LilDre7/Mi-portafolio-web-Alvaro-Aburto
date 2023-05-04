import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import Stack from "./Stack";

const Laptop = (props) => {
  const { nodes, materials } = useGLTF("/images/Laptop.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        name="Plane005"
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.grey}
      />
      <mesh
        name="Plane005_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane005_1.geometry}
        material={materials.Black}
      />
      <mesh
        name="Plane007"
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        name="Plane007_1"
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
      <mesh
        name="Screen"
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
      >
        <Html
          transform
          occlude
          position={[0, 12.851, -5.38028]}
          className="text-white w-[935px] h-[665px] rounded-3xl 
        -translate-x-2 -translate-y-3 overflow-y-auto container "
        >
          <Stack />
        </Html>
      </mesh>

      <mesh
        name="Teclas"
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
      />
      <mesh
        name="Touchpad"
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
      />
      <mesh
        name="TouchpadBtns"
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
      />
    </group>
  );
};
useGLTF.preload("/images/Laptop.glb");

export default Laptop;
