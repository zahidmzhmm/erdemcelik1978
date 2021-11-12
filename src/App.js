import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <div className="bg-bg overflow-x-hidden">
      <Router>
        {" "}
        {/* <Login /> */}{" "}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>{" "}
          <Route exact path="/dashboard">
            <Dashboard page="dashboard" />
          </Route>{" "}
          <Route exact path="/newtask">
            <Dashboard page="newtask" />
          </Route>{" "}
          <Route exact path="/progress">
            <Dashboard page="progress" />
          </Route>{" "}
          <Route exact path="/edit/:id">
            <Dashboard page="edit" />
          </Route>{" "}
          <Route exact path="/hold">
            <Dashboard page="hold" />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
