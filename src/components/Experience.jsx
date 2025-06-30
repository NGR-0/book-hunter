import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <Book />
      <OrbitControls minDistance={2} maxDistance={10} />
      <Environment preset="studio" />
    </>
  );
};
