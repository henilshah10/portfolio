import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Education from "./components/Education";
import Work from "./components/Work";
import SingleProject from "./components/SingleProject";
import Project from "./components/Project";
import Achievements from "./components/Achievements";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route component={Home} exact path="/" />
				<Route component={Education} path="/education" />
				<Route component={Work} path="/work" />
				<Route component={SingleProject} path="/project/:slug" />
				<Route component={Project} path="/project" />
				<Route component={Achievements} path="/achievements" />
			</Switch>
		</Router>
	);
}

export default App;
