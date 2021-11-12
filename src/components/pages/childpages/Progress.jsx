import { MDBDataTable } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
import "./progress.css";
const Progress = () => {
  const data = {
    columns: [
      {
        label: "Company Name",
        field: "company",

        width: 200,
      },
      {
        label: "Name",
        field: "name",

        width: 200,
      },

      {
        label: "Phone",
        field: "phone",

        width: 200,
      },
      {
        label: "Address",
        field: "address",

        width: 200,
      },
      {
        label: "Email",
        field: "email",

        width: 200,
      },
      {
        field: "send",
        width: 200,
      },
      {
        field: "edit",
        width: 200,
      },
    ],
    rows: [
      {
        id: 1,
        company: "Tiger Nixon",
        name: "Adon Roe",
        phone: "+0011223344",
        address: "Austin, texas",
        email: "adon@gmail.com",
        send: (
          <button className="bg-sr text-white px-2 py-1 rounded-md">
            send
          </button>
        ),
        edit: (
          <Link to={"/edit/" + 1}>
            <button className="bg-sr text-white px-2 py-1 rounded-md">
              edit
            </button>
          </Link>
        ),
      },
    ],
  };

  return (
    <>
      <div className="bg-pr text-white p-4 rounded-md">
        <h1 className="text-white font-medium text-center text-xl">PROGRESS TASKS</h1>
        <MDBDataTable responsiveMd hover bordered data={data} />
      </div>
    </>
  );
};

export default Progress;
