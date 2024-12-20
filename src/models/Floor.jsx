import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Floor = (props)=> {
  const { nodes, materials } = useGLTF("models/floor.glb");
  return (
    <group {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials.Material}
        position={[-0.03805339, -0.04790938, 0.03419757]}
        scale={10}
      />
    </group>
  );
}
 
export default Floor