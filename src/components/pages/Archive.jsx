import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import { GetAny } from "../../main";
import "./progress.css";

const Archive = () => {
  const [holdData, setHoldData] = React.useState(false);
  React.useEffect(() => {
    if (holdData === false) {
      GetAny("tasks").then((response) => {
        setHoldData(response.data);
      });
    }
  });
  if (holdData !== false) {
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
      rows: holdData.map(
        (data, index) =>
          data.status == 4 && {
            id: data.id,
            company: data.c_name,
            name: data.name,
            phone: data.phone,
            address: data.address,
            email: data.email,
            action: (
              <div className="flex items-center">
                <Link to={"/delete/" + data.id}>
                  <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                    Verwijderen
                  </button>
                </Link>
                <Link to={"/edit/" + data.id}>
                  <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                    bewerking
                  </button>
                </Link>
              </div>
            ),
          }
      ),
    };

    return (
      <>
        <div className="bg-pr text-white p-4 rounded-md">
          <h1 className="text-white font-medium text-center text-3xl">
          ARCHIEF
          </h1>
          <MDBDataTable responsiveMd hover bordered data={data} />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Archive;
