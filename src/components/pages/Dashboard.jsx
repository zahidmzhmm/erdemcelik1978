import React from "react";
import cl from '../../images/cl.png';
import {GetAny} from "../../main";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = React.useState(false);
    React.useEffect(() => {
        if (dashboardData === false) {
            GetAny("ntwc").then((response) => {
                setDashboardData(response.data)
            })
        }
    })
    if (dashboardData !== false) {
        console.log(dashboardData)
        return (
            <>
                <div className="rounded-md overflow-hidden">
                    <div className="w-full bg-sr grid grid-cols-1 lg:grid-cols-4 items-center text-white">
                        <div className="col-span-3">
                            <img src={cl} alt=""/>
                        </div>
                        <div className="w-full py-2 lg:py-0 flex flex-col justify-center">
                            <h1 className="text-xl text-center">WECLOME TO </h1>
                            <h1 className="font-semibold text-3xl text-center">DASHBOARD</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full py-5 grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
                    <div className="bg-sr text-gray-200 text-center py-6 rounded-md">
                        <h1 className="text-2xl font-semibold">NEW TASK</h1>
                        <h1 className="text-7xl font-bold">{dashboardData.newTask}</h1>
                    </div>
                    <div className="bg-sr text-gray-200 text-center py-6 rounded-md">
                        <h1 className="text-2xl font-semibold">WAITING</h1>
                        <h1 className="text-7xl font-bold">{dashboardData.waitTask}</h1>
                    </div>
                    <div className="bg-sr text-gray-200 text-center py-6 rounded-md">
                        <h1 className="text-2xl font-semibold">COMPLETED</h1>
                        <h1 className="text-7xl font-bold">{dashboardData.doneTask}</h1>
                    </div>
                </div>
            </>
        );
    } else {
        return null
    }
};

export default Dashboard;
