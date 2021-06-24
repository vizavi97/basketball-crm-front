import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Login} from "./pages/auth/Login";
import {Main} from "./pages/private/Main";


function App() {

    const user = true;

    if (user) {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                    </Switch>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path='/*' component={Login}/>
                </Switch>
        </BrowserRouter>
    );
}

export default App;
