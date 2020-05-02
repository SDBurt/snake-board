import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import home from './containers/home';
import game from './containers/game';
import create_game from './containers/create_game';
import not_found from './containers/not_found'


export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/game/:id" component={game} />
                <Route path="/game/" component={create_game} />
                <Route component={not_found} />
            </Switch>
        )
    }
}

export default Routes
