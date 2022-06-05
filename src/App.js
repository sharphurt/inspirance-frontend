import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Router, Switch, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import {clearMessage} from "./actions/message";
import {history} from "./helpers/history";
import Logout from "./components/Logout";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AllTasks from "./components/AllTasks";
import AboutTask from "./components/AboutTask";
import TaskDescriptionPage from "./components/TaskDescriptionPage";
import ImageCarousel from "./components/ImageCarousel";
import WorkCase from "./components/WorkCase";

const App = () => {
	const {user: currentUser} = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		history.listen((location) => {
			dispatch(clearMessage()); // clear message when changing location
		});
	}, [dispatch]);

	return (
		<Router history={history}>
			<div>
				<div>
					<Switch>
						<Route exact path={["/", "/home"]} component={Main}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/register" component={Register}/>
						<Route exact path="/logout" component={Logout}/>
						<Route exact path="/profile" component={Profile}/>
						<Route exact path="/tasks" component={AllTasks}/>
						<Route exact path="/task/:taskId" component={TaskDescriptionPage}/>
						<Route exact path="/work/:workId" component={WorkCase}/>
					</Switch>
				</div>

			</div>
		</Router>
	);
};

export default App;
