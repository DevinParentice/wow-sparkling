import { a, useSpring } from "@react-spring/three";
import { useAspect } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Box, Flex } from "@react-three/flex";
import React, { Suspense, useEffect, useState } from "react";
import { Link, Route } from "wouter";

import BlackberryCan from "../models/BlackberryCan";

function Drink() {
    const [clicked, setClicked] = useState(false);

    const properties = useSpring({
        position: clicked ? [0, 1, 0] : [0, 0, 0],
        rotation: clicked ? [0, Math.PI * 2, 0] : [0, 0, 0],
        config: { mass: 5, tension: 350, friction: 100 },
    });

    useEffect(() => {
        setClicked(true);
    }, []);

    return (
        <a.mesh
            onClick={() => setClicked(!clicked)}
            position={properties.position}
            rotation={properties.rotation}
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

function Container() {
    const { size } = useThree();
    const [vpWidth, vpHeight] = useAspect(size.width, size.height);

    return (
        <>
            <Route path="/">
                <Flex
                    flexDirection="row"
                    size={[vpWidth, vpHeight, 0]}
                    position={[-vpWidth / 2, vpHeight / 2, 0]}
                    justifyContent="center"
                    alignItems="flex-end"
                    flexWrap="wrap"
                >
                    <Box
                        margin={1}
                        centerAnchor
                        // onClick={() => setLocation("/test")}
                    >
                        <BlackberryCan />
                    </Box>
                    <Box margin={1} centerAnchor>
                        <BlackberryCan />
                    </Box>
                    <Box margin={1} centerAnchor>
                        <BlackberryCan />
                    </Box>
                    <Box margin={1} centerAnchor>
                        <BlackberryCan />
                    </Box>
                </Flex>
            </Route>
            <Route path="/test">
                <Drink />
            </Route>
        </>
    );
}

export default function TestCanvas() {
    // const [location, setLocation] = useLocation();

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 1,
                }}
            >
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
                <Suspense fallback={null}>
                    <Container />
                </Suspense>
            </Canvas>
        </>
    );
}
