import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { UI } from "./components/UI";
import { Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <UI />
      <Loader />
      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App;
