/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// Class component
import Home from "./components/Home";
import Profile from "./components/containers/profiles/profiles";
import EditProfile from "./components/containers/profiles/profileEdit";
import store from "./redux/store";
import SuccessComponent from "./components/authentication/socialAuth/SuccessComponent";
import "./assets/css/App.scss";

// Functional component
import Navbar from "./components/common/Navbar";

const App = () => (
  <Provider store={store}>
    <SuccessComponent />
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <ToastContainer autoClose={3000} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile-edit" component={EditProfile} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
