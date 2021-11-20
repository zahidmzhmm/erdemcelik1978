import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import { GetAny } from "../../main";
import { UserDataContext } from "../Private";
import "./progress.css";
import SendModal from "./SendModal";

const Progress = () => {
  const userData = React.useContext(UserDataContext);
  const [progressData, setProgressData] = React.useState(false);
  React.useEffect(() => {
    if (progressData === false) {
      GetAny("tasks").then((response) => {
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
      rows: progressData.map(
        (data, index) =>
          data.status == 3 && {
            id: data.id,
            company: data.c_name,
            name: data.name,
            phone: data.phone,
            address: data.address,
            email: data.email,
            action:
              userData.role == "admin" ? (
                <>
                  <SendModal data2={data} />
                  <Link className="mt-1" to={"/edit/" + data.id}>
                    <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                    Bewerking
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/staff/task/addData/" + data.id}>
                    <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                    Gegevens toevoegen
                    </button>
                  </Link>
                </>
              ),
          }
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

export default Progress;
