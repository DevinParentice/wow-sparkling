import { Canvas } from "@react-three/fiber";
import React from "react";

import BlackberryCan from "../../components/BlackberryCan";
import CucumberCan from "../../components/CucumberCan";
import GrapefruitCan from "../../components/GrapefruitCan";
import PineappleCan from "../../components/PineappleCan";

export default function CanDisplay({ product }) {
    return (
        <Canvas>
            {product === "blackberry" && <BlackberryCan />}
            {product === "cucumber" && <CucumberCan />}
            {product === "grapefruit" && <GrapefruitCan />}
            {product === "pineapple" && <PineappleCan />}
        </Canvas>
    );
}
