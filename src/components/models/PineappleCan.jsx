import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/blackberrycan.glb");
    return (
        <group ref={group} {...properties} dispose={null}>
            <group
                position={[0, -2, 0]}
                rotation={[-Math.PI, 0.63, -Math.PI]}
                scale={[23.32, 24.76, 23.32]}
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
                    position={[0, 0, 0]}
                    rotation={[Math.PI, -0.64, Math.PI]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/blackberrycan.glb");
