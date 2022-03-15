import { extend, useLoader, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { useMemo, Suspense } from "react";
import { render } from "react-dom";

extend({ TextGeometry });

const ThreeDText = () => {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={"Loading..."}>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }}>
          <OrbitControls />
          <Text font="/static/fonts/helvetiker_regular.typeface.json">
            Text
          </Text>
        </Canvas>
      </Suspense>
    </div>
  );
  // return (
  //   <div className="w-full h-screen">
  //     <Canvas>
  //       <group>
  //         <mesh>
  //           <Torus />
  //         </mesh>
  //       </group>
  //       <OrbitControls />
  //     </Canvas>
  //   </div>
  // );
};

const Text = ({ font: fontURL, children, ...props }) => {
  const font = useLoader(FontLoader, fontURL);
  const settings = useMemo(
    () => ({
      font,
      size: 3,
      height: 0.4,
      curveSegments: 24,
      bevelEnabled: true,
      bevelThickness: 0.9,
      bevelSize: 0.3,
      bevelOffset: 0,
      bevelSegments: 10,
    }),
    [font]
  );

  return (
    <mesh {...props}>
      <meshNormalMaterial />
      <textGeometry args={[children, settings]} />
    </mesh>
  );
};

function Torus() {
  return (
    <group>
      <mesh>
        <torusBufferGeometry attach="geometry" args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial attach="material" color="red" />
      </mesh>
    </group>
  );
}

export default ThreeDText;
