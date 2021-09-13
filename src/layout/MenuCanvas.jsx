import { animated, useSpring } from "@react-spring/three";
import { Environment, OrbitControls } from "@react-three/drei";
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
        blackberryPosition: showBlackberry ? [0, 0, 0] : [10, 0, 0],
        cucumberPosition: showCucumber ? [0, 0, 0] : [10, 0, 0],
        grapefruitPosition: showGrapefruit ? [0, 0, 0] : [10, 0, 0],
        pineapplePosition: showPineapple ? [0, 0, 0] : [10, 0, 0],
        config: { mass: 5, tension: 350, friction: 100 },
    });

    const AnimatedGrapefruitCan = animated(GrapefruitCan);
    const AnimatedPineappleCan = animated(PineappleCan);
    const AnimatedBlackberryCan = animated(BlackberryCan);
    const AnimatedCucumberCan = animated(CucumberCan);

    return (
        <Canvas style={{ width: "40vw", height: "100vh" }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.3} />
                <AnimatedBlackberryCan
                    position={properties.blackberryPosition}
                />
                <AnimatedCucumberCan position={properties.cucumberPosition} />
                <AnimatedGrapefruitCan
                    position={properties.grapefruitPosition}
                />
                <AnimatedPineappleCan position={properties.pineapplePosition} />
                <Environment preset="city" />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
}
