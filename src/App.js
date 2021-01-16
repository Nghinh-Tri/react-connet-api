import "./App.css";
import React, { Component } from 'react';
import Menu from "./components/menu/Menu";
import routes from "./route";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    {/* Menu */}
                    <Menu />
                    {/* Page Content */}
                    <div className="container">
                        <div className="row">                        
                            {this.showContent(routes)}
                        </div>
                    </div>
                </React.Fragment>
            </Router>
        );
    }

    showContent = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                )
            });
        }
        return <Switch> {result} </Switch>
    }
}

export default App;