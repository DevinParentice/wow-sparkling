import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/grapefruitcan.glb");
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
                    position={[0, 0, 0]}
                    rotation={[Math.PI, -0.64, Math.PI]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/grapefruitcan.glb");
