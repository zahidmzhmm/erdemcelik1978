import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/Topbar";
import Archive from "./childpages/Archive";
import Complete from "./childpages/Complete";
import Dashboardpage from "./childpages/Dashboardpage";
import Edit from "./childpages/Edit";
import Hold from "./childpages/Hold";
import NewTask from "./childpages/NewTask";
import Progress from "./childpages/Progress";
import "./dashboard.css";

const Dashboard = ({ page }) => {
  // console.log(page);
  const [toggle, setToggle] = useState(false);
  const ChoosePage = (props) => {
    const selectpage = props.selectpage;
    // console.log(selectpage);
    if (selectpage === "dashboard") {
      return <Dashboardpage />;
    }
    if (selectpage === "newtask") {
      return <NewTask />;
    }
    if (selectpage === "progress") {
      return <Progress />;
    }
    if (selectpage === "edit") {
      return <Edit />;
    }
    if (selectpage === "hold") {
      return <Hold />;
    }
    if (selectpage === "complete") {
      return <Complete />;
    }
    if (selectpage === "archive") {
      return <Archive />;
    }
  };
  return (
    <>
      <div className="grid grid-cols-5 overflow-x-hidden w-screen gap-2">
        <div>
          <Sidebar toggle={toggle} setToggle={setToggle} />
        </div>

        <div
          className={
            !toggle
              ? "col-span-5 lg:col-span-4 min-h-screen"
              : "col-span-5 min-h-screen"
          }
        >
          <Topbar setToggle={setToggle} toggle={toggle} />
        
          <div className="mx-5">{<ChoosePage selectpage={page} />}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
