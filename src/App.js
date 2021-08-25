import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Navs from "./components/Navs";
import Home from "./components/pages/Home";
import Starred from "./components/pages/Starred";

function App() {

    return (

        <div>

            <Navs/>
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
        </div>
    );
}

export default App;
