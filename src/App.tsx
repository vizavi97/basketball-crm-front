import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Main} from "./pages/main/Main";
import {CabinetLayout} from "./components/layout/cabinet/CabinetLayout";
import {Invest} from "./pages/invest/Invest";
import {Contacts} from "./pages/contacs/Contacts";
import {Wallet} from "./pages/wallet/Wallet";
import {AuthLayout} from "./components/layout/auth/AuthLayout";
import {Register} from "./pages/auth/Register";
import {Login} from "./pages/auth/Login";
import {RestorePassword} from "./pages/auth/RestorePassword";
import {RestorePasswordField} from "./pages/auth/RestorePasswordField";
import {Mining} from "./pages/mining/Mining";
import {Settings} from "./pages/settings/Settings";
import {Stacking} from "./pages/stacking/Stacking";

function App() {

    const user = true;

    if (user) {
        return (
            <BrowserRouter>
                <CabinetLayout>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/invest' component={Invest}/>
                        <Route exact path='/contacts' component={Contacts}/>
                        <Route exact path='/wallet' component={Wallet}/>
                        <Route exact path='/mining' component={Mining}/>
                        <Route exact path='/stacking' component={Stacking}/>
                        <Route exact path='/settings' component={Settings}/>
                    </Switch>
                </CabinetLayout>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRouter>
            <AuthLayout>
                <Switch>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/restore-password' component={RestorePassword}/>
                    <Route exact path='/restore-message' component={RestorePasswordField}/>
                    <Route exact path='/*' component={Login}/>
                </Switch>
            </AuthLayout>
        </BrowserRouter>
    );
}

export default App;
