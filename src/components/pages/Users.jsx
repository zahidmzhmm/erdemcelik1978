import { MDBDataTable } from "mdbreact";
import React, { useState } from "react";
import { GetAny } from "../../main";
import AddUserModal from "./AddUserModal";

const Users = () => {
  const [usersData, setUsersData] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  React.useEffect(() => {
    if (usersData === false) {
      GetAny("users").then((response) => {
        setUsersData(response.data);
      });
    }
  });
  if (usersData !== false) {
    const data = {
      columns: [
        {
          label: "Naam",
          field: "name",
          width: 200,
        },
        {
          label: "Email",
          field: "email",
          width: 200,
        },
        {
          label: "Telefoon",
          field: "phone",
          width: 200,
        },
        {
          label: "WhatsApp",
          field: "whatsapp",
          width: 200,
        },
        {
          label: "Rol",
          field: "role",
          width: 200,
        },
      ],
      rows: usersData.map(
        (data, index) =>
          data.role == "staff" && {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            whatsapp: data.whatsapp,
            role: data.role,
          }
      ),
    };
   
    return (
      <>
        <AddUserModal modalShow={modalShow} setModalShow={setModalShow} />
        <div className="bg-pr text-white p-4 rounded-md">
          <h1 className="text-white font-medium text-center text-3xl">
          VOLTOOID
          </h1>
          <button
            onClick={() => setModalShow(true)}
            className="px-2 py-2 bg-sr text-white rounded-md"
          >
           Voeg gebruiker toe
          </button>
          <MDBDataTable responsiveMd hover bordered data={data} />
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Users;
