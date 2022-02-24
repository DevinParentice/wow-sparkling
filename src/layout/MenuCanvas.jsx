import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import BlackberryCanImage from "../assets/images/blackberry-can.png";
import CucumberCanImage from "../assets/images/cucumber-can.png";
import GrapefruitCanImage from "../assets/images/grapefruit-can.png";
import PineappleCanImage from "../assets/images/pineapple-can.png";
import activeObjects from "../stores/activeObjects";

export default function MenuCanvas() {
    const showBlackberry = activeObjects(state => state.showBlackberry);
    const showCucumber = activeObjects(state => state.showCucumber);
    const showGrapefruit = activeObjects(state => state.showGrapefruit);
    const showPineapple = activeObjects(state => state.showPineapple);
    const fadeIn = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

    return (
        <AnimatePresence>
            <div
                style={{
                    width: "40vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {showBlackberry && (
                    <motion.img
                        src={BlackberryCanImage}
                        alt=""
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: -200 }}
                        exit={{ opacity: 0 }}
                        transition={fadeIn}
                    />
                )}
                {showCucumber && (
                    <motion.img
                        src={CucumberCanImage}
                        alt=""
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: -200 }}
                        exit={{ opacity: 0 }}
                        transition={fadeIn}
                    />
                )}
                {showGrapefruit && (
                    <motion.img
                        src={GrapefruitCanImage}
                        alt=""
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: -200 }}
                        exit={{ opacity: 0 }}
                        transition={fadeIn}
                    />
                )}
                {showPineapple && (
                    <motion.img
                        src={PineappleCanImage}
                        alt=""
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: -200 }}
                        exit={{ opacity: 0 }}
                        transition={fadeIn}
                        style={{ zIndex: -1 }}
                    />
                )}
            </div>
        </AnimatePresence>
    );
}
