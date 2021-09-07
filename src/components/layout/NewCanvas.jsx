import { Billboard, OrbitControls, Stage, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

import BlackberryCan from "../models/BlackberryCan";

export default function NewCanvas() {
    const controls = useRef();
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ alpha: true, stencil: false, antialias: true }}
            style={{ width: "50vw", height: "100vh", overflowX: "hidden" }}
        >
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
                <Stage
                    controls={controls}
                    preset="rembrandt"
                    intensity={1}
                    contactShadow
                    shadows
                    adjustCamera
                    environment="city"
                >
                    <BlackberryCan />
                    <Billboard follow="true">
                        <Text
                            color="whitesmoke"
                            anchorX="center"
                            anchorY="center"
                            position={[0, -3, 0]}
                            fontSize={0.2}
                        >
                            Drag to explore
                        </Text>
                    </Billboard>
                </Stage>
            </Suspense>
            <OrbitControls
                ref={controls}
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
}
