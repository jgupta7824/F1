import React, { Component } from 'react'
import { Redirect, Route,Switch } from 'react-router-dom';
import ChampionsList from '../containers/Champions/ChampionsList';
import WinnersList from '../containers/WinnersByYear/WinnerList';

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/champions" />
                </Route>
                <Route path="/champions" exact render={props => {
                    console.log(props)
                    return (<ChampionsList {...props} />)
                }} />
                <Route path="/champions/:seasonId" >
                    <WinnersList />
                </Route>
            </Switch>
        )
    }
}

export default Routes