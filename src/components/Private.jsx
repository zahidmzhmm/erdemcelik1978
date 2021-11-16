import React, {useState} from 'react';
import {ToastContainer} from "react-toastify";
import Sidebar from "./layout/Sidebar";
import {Redirect, Route} from "react-router-dom";
import Topbar from "./layout/Topbar";
import "./pages/dashboard.css";

const Private = ({children, ...rest}) => {
    const [toggle, setToggle] = useState(false);
    const localData = localStorage.getItem('@accessUser');
    if (localData && localStorage.getItem('@accessUser') !== undefined) {
        return (
            <>
                <ToastContainer/>
                <div className="grid grid-cols-5 overflow-x-hidden w-screen gap-2">
                    <div>
                        <Sidebar toggle={toggle} setToggle={setToggle}/>
                    </div>
                    <div className={
                        !toggle
                            ? "col-span-5 lg:col-span-4 min-h-screen"
                            : "col-span-5 min-h-screen"
                    }>
                        <Topbar setToggle={setToggle} toggle={toggle}/>
                        <div className="mx-5">{<Route {...rest} render={() => (children)}/>}</div>
                    </div>
                </div>
            </>
        )
    } else {
        return (<Redirect to="/login"/>);
    }
};

export default Private;