import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import { authenticate } from "./store/session";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import PublicProfile from "./components/PublicProfile";
import CategoryPage from "./components/CategoryPage";
import ServicePage from "./components/ServicePage";
import NewService from "./components/NewService";
import EditService from "./components/EditService";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";



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

                <Route path="/category/:id">
                    <CategoryPage />
                </Route>

                <Route path="/service/:id">
                    <ServicePage />
                </Route>

                <Route path="/profile/:username">
                    <PublicProfile />
                </Route>

                <Route path="/about-me">
                    
                </Route>

                <ProtectedRoute  exact={true} path="/new-service/edit/:serviceId" >
                    <EditService />
                </ProtectedRoute>

                <ProtectedRoute  exact={true} path="/new-service" >
                    <NewService />
                </ProtectedRoute>

                <ProtectedRoute exact={true} path="/profile" >
                    <ProfilePage />
                </ProtectedRoute>
                <Route>
                    <PageNotFound />
                </Route>
                {/* <ProtectedRoute path="/" exact={true} >
                    <h1>My Home Page</h1>
                </ProtectedRoute> */}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
