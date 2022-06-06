import React, {useState, useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Router, Switch, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./components/Home";
import ProfilePage from "./pages/ProfilePage";
import {clearMessage} from "./actions/message";
import {history} from "./helpers/history";
import Logout from "./components/Logout";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import AllTasksPage from "./pages/AllTasksPage";
import AboutTask from "./components/AboutTask";
import TaskDescriptionPage from "./pages/TaskDescriptionPage";
import ImageCarousel from "./components/ImageCarousel";
import WorkCasePage from "./pages/WorkCasePage";
import ImageCarouselWithUpload from "./components/ImageCarouselWithUpload";
import AddWorkPage from "./pages/AddWorkPage";

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
						<Route exact path={["/", "/home"]} component={MainPage}/>
						<Route exact path="/login" component={LoginPage}/>
						<Route exact path="/register" component={RegisterPage}/>
						<Route exact path="/logout" component={Logout}/>
						<Route exact path="/profile" component={ProfilePage}/>
						<Route exact path="/tasks" component={AllTasksPage}/>
						<Route exact path="/task/:taskId" component={TaskDescriptionPage}/>
						<Route exact path="/work/:workId" component={WorkCasePage}/>
						<Route exact path="/upload" component={AddWorkPage}/>
					</Switch>
				</div>

			</div>
		</Router>
	);
};

export default App;
