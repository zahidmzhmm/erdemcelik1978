import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import { GetAny } from "../../main";
import "../pages/progress.css";
import { UserDataContext } from "../Private";

const StaffProgress = () => {
  const userData = React.useContext(UserDataContext);
  const [progressData, setProgressData] = React.useState(false);
  React.useEffect(() => {
    if (progressData === false) {
      GetAny("alerts").then((response) => {
        console.log(response)
        setProgressData(response.data);
      });
    }
  });
  if (progressData !== false) {
    const data = {
      columns: [
        {
          label: "Bedrijfsnaam",
          field: "company",
          width: 200,
        },
        {
          label: "Naam",
          field: "name",
          width: 200,
        },

        {
          label: "Telefoon",
          field: "phone",

          width: 200,
        },
        {
          label: "Adres",
          field: "address",

          width: 200,
        },
        {
          label: "E-mail",
          field: "email",

          width: 200,
        },
        {
          label: "Actie",
          field: "action",
          width: 200,
        },
      ],
      rows: progressData.map((data, index) =>
        data.task_status == 3 && data.user_id == userData.id
          ? {
              id: data.task_id,
              company: data.task_cname,
              name: data.task_name,
              phone: data.task_phone,
              address: data.task_phone,
              email: data.task_phone,
              action: (
                <>
                  <Link to={"/staff/task/addData/" + data.task_id}>
                    <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                      Gegevens toevoegen
                    </button>
                  </Link>
                </>
              ),
            }
          : ""
      ),
    };
    return (
      <>
        <div className="bg-pr text-white p-4 rounded-md">
          <h1 className="text-white font-medium text-center text-3xl">
            VOORTGANG TAKEN
          </h1>
          <MDBDataTable responsiveMd hover bordered data={data} />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default StaffProgress;
