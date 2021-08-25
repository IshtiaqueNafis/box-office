import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from "./components/pages/Home";
import Starred from "./components/pages/Starred";

function App() {

    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/stared">
                <Starred/>
            </Route>
            <Route>
                <div>
                    not found
                </div>
            </Route>
        </Switch>

    );
}

export default App;
