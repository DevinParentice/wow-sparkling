import "./styles/App.scss";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "wouter";

import Header from "./layout/Header";
import BuyPage from "./routes/BuyPage";
import Catalog from "./routes/Catalog";
import Home from "./routes/Home";

function App() {
    const [location] = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <>
                <Header />
                <Switch location={location} key={location.key}>
                    <Route path="/" component={Home} />
                    <Route path="/shop/:flavor">
                        {paramaters => <BuyPage flavor={paramaters.flavor} />}
                    </Route>
                    <Route path="/shop" component={Catalog} />
                    <Route>404, Sorry the page does not exist!</Route>
                </Switch>
            </>
        </AnimatePresence>
    );
}

export default App;
