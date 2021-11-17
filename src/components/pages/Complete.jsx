import {MDBDataTable} from "mdbreact";
import React, {useContext} from "react";
import "./progress.css";
import {GetAny} from "../../main";
import {Link} from "react-router-dom";

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
                        <>
                            <Link to={"/download/" + data.id}>
                                <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                                    Download
                                </button>
                            </Link>
                        </>
                    )
                })
            )
        };

        return (
            <>
                <div className="bg-pr text-white p-4 rounded-md">
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
