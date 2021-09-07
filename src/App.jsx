import "./styles/App.css";

import { Route, Switch } from "wouter";

import Home from "./routes/Home";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
}

export default App;
