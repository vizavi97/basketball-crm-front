import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Login} from "./pages/auth/Login";
import {Main} from "./pages/private/Main";
import {CabinetLayout} from "./components/layout/cabinet/CabinetLayout";
import {Staff} from "./pages/private/staff/Staff";


function App() {

    const user = true;

    if (user) {
        return (
            <BrowserRouter>
                <CabinetLayout>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/staff' component={Staff}/>
                    </Switch>
                </CabinetLayout>
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
