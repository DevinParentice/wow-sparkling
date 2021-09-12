import "./styles/App.css";

import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "wouter";

import Home from "./routes/Home";

function App() {
    const [location] = useLocation();
    return (
        <>
            <Switch location={location} key={location.key}>
                <AnimatePresence exitBeforeEnter>
                    <Route path="/" component={Home} />
                </AnimatePresence>
            </Switch>
        </>
    );
}

export default App;
