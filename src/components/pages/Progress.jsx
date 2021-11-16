import React, {useContext} from "react";
import {MDBDataTable} from "mdbreact";
import {Link} from "react-router-dom";
import {MainWrapper} from "../../App";
import "./progress.css";
import {GetAny} from "../../main";

const Progress = () => {
    const {setModalShow} = useContext(MainWrapper);
    const [progressData, setProgressData] = React.useState(false);
    React.useEffect(() => {
        if (progressData === false) {
            GetAny("tasks").then((response) => {
                setProgressData(response.data)
            })
        }
    })
    if (progressData !== false) {
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
                }
            ],
            rows:
                progressData.map((data, index) =>
                    data.status == 3 &&
                    ({
                        id: data.id,
                        company: data.c_name,
                        name: data.name,
                        phone: data.phone,
                        address: data.address,
                        email: data.email,
                        action: (
                            <>
                                <button
                                    onClick={() => setModalShow(true)}
                                    className="bg-sr text-white px-2 py-1 rounded-md"
                                >
                                    Send
                                </button>
                                <Link to={"/edit/" + data.id}>
                                    <button className="bg-sr ml-2 text-white px-2 py-1 rounded-md">
                                        Edit
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
                    <h1 className="text-white font-medium text-center text-3xl">
                        PROGRESS TASKS
                    </h1>
                    <MDBDataTable responsiveMd hover bordered data={data}/>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default Progress;
