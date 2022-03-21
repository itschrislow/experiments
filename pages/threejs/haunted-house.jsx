import * as THREE from "three";
import { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const HauntedHouse = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [4, 2, 5], fov: 75, near: 0.1, far: 100 }}>
        {/* Background */}
        <color attach="background" args={[0x262837]} />
        {/* Fog */}
        <fog attach="fog" color={0x262837} near={1} far={15} />
        {/* Lights */}
        <ambientLight color={0xb9d5ff} intensity={0.12} />
        <directionalLight
          color={0xb9d5ff}
          intensity={0.12}
          position={[4, 5, -2]}
        />
        <pointLight
          color={0xff7d46}
          intensity={1}
          distance={7}
          position={[0, 2.2, 2.7]}
        />
        {/* House */}
        <group>
          {/* Roof */}
          <mesh position={[0, 2.5 + 1 / 2, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneBufferGeometry attach="geometry" args={[4, 1, 4]} />
            <meshStandardMaterial color={0xb35f45} />
          </mesh>
          <Walls />
          <Suspense>
            <Door />
          </Suspense>
          <Suspense>
            <Bushes />
          </Suspense>
          <Suspense>
            <Graves />
          </Suspense>
          <Suspense>
            <Floor />
          </Suspense>
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const Door = () => {
  const meshRef = useRef();

  const doorTextures = useTexture({
    map: "/static/textures/haunted-house/door/color.jpg",
    alphaMap: "/static/textures/haunted-house/door/alpha.jpg",
    aoMap: "/static/textures/haunted-house/door/ambientOcclusion.jpg",
    displacementMap: "/static/textures/haunted-house/door/height.jpg",
    normalMap: "/static/textures/haunted-house/door/normal.jpg",
    roughnessMap: "/static/textures/haunted-house/door/roughness.jpg",
    metalnessMap: "/static/textures/haunted-house/door/metalness.jpg",
  });

  useLayoutEffect(() => {
    meshRef.current.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        meshRef.current.geometry.attributes.uv.array,
        2
      )
    );
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 2 / 2, 4 / 2 + 0.01]}>
      <planeBufferGeometry attach="geometry" args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial
        attach="material"
        transparent={true}
        displacementScale={0.1}
        {...doorTextures}
      />
    </mesh>
  );
};

const Walls = () => {
  const meshRef = useRef();

  const [
    bricksColorTexture,
    bricksAmbientOcclusionTexture,
    bricksNormalTexture,
    bricksRoughnessTexture,
  ] = useTexture([
    "/static/textures/haunted-house/bricks/color.jpg",
    "/static/textures/haunted-house/bricks/ambientOcclusion.jpg",
    "/static/textures/haunted-house/bricks/normal.jpg",
    "/static/textures/haunted-house/bricks/roughness.jpg",
  ]);

  useLayoutEffect(() => {
    meshRef.current.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        meshRef.current.geometry.attributes.uv.array,
        2
      )
    );
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 2.5 / 2, 0]}>
      <boxBufferGeometry attach="geometry" args={[4, 2.5, 4]} />
      <meshStandardMaterial
        map={bricksColorTexture}
        aoMap={bricksAmbientOcclusionTexture}
        normalMap={bricksNormalTexture}
        roughnessMap={bricksRoughnessTexture}
      />
    </mesh>
  );
};

const Bushes = () => {
  return (
    <>
      <mesh
        position={[0.8, 0.2, 2.2]}
        scale={[0.5, 0.5, 0.5]}
        castShadow={true}
      >
        <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial attach="material" color={0x89c854} />
      </mesh>
      <mesh
        position={[1.4, 0.1, 2.1]}
        scale={[0.25, 0.25, 0.25]}
        castShadow={true}
      >
        <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial attach="material" color={0x89c854} />
      </mesh>
      <mesh
        position={[-0.8, 0.1, 2.2]}
        scale={[0.4, 0.4, 0.4]}
        castShadow={true}
      >
        <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial attach="material" color={0x89c854} />
      </mesh>
      <mesh
        position={[-1, 0.05, 2.6]}
        scale={[0.15, 0.15, 0.15]}
        castShadow={true}
      >
        <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial attach="material" color={0x89c854} />
      </mesh>
    </>
  );
};

const Graves = () => {
  return (
    <group>
      {Array(30)
        .fill(0)
        .map((_, index) => {
          const angle = Math.random() * Math.PI * 2;
          const radius = 4 + Math.random() * 5.5;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;

          return (
            <mesh
              key={index}
              position={[x, 0.8 / 2 - 0.1, z]}
              rotation={[0, (Math.random() - 0.5) * (Math.PI / 2), 0]}
              castShadow={true}
            >
              <boxBufferGeometry attach="geometry" args={[0.6, 0.8, 0.2]} />
              <meshStandardMaterial attach="material" color={0xb2b6b1} />
            </mesh>
          );
        })}
    </group>
  );
};

const Floor = () => {
  const [
    grassColorTexture,
    grassAmbientOcclusionTexture,
    grassNormalTexture,
    grassRoughnessTexture,
  ] = useTexture([
    "/static/textures/haunted-house/grass/color.jpg",
    "/static/textures/haunted-house/grass/ambientOcclusion.jpg",
    "/static/textures/haunted-house/grass/normal.jpg",
    "/static/textures/haunted-house/grass/roughness.jpg",
  ]);

  grassColorTexture.repeat.set(8, 8);
  grassAmbientOcclusionTexture.repeat.set(8, 8);
  grassNormalTexture.repeat.set(8, 8);
  grassRoughnessTexture.repeat.set(8, 8);

  grassColorTexture.wrapS = THREE.RepeatWrapping;
  grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
  grassNormalTexture.wrapS = THREE.RepeatWrapping;
  grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

  grassColorTexture.wrapT = THREE.RepeatWrapping;
  grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
  grassNormalTexture.wrapT = THREE.RepeatWrapping;
  grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshStandardMaterial
        attach="material"
        map={grassColorTexture}
        aoMap={grassAmbientOcclusionTexture}
        normalMap={grassNormalTexture}
        roughnessMap={grassRoughnessTexture}
      />
    </mesh>
  );
};

export default HauntedHouse;
