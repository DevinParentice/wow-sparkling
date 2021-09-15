import { animated, useSpring } from "@react-spring/three";
import {
    Billboard,
    ContactShadows,
    Environment,
    OrbitControls,
    Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";

import MainCan from "../components/MainCan";

export default function NewCanvas() {
    const [isLoaded, setIsLoaded] = useState(false);
    const controls = useRef();
    const AnimatedCan = animated(MainCan);
    const properties = useSpring({
        position: isLoaded ? [0, 0, 0] : [20, 0, 0],
    });

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 1500);
    }, []);
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            gl={{ alpha: true, stencil: false, antialias: true }}
            style={{ width: "50vw", height: "100vh", overflowX: "hidden" }}
        >
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
                <AnimatedCan
                    position={properties.position}
                    onClick={() => setIsLoaded(!isLoaded)}
                />
                <Billboard>
                    <Text
                        color="whitesmoke"
                        anchorX="center"
                        anchorY="center"
                        position={[0, -2.75, 0]}
                        fontSize={0.25}
                        font="/fonts/SharpGroteskBook.woff"
                    >
                        Drag to explore
                    </Text>
                </Billboard>

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
            <OrbitControls
                ref={controls}
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                autoRotate
            />
        </Canvas>
    );
}
