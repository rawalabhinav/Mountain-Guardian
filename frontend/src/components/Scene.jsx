import React from 'react'
import { useGLTF, OrbitControls  } from '@react-three/drei'
import {Canvas} from '@react-three/fiber';

const Model = () => {
  const { nodes, materials } = useGLTF('/scene.gltf');

  return (
    <Canvas style={{height: '100vh'}}>
      <pointLight 
        position={[0, 0.5, 1]} 
        intensity={0.8}
        color={0xffffff}
        decay={1}
        distance={1000}/>

      <>
      <OrbitControls />
      <group  
        scale={12} 
        dispose={null}
      >
        <group position={[0, -0.152, 0.157]} rotation={[3, 0, 0]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
        </group>
      </group>
      </>
  </Canvas>
  )
}

useGLTF.preload('/scene.gltf')
export default Model;
