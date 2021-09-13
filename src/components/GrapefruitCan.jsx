import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/grapefruitcan.glb");
    return (
        <group ref={group} {...properties} dispose={null}>
            <group
                position={[0, -2, 0]}
                rotation={[-Math.PI, 0.627_809_13, -Math.PI]}
                scale={[23.317_213_06, 24.758_510_59, 23.317_213_06]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KuimiBeerCan013.geometry}
                    material={nodes.KuimiBeerCan013.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KuimiBeerCan013_1.geometry}
                    material={materials["Material.006"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Can008.geometry}
                    material={nodes.Can008.material}
                    position={[-0.000_632_87, -0.000_274_6, 0.000_459_32]}
                    rotation={[Math.PI, -0.639_433_29, Math.PI]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/models/grapefruitcan.glb");
