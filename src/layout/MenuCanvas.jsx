import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import BlackberryCan from "../components/BlackberryCan";
import CucumberCan from "../components/CucumberCan";
import GrapefruitCan from "../components/GrapefruitCan";
import PineappleCan from "../components/PineappleCan";

export default function MenuCanvas() {
    return (
        <Canvas style={{ width: "40vw", height: "100vh" }}>
            <ambientLight intensity={0.2} />
            <Suspense fallback={null}>
                <GrapefruitCan position={[4, 0, 0]} />
                <PineappleCan position={[4, 0, 0]} />
                <BlackberryCan position={[4, 0, 0]} />
                <CucumberCan position={[4, 0, 0]} />
                <Environment preset="city" />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
