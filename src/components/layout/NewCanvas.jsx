import {
    ContactShadows,
    Environment,
    OrbitControls,
    Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import BlackberryCan from "../models/BlackberryCan";

export default function NewCanvas() {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            style={{ width: "50vw", height: "100vh", overflowX: "hidden" }}
        >
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
                <BlackberryCan />
                <Text
                    color="black"
                    anchorX="center"
                    anchorY="center"
                    position={[0, -2.75, 0]}
                    fontSize={0.2}
                >
                    Drag me!
                </Text>
                <Environment preset="city" />
                <ContactShadows
                    rotation-x={Math.PI / 2}
                    position={[0, -5, 0]}
                    opacity={0.25}
                    width={100}
                    height={100}
                    blur={1.5}
                    far={0.8}
                />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
}
