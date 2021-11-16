import React, {createContext} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import SendModal from "./components/pages/SendModal";
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

export const MainWrapper = createContext();

function App() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <MainWrapper.Provider value={{modalShow, setModalShow}}>
            <div className="bg-bg overflow-x-hidden">
                <Router>
                    <SendModal/>
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
                        <Private exact path="/edit/:id">
                            <Edit/>
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
