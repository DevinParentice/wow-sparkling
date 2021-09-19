import {
    ContactShadows,
    Environment,
    Loader,
    OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

import BlackberryCan from "../../components/BlackberryCan";
import CucumberCan from "../../components/CucumberCan";
import GrapefruitCan from "../../components/GrapefruitCan";
import PineappleCan from "../../components/PineappleCan";

export default function CanDisplay({ product }) {
    const controls = useRef();
    return (
        <>
            <Canvas
                style={{
                    width: "20vw",
                    height: "100vh",
                    cursor: "grab",
                }}
                camera={{ zoom: 1.1 }}
                shadows
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {product === "blackberry" && <BlackberryCan />}
                    {product === "cucumber" && <CucumberCan />}
                    {product === "grapefruit" && <GrapefruitCan />}
                    {product === "pineapple" && <PineappleCan />}
                    <Environment preset="city" />
                    <ambientLight intensity={0.33} />
                    <spotLight
                        penumbra={1}
                        position={[0, 0, 0]}
                        intensity={2}
                        castShadow
                        shadow-bias
                    />
                    <pointLight position={[0, 0, 0]} intensity={1} castShadow />
                    <ContactShadows
                        rotation={[Math.PI / 2, 0, 0]}
                        position={[0, -1.95, 0]}
                        opacity={0.85}
                        width={12}
                        height={12}
                        blur={2}
                        far={2}
                    />
                </Suspense>
                <OrbitControls
                    ref={controls}
                    enablePan={false}
                    enableZoom={false}
                    autoRotate
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
            <Loader />
        </>
    );
}
