import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";

function App() {
    const user = useSelector(state => state.session.user)
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(authenticate());
            setLoaded(true);
        })();
    }, []);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            {/* <NavBar /> */}
            <Switch>
                <Route path="/" exact={true}>
                    {user ? <HomePage /> : <SplashPage />}
                </Route>
                {/* <ProtectedRoute path="/users" exact={true} >
                    <UsersList />
                </ProtectedRoute> */}
                {/* <ProtectedRoute path="/users/:userId" exact={true} >
                    <User />
                </ProtectedRoute> */}
                <ProtectedRoute path="/profile" exact={true} >
                    <ProfilePage />
                </ProtectedRoute>
                {/* <ProtectedRoute path="/" exact={true} >
                    <h1>My Home Page</h1>
                </ProtectedRoute> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
