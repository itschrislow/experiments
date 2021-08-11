import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Globe() {
  return (
    <div id="canvas-container" className="h-screen w-full flex items-center">
      <Canvas className="">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-2, 0, 0]} />
        <Box position={[2, 0, 0]} />
      </Canvas>
    </div>
  )
}

function Box(props) {
  const mesh = useRef();

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hover ? 'hotpink' : 'orange'} />
    </mesh>
  )
}