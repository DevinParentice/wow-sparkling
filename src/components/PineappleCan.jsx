import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/pineapplecan.glb");
    return (
        <group ref={group} {...properties} dispose={null}>
            <group
                position={[0, -2, 0]}
                rotation={[-Math.PI, 0.627_81, -Math.PI]}
                scale={[23.317_21, 24.758_51, 23.317_21]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KuimiBeerCan009.geometry}
                    material={nodes.KuimiBeerCan009.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.KuimiBeerCan009_1.geometry}
                    material={materials["Material.008"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Can002.geometry}
                    material={nodes.Can002.material}
                    position={[-0.000_63, -0.000_27, 0.000_46]}
                    rotation={[Math.PI, -0.639_43, Math.PI]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/models/pineapplecan.glb");
