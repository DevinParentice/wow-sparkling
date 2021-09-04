import { a, useSpring } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { Link, Route } from "wouter";

function Box() {
    const [hovered, setHovered] = useState(false);

    const properties = useSpring({
        position: hovered ? [1, 0, 0] : [0, 0, 0],
        config: { mass: 2, tension: 350, friction: 40 },
    });

    useEffect(() => {
        setHovered(true);
    }, []);

    return (
        // using a from react-spring will animate our component
        <a.mesh
            onClick={() => setHovered(!hovered)}
            position={properties.position}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <a.meshStandardMaterial
                roughness={0.5}
                attach="material"
                color="#6246ea"
            />
        </a.mesh>
    );
}

export default function TestCanvas() {
    return (
        <>
            <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/test">
                    <a>About</a>
                </Link>
            </div>
            <Canvas style={{ width: "100vw", height: "100vh" }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 30, 40]} />
                <spotLight position={[-50, 30, 40]} />
                <Suspense fallback={undefined}>
                    <Route path="/">
                        <Box />
                    </Route>
                    <Route path="/test">
                        <Box />
                    </Route>
                </Suspense>
            </Canvas>
        </>
    );
}
