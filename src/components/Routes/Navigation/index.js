import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Auth from '../../Layouts/Auth/Auth'

const index = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Auth}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default index
