import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Root } from "./components/Root";
import { Post } from "./components/Post";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home} />
                    <Route path={"blog"} component={Blog} />
                    <Route path={"projects"} component={Projects} />
                    <Route path={"post"} component={Post} />
                </Route>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));