import React, { createContext } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Archive from "./components/pages/Archive";
import Complete from "./components/pages/Complete";
import Dashboard from "./components/pages/Dashboard";
import Delete from "./components/pages/Delete";
import Download from "./components/pages/Download";
import Edit from "./components/pages/Edit";
import Hold from "./components/pages/Hold";
import NewTask from "./components/pages/NewTask";
import Progress from "./components/pages/Progress";
import Users from "./components/pages/Users";
import Private from "./components/Private";
import AddData from "./components/staff/AddData";
import StaffProgress from "./components/staff/StaffProgress";
import StaffPrivate from "./components/StaffPrivate";

export const MainWrapper = createContext();

function App() {
  let data;
  return (
    <MainWrapper.Provider value={data}>
      <div className="bg-bg overflow-x-hidden">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>{" "}
            <Route exact path="/login">
              <Login />
            </Route>{" "}
            <Route exact path="/logout">
              <Logout />
            </Route>{" "}
            <Private exact path="/dashboard">
              <Dashboard />
            </Private>{" "}
            <Private exact path="/newTask">
              <NewTask />
            </Private>{" "}
            <Private exact path="/progress">
              <Progress />
            </Private>{" "}
            <Private exact path="/download/:id">
              <Download />
            </Private>{" "}
            <StaffPrivate exact path="/staff/progress">
              <StaffProgress />
            </StaffPrivate>{" "}
            <StaffPrivate exact path="/staff/task/addData/:id">
              <AddData />
            </StaffPrivate>{" "}
            <Private exact path="/edit/:id">
              <Edit />
            </Private>{" "}
            <Private exact path="/delete/:id">
              <Delete page={"archive"} />{" "}
            </Private>{" "}
            <Private exact path="/hold">
              <Hold />
            </Private>{" "}
            <Private exact path="/complete">
              <Complete />
            </Private>{" "}
            <Private exact path="/users">
              <Users />
            </Private>{" "}
            <Private exact path="/archive">
              <Archive />
            </Private>{" "}
          </Switch>{" "}
        </Router>{" "}
      </div>{" "}
    </MainWrapper.Provider>
  );
}

export default App;
