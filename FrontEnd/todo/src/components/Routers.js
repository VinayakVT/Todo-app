import React from "react";
import TodoIndex from "./TodoIndex";
import {
    HashRouter as Router, Route, Switch,
} from 'react-router-dom';
import TodoAddForm from "./TodoAddForm";
import TodoUpdate from "./TodoUpdate";

const Routers = () => (

    <Router>
        <Switch>
            <Route exact path='/' component={TodoIndex} />
            <Route exact path='/add' component={TodoAddForm} />
            <Route exact path='/update/:todoId' component={TodoUpdate} />
        </Switch>
    </Router>
)

export default Routers;