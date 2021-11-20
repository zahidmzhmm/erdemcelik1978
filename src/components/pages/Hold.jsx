import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import { GetAny } from "../../main";
import "./progress.css";
import SendHold from "./SendHold";

const Hold = () => {
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
          data.status == 2 && {
            id: data.id,
            company: data.c_name,
            name: data.name,
            phone: data.phone,
            address: data.address,
            email: data.email,
            action: (
              <div className="flex items-center">
                <div className="flex items-center flex-col gap-1">
                  <SendHold data2={data} />
                  <Link to={"/edit/" + data.id}>
                    <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                      Bewerking
                    </button>
                  </Link>
                </div >
              </div>
            ),
          }
      ),
    };

    return (
      <>
        <div className="bg-pr text-white p-4 rounded-md">
          <h1 className="text-white font-medium text-center text-3xl">
            ONDERHOUD TAKEN
          </h1>
          <div className="overflow-hidden">
            <MDBDataTable
              className="overflow-x-auto overflow-y-auto "
              hover
              bordered
              data={data}
            />
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Hold;
