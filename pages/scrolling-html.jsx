import * as THREE from 'three'
import { useRef, useState } from "react";
import { Html } from '@react-three/drei';
import { Canvas, useFrame, useThree } from "@react-three/fiber";

export default function ScrollingHtml() {
  const scroll = useRef(0);
  const scrollRef = useRef();

  const handleScroll = (e) => {
    e.current = e.target.scrollTop / e.target.scrollHeight;
  }

  return (
    <>
      <Canvas
        onCreated={(state) => state.events.connect(scrollRef.current)}
        raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
        className="flex h-screen"
      >
        <ambientLight />
        <pointLight position={(10, 0, 10)} />
        <ScrollContainer scroll={scroll}>
          <Scene />
        </ScrollContainer>
      </Canvas>
      <div ref={scrollRef} onScroll={handleScroll}
      // className="absolute top-0 left-0 h-screen w-full overflow-auto"
      >
        <div style={{ height: '200vh', pointerEvents: 'none' }} />
      </div>
    </>
  )
}

function ScrollContainer({ scroll, children }) {
  const group = useRef();
  const { viewport } = useThree();
  const vector = new THREE.Vector3();

  useFrame(() => group.current.position.lerp(vector.set(0, viewport.height * scroll.current, 0), 0.1))

  return (
    <group ref={group}>
      {children}
    </group>
  )
}

function Scene() {
  const viewport = useThree(state => state.viewport);

  return (
    <>
      <Box text={<p>HTML</p>} color="lightblue" />
      <Box text={<h1>H1 Heading</h1>} color="aquamarine" position={[0, -viewport.height / 2, 0]} />
    </>
  )
}

function Box({ text, color, ...props }) {
  const [hover, setHover] = useState(false);

  return (
    <mesh
      {...props}
      onPointerOut={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hover ? 'hotpink' : color} />
      <Html position={[0, 0, 1]} center>
        {text}
      </Html>
    </mesh>
  )
}