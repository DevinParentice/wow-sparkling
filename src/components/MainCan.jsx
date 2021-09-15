import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

export default function Model(properties) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/pineapplecan.glb");
    useFrame(state => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            Math.cos(t / 2) / 10 + 0.25,
            0.1
        );
        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            Math.sin(t / 4) / 10,
            0.1
        );
        group.current.rotation.z = THREE.MathUtils.lerp(
            group.current.rotation.z,
            Math.sin(t / 4) / 20,
            0.1
        );
        group.current.position.y = THREE.MathUtils.lerp(
            group.current.position.y,
            (-5 + Math.sin(t)) / 5,
            0.1
        );
    });
    return (
        <group ref={group} {...properties} dispose={null}>
            <group
                position={[0, -1, 0]}
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
