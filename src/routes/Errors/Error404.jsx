import React from "react";
import { Link } from "wouter";

import Background from "../../components/Background";

export default function Error404() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Background canvasID="gradient-canvas-error" />
            <div
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "whitesmoke",
                }}
            >
                <h1 style={{ fontSize: "4rem" }}>Error</h1>
                <h2 style={{ fontSize: "2rem" }}>
                    The page you are looking for was not found.
                </h2>
                <Link to="/">
                    <a
                        style={{
                            fontSize: "1.5rem",
                            marginTop: "1rem",
                            textDecoration: "underline",
                        }}
                    >
                        Return home &rsaquo;
                    </a>
                </Link>
            </div>
        </div>
    );
}
