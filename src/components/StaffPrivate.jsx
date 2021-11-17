import React, {useState} from 'react';
import {ToastContainer} from "react-toastify";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import {Redirect, Route} from "react-router-dom";
import {GetAny} from "../main";
import {UserDataContext} from "./Private";

const StaffPrivate = ({children, ...rest}) => {
    const [toggle, setToggle] = useState(false);
    const localData = localStorage.getItem('@accessUser');
    const [userData, setUserData] = React.useState(false);
    React.useEffect(() => {
        if (userData === false) {
            GetAny("viewUserToken?token=" + localData).then((response) => {
                setUserData(response.data)
            })
        }
    })
    if (localData && localStorage.getItem('@accessUser') !== undefined) {
        if (userData !== false) {
            return (
                <>
                    <UserDataContext.Provider value={userData}>
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
                    </UserDataContext.Provider>
                </>
            )
        } else {
            return null
        }
    } else {
        return (<Redirect to="/login"/>);
    }
};

export default StaffPrivate;