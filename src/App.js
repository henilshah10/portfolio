import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import SingleProject from "./components/SingleProject";
import Project from "./components/Project";

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Home} exact path="/" />
				<Route component={About} path="/about" />
				<Route component={SingleProject} path="/project/:slug" />
				<Route component={Project} path="/project" />
			</Switch>
		</Router>
	);
}

export default App;
