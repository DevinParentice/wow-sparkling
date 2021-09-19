import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

import BlackberryCan from "../../components/BlackberryCan";
import CucumberCan from "../../components/CucumberCan";
import GrapefruitCan from "../../components/GrapefruitCan";
import PineappleCan from "../../components/PineappleCan";

export default function CanDisplay({ product }) {
    const controls = useRef();
    return (
        <Canvas
            style={{
                width: "20vw",
                height: "100vh",
                cursor: "grab",
            }}
            camera={{ zoom: 1.1 }}
        >
            <Suspense fallback={null}>
                {product === "blackberry" && <BlackberryCan />}
                {product === "cucumber" && <CucumberCan />}
                {product === "grapefruit" && <GrapefruitCan />}
                {product === "pineapple" && <PineappleCan />}
                <OrbitControls
                    ref={controls}
                    enablePan={false}
                    enableZoom={false}
                    autoRotate
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <Environment preset="city" />
                <ContactShadows
                    position={[0, 0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    opacity={0.5}
                    blur={2}
                    width={10}
                    height={10}
                    far={2 * 2}
                />
                <spotLight
                    penumbra={2}
                    position={[1, 2, 1]}
                    intensity={0.5}
                    castShadow
                    shadow-bias
                />
                <pointLight intensity={1} position={[-2, -0.5, -2]} />
            </Suspense>
        </Canvas>
    );
}
