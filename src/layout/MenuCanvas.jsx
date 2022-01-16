import { animated, useSpring } from "@react-spring/three";
import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import BlackberryCan from "../components/BlackberryCan";
import CucumberCan from "../components/CucumberCan";
import GrapefruitCan from "../components/GrapefruitCan";
import PineappleCan from "../components/PineappleCan";
import activeObjects from "../stores/activeObjects";

export default function MenuCanvas() {
    const showBlackberry = activeObjects(state => state.showBlackberry);
    const showCucumber = activeObjects(state => state.showCucumber);
    const showGrapefruit = activeObjects(state => state.showGrapefruit);
    const showPineapple = activeObjects(state => state.showPineapple);

    const properties = useSpring({
        blackberryPosition: showBlackberry ? [0, 0, 0] : [7, 0, 0],
        cucumberPosition: showCucumber ? [0, 0, 0] : [7, 0, 0],
        grapefruitPosition: showGrapefruit ? [0, 0, 0] : [7, 0, 0],
        pineapplePosition: showPineapple ? [0, 0, 0] : [7, 0, 0],
        blackberryRotation: showBlackberry
            ? [-0.15, Math.PI * 2, 0.25]
            : [0, 0, 0],
        cucumberRotation: showCucumber
            ? [-0.15, Math.PI * 2, -0.25]
            : [0, 0, 0],
        grapefruitRotation: showGrapefruit
            ? [-0.15, Math.PI * 2, 0.25]
            : [0, 0, 0],
        pineappleRotation: showPineapple
            ? [-0.15, Math.PI * 2, -0.25]
            : [0, 0, 0],
        config: { mass: 5, tension: 350, friction: 100 },
    });

    const AnimatedGrapefruitCan = animated(GrapefruitCan);
    const AnimatedPineappleCan = animated(PineappleCan);
    const AnimatedBlackberryCan = animated(BlackberryCan);
    const AnimatedCucumberCan = animated(CucumberCan);

    return (
        <Canvas style={{ width: "40vw", height: "100vh" }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.33} />
                <spotLight penumbra={1} position={[0, 0, 0]} intensity={2} />
                <pointLight position={[0, 0, 0]} intensity={1} castShadow />
                <Environment preset="city" position={[0, 0, 0]} />
                <AnimatedBlackberryCan
                    position={properties.blackberryPosition}
                    rotation={properties.blackberryRotation}
                />
                <AnimatedCucumberCan
                    position={properties.cucumberPosition}
                    rotation={properties.cucumberRotation}
                />
                <AnimatedGrapefruitCan
                    position={properties.grapefruitPosition}
                    rotation={properties.grapefruitRotation}
                />
                <AnimatedPineappleCan
                    position={properties.pineapplePosition}
                    rotation={properties.pineappleRotation}
                />
                <ContactShadows
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, -2, 0]}
                    opacity={0.65}
                    width={12}
                    height={12}
                    blur={2}
                    far={2}
                />
            </Suspense>
        </Canvas>
    );
}
