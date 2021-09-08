import "./styles/index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <AnimatePresence>
                <App />
            </AnimatePresence>
        </ChakraProvider>
    </React.StrictMode>,
    document.querySelector("#root")
);
