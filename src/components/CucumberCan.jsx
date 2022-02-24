import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/cucumbercan.glb");
    return (
        <group ref={group} {...properties} dispose={null}>
            <group
                position={[0, -2, 0]}
                rotation={[-Math.PI, 0.63, -Math.PI]}
                scale={[23.32, 24.76, 23.32]}
            >
                <mesh
                    geometry={nodes.KuimiBeerCan011.geometry}
                    material={nodes.KuimiBeerCan011.material}
                />
                <mesh
                    geometry={nodes.KuimiBeerCan011_1.geometry}
                    material={materials["Material.007"]}
                />
                <mesh
                    geometry={nodes.Can006.geometry}
                    material={nodes.Can006.material}
                    rotation={[Math.PI, -0.64, Math.PI]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/models/cucumbercan.glb");
