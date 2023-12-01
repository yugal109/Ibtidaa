"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
// import stars from "./images/homeLandingImage.png";
import { OrbitControls } from "@react-three/drei";

function GreatSphere(props) {
  const mesh = useRef();
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  const mesh4 = useRef();
  const mesh5 = useRef();
  const mesh6 = useRef();
  const mesh7 = useRef();
  const mesh8 = useRef();
  const mesh9 = useRef();
  const mesh10 = useRef();
  const mesh11 = useRef();
  const mesh12 = useRef();
  const mesh13 = useRef();
  const mesh14 = useRef();
  const mesh15 = useRef();
  const mesh16 = useRef();
  const mesh17 = useRef();
  const mesh18 = useRef();

  // useFrame(() => (mesh.current.rotation.x += 0.1));
  useFrame(() => {
    mesh.current.rotation.y += 0.001;
    mesh1.current.rotation.y += 0.009;
    mesh2.current.rotation.y += 0.009;
    mesh3.current.rotation.x += 0.009;
    mesh4.current.rotation.x += 0.009;
    mesh5.current.rotation.x += 0.009;
    mesh6.current.rotation.x += 0.009;
    mesh7.current.rotation.y += 0.009;
    mesh8.current.rotation.y += 0.009;
    mesh9.current.rotation.x += 0.009;
    mesh10.current.rotation.y += 0.009;
    mesh11.current.rotation.y += 0.009;
    mesh12.current.rotation.y -= 0.009;
    mesh13.current.rotation.x += 0.009;
    mesh14.current.rotation.y += 0.009;
    mesh15.current.rotation.y += 0.009;
    mesh16.current.rotation.x += 0.009;
  });

  const texture = useMemo(() => new THREE.TextureLoader().load("/images/homeLandingImage.png"))
  const [size, setSize] = useState(0.03);
  const [color, setColor] = useState("");
  return (
    <group  ref={mesh}>
      <group ref={mesh1}>
        <mesh position={[2.1, -1, 1]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh2}>
        <mesh position={[-2.1, 0.8, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh3}>
        <mesh position={[0, 2.1, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh4}>
        <mesh position={[-1, 0, 2.1]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh5}>
        <mesh position={[-1, 1, 2]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh6}>
        <mesh position={[-1, 2, 1]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh7}>
        <mesh position={[-2, 1, 1]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh8}>
        <mesh position={[0, 0, 2.5]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh9}>
        <mesh position={[-1, -2, 0.2]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh10}>
        <mesh position={[0, 0, 2.5]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh11}>
        <mesh position={[2.1, 0, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh12}>
        <mesh position={[1.5, 2, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh13}>
        <mesh position={[-2, 1, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh14}>
        <mesh position={[-2, -1, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh15}>
        <mesh position={[2.3, 0.2, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
      <group ref={mesh16}>
        <mesh position={[-2.3, -1, 0]} {...props}>
          <sphereGeometry args={[size, 60, 60]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>

      <mesh onDoubleClick={()=>props.setShow(false)} {...props}>
        <sphereGeometry args={[2, 60, 60]} />
        <meshStandardMaterial
          attach="material"
          transparent
          side={THREE.DoubleSide}
        >
          <primitive attach="map" object={texture} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
}

const Sphere = ({setShow}) => {
  const [color, setColor] = useState("white");
  return (
   
      <Canvas
        style={{ height: 500, width: 600, index: -1,backgroundColor:"#0d0b09" }}
        onCreated={(state) => state.gl.setClearColor("#0d0b09")}
      >
        <orthographicCamera />
        <OrbitControls enableZoom={false} />
        <ambientLight color={color} intensity={0.9} />
        <directionalLight color={"red"} position={[1, 1, 0.5]} />{" "}
        <GreatSphere setShow={setShow} />
      </Canvas>
  );
};

export default Sphere;


const Home=()=>{}
