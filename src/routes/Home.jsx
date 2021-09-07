import { Text } from "@chakra-ui/react";
import React from "react";

import Background from "../components/layout/Background";
import Header from "../components/layout/Header";
import NewCanvas from "../components/layout/NewCanvas";

export default function Home() {
    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    position: "relative",
                    backgroundColor: "#eeeeee",
                }}
            >
                <Header />
                <Background />
                <div style={{ display: "flex", zIndex: 2 }}>
                    <div
                        style={{
                            width: "50vw",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Text
                            as="h1"
                            fontSize="6xl"
                            color="whitesmoke"
                            style={{ zIndex: 2 }}
                        >
                            (6xl) In love with React & Next
                        </Text>
                    </div>
                    <div style={{ maxWidth: "50vw", overflow: "hidden" }}>
                        <NewCanvas />
                    </div>
                </div>
                <div
                    style={{
                        overflow: "hidden",
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                    }}
                >
                    <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            fill: "#f1c7b9",
                            width: "100%",
                            height: 107,
                            transform: "rotate(180deg)",
                        }}
                    >
                        <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                    </svg>
                </div>
            </div>
            {/* <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#fff",
                }}
            ></div> */}
        </>
    );
}
