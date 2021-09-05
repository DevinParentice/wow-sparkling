import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/blackberrycan.glb");

    return (
        <group ref={group} {...properties} dispose={null} scale={1.2}>
            <group
                position={[0, -2, 0]}
                rotation={[-Math.PI, 0.63, -Math.PI]}
                scale={[23.32, 24.76, 23.32]}
            >
                <mesh
                    castShadow
                    geometry={nodes.KuimiBeerCan005.geometry}
                    material={nodes.KuimiBeerCan005.material}
                />
                <mesh
                    castShadow
                    geometry={nodes.KuimiBeerCan005_1.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    geometry={nodes.Can006.geometry}
                    material={nodes.Can006.material}
                    rotation={[Math.PI, -0.64, Math.PI]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/blackberrycan.glb");
