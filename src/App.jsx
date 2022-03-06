import "./styles/App.scss";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "wouter";

import Header from "./layout/Navigation/Header";
import BuyPage from "./routes/BuyPage/BuyPage";
import Catalog from "./routes/Catalog/Catalog";
import Error404 from "./routes/Errors/Error404";
import Home from "./routes/Home/Home";
import Story from "./routes/Story";

function App() {
    const [location] = useLocation();
    return (
        <AnimatePresence exitBeforeEnter initial>
            <>
                <Header />
                <Switch location={location} key={location.key}>
                    <Route path="/" component={Home} />
                    <Route path="/shop/:flavor" component={BuyPage} />
                    <Route path="/shop" component={Catalog} />
                    <Route path="/story" component={Story} />
                    <Route component={Error404} />
                </Switch>
            </>
        </AnimatePresence>
    );
}

export default App;
