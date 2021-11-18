import { MDBDataTable } from "mdbreact";
import React from "react";
import { FaDownload } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import { Link } from "react-router-dom";
import { GetAny } from "../../main";
import "./progress.css";
const Complete = () => {
    const [completeData, setCompleteData] = React.useState(false);
    React.useEffect(() => {
        if (completeData === false) {
            GetAny("tasks").then((response) => {
                setCompleteData(response.data)
            })
        }
    })
    if (completeData !== false) {
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
                    label: "Action",
                    field: "action",
                    width: 200,
                },

            ],
            rows: completeData.map((data, index) =>
                data.status == 1 &&
                ({
                    id: data.id,
                    company: data.c_name,
                    name: data.name,
                    phone: data.phone,
                    address: data.address,
                    email: data.email,
                    action: (
                        <div className="flex items-center">
                            <Link to={"/download/" + data.id}>
                                <button className="bg-sr ml-2 text-white px-2 py-2 rounded-md">
                                   <FaDownload />
                                </button>
                            </Link>
                            <Link to={"/edit/" + data.id}>
                                    <button className="bg-sr ml-2 text-white px-2 py-2 rounded-md">
                                      <MdModeEdit/>
                                    </button>
                                </Link>
                        </div>
                    )
                })
            )
        };

        return (
            <>
                <div className="bg-pr text-white p-4 rounded-md ">
                    <h1 className="text-white font-medium text-center text-3xl">COMPLETED</h1>
                    <MDBDataTable responsiveMd hover bordered data={data}/>
                </div>
            </>
        );
    } else {
        return null
    }
};

export default Complete;
