import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/layout/App";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <AnimatePresence>
                <App />
            </AnimatePresence>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
