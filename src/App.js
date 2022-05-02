import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Router, Switch, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";

import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

import {history} from "./helpers/history";

import EventBus from "./common/EventBus";

const App = () => {
	const [showModeratorBoard, setShowModeratorBoard] = useState(false);
	const [showAdminBoard, setShowAdminBoard] = useState(false);

	const {user: currentUser} = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		history.listen((location) => {
			dispatch(clearMessage()); // clear message when changing location
		});
	}, [dispatch]);

	const logOut = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	useEffect(() => {
		if (currentUser) {
			setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
			setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
		} else {
			setShowModeratorBoard(false);
			setShowAdminBoard(false);
		}

		EventBus.on("logout", () => {
			logOut();
		});

		return () => {
			EventBus.remove("logout");
		};
	}, [currentUser, logOut]);

	return (
		<Router history={history}>
			<div>
				<div className="container mt-3">
					<Switch>
						<Route exact path={["/", "/home"]} component={Home}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/register" component={Register}/>
						<Route exact path="/profile" component={Profile}/>
					</Switch>
				</div>

				{/* <AuthVerify logOut={logOut}/> */}
			</div>
		</Router>
	);
};

export default App;
