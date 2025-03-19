import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Sampleholder = () => {
  const sampleHolder = useGLTF("./sampleholder/result.gltf");

  return (
    <primitive object={sampleHolder.scene} 
               scale={0.022} 
               position-y={-1} 
               rotation-x={3.10*3/2}
               rotation-z={0} />
  );
};

const SampleHolderCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [1, 1, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 0, 10]}
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          castShadow
          position={[0, 0, -10]}
          intensity={0.3}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          castShadow
          position={[-10, 0, 0]}
          intensity={0.3}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight
          castShadow
          position={[10, 0, 0]}
          intensity={0.3}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
         <Sampleholder/>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SampleHolderCanvas;
