import React from "react";
import { Link } from "react-router-dom";
import cl from "../../images/cl.png";
import { GetAny } from "../../main";
import { UserDataContext } from "../Private";
const Dashboard = () => {
  const userData = React.useContext(UserDataContext);
  const [dashboardData, setDashboardData] = React.useState(false);
  React.useEffect(() => {
    if (dashboardData === false) {
      GetAny("ntwc").then((response) => {
        // console.log(response.data);
        setDashboardData(response.data);
      });
    }
  });
  if (dashboardData !== false) {
    return (
      <>
        <div className="rounded-md overflow-hidden">
          <div className="w-full bg-sr grid grid-cols-1 lg:grid-cols-4 items-center text-white">
            <div className="col-span-3">
              <img src={cl} alt="" />
            </div>
            <div className="w-full py-2 lg:py-0 flex flex-col justify-center">
              <h1 className="text-xl text-center">WELKOM BIJ</h1>
              <h1 className="font-semibold text-3xl text-center">DASHBOARD</h1>
            </div>
          </div>
        </div>
        {userData.role == "admin" && (
          <div className="w-full py-5 grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
            <Link to="/newTask">
              <div style={{padding:'59px 0'}} className="bg-sr text-gray-200 text-center rounded-md">
                <h1 className="text-2xl font-semibold">NIEUWE TAAK</h1>
              </div>
            </Link>
            <Link to="/progress">
              <div className="bg-sr text-gray-200 text-center py-6 rounded-md">
                <h1 className="text-2xl font-semibold">Meten</h1>
                <h1 className="text-7xl font-bold">{dashboardData.progress}</h1>
              </div>
            </Link>
            <Link to="/hold">
              <div className="bg-sr text-gray-200 text-center py-6 rounded-md">
                <h1 className="text-2xl font-semibold">Wacht</h1>
                <h1 className="text-7xl font-bold">{dashboardData.waitTask}</h1>
              </div>
            </Link>
            <Link to="/complete">
              <div className="bg-sr text-gray-200 text-center py-6 rounded-md">
                <h1 className="text-2xl font-semibold">Afgerond</h1>
                <h1 className="text-7xl font-bold">{dashboardData.doneTask}</h1>
              </div>
            </Link>
            <Link to="/archive">
              <div className="bg-sr text-gray-200 text-center py-6 rounded-md">
                <h1 className="text-2xl font-semibold">Archief</h1>
                <h1 className="text-7xl font-bold">{dashboardData.archive}</h1>
              </div>
            </Link>
          </div>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default Dashboard;
