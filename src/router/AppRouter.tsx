import * as React from 'react'
import {Route,HashRouter,Switch} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'

export default class AppRouter extends React.Component{
  public  render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={App} />
                    <Route exact={true} path="/home" component={Home} />
                </Switch>
            </HashRouter>
        )
    }
}