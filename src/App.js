import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import SendModal from "./components/pages/childpages/SendModal";
import Dashboard from "./components/pages/Dashboard";
export const MainWrapper = createContext();
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <MainWrapper.Provider value={{modalShow, setModalShow}}>
      <div className="bg-bg overflow-x-hidden">
        <Router>
          {" "}
          {/* <Login /> */}{" "}
          <SendModal />
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
            <Route exact path="/complete">
              <Dashboard page="complete" />
            </Route>{" "}
            <Route exact path="/archive">
              <Dashboard page="archive" />
            </Route>{" "}
          </Switch>{" "}
        </Router>{" "}
      </div>
    </MainWrapper.Provider>
  );
}

export default App;
