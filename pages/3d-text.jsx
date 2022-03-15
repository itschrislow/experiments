import { useRouter } from "next/router";
import { useRef, useMemo, Suspense } from "react";

import { Center, OrbitControls } from "@react-three/drei";
import { extend, useLoader, Canvas, useFrame } from "@react-three/fiber";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

extend({ TextGeometry });

const ThreeDText = () => {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <Suspense fallback={"Loading..."}>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2] }}>
          <OrbitControls />
          <Text
            font="/static/fonts/helvetiker_regular.typeface.json"
            onClick={() => router.push("/")}
          >
            Chris Low
          </Text>
          {Array(1000)
            .fill(0)
            .map((_, index) => (
              <Torus key={index} />
            ))}
        </Canvas>
      </Suspense>
    </div>
  );
};

const Text = ({ font: fontURL, children, ...props }) => {
  const font = useLoader(FontLoader, fontURL);
  const settings = useMemo(
    () => ({
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 24,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 10,
    }),
    [font]
  );

  return (
    <Center>
      <mesh {...props}>
        <meshNormalMaterial />
        <textGeometry args={[children, settings]} anchorX="center" />
      </mesh>
    </Center>
  );
};

function Torus() {
  const torusRef = useRef();
  const randomXStart = Math.random() * 10;
  const randomYStart = Math.random() * 10;

  useFrame(({ clock }) => {
    torusRef.current.rotation.x = randomXStart + clock.getElapsedTime();
    torusRef.current.rotation.y = randomYStart + clock.getElapsedTime();
  });

  return (
    <mesh
      ref={torusRef}
      position={[
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
      ]}
      rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
      scale={Array(3).fill(Math.random())}
    >
      <torusGeometry attach="geometry" args={[0.3, 0.2, 20, 45]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default ThreeDText;
