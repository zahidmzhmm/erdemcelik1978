import React, {createContext} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/pages/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import Private from "./components/Private";
import Archive from "./components/pages/Archive";
import Complete from "./components/pages/Complete";
import Edit from "./components/pages/Edit";
import Hold from "./components/pages/Hold";
import NewTask from "./components/pages/NewTask";
import Progress from "./components/pages/Progress";
import Logout from "./components/auth/Logout";
import Users from "./components/pages/Users";
import Delete from "./components/pages/Delete";
import StaffPrivate from "./components/StaffPrivate";
import AddData from "./components/staff/AddData";
import StaffProgress from "./components/staff/StaffProgress";

export const MainWrapper = createContext();


function App() {
    let data;
    return (
        <MainWrapper.Provider value={data}>
            <div className="bg-bg overflow-x-hidden">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login"/>
                        </Route>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/logout">
                            <Logout/>
                        </Route>
                        <Private exact path="/dashboard">
                            <Dashboard/>
                        </Private>
                        <Private exact path="/newTask">
                            <NewTask/>
                        </Private>
                        <Private exact path="/progress">
                            <Progress/>
                        </Private>
                        <StaffPrivate exact path="/staff/progress">
                            <StaffProgress/>
                        </StaffPrivate>
                        <StaffPrivate exact path="/staff/task/addData/:id">
                            <AddData/>
                        </StaffPrivate>
                        <Private exact path="/edit/:id">
                            <Edit/>
                        </Private>
                        <Private exact path="/delete/:id">
                            <Delete page={'archive'}/>
                        </Private>
                        <Private exact path="/hold">
                            <Hold/>
                        </Private>
                        <Private exact path="/complete">
                            <Complete/>
                        </Private>
                        <Private exact path="/users">
                            <Users/>
                        </Private>
                        <Private exact path="/archive">
                            <Archive/>
                        </Private>
                    </Switch>
                </Router>
            </div>
        </MainWrapper.Provider>
    );
}

export default App;
