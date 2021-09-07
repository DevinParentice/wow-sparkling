import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/blackberrycan.glb");
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
                    geometry={nodes.KuimiBeerCan003.geometry}
                    material={nodes.KuimiBeerCan003.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KuimiBeerCan003_1.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Can004.geometry}
                    material={nodes.Can004.material}
                    position={[-0.000_632_87, -0.000_274_6, 0.000_459_34]}
                    rotation={[Math.PI, -0.639_433_29, Math.PI]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/blackberrycan.glb");
