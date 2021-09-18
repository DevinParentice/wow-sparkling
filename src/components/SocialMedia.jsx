import { motion } from "framer-motion";
import React from "react";

import Facebook from "../assets/icons/FacebookIcon";
import Instagram from "../assets/icons/InstagramIcon";

export default function SocialMedia() {
    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };
    return (
        <div
            style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "40vw",
                height: "5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
            variants={variants}
            initial="hidden"
            animate="show"
        >
            <motion.a
                href="https://www.instagram.com/wow_sparkling/"
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                style={{ margin: "1rem" }}
            >
                <Instagram />
            </motion.a>
            <motion.a
                href="https://www.facebook.com/wowsparkling"
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                style={{ margin: "1rem" }}
            >
                <Facebook />
            </motion.a>
        </div>
    );
}
