import {MDBDataTable} from "mdbreact";
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {MainWrapper} from "../../App";
import "./progress.css";
import {GetAny} from "../../main";

const Hold = () => {
    const {setModalShow} = useContext(MainWrapper);
    const [holdData, setHoldData] = React.useState(false);
    React.useEffect(() => {
        if (holdData === false) {
            GetAny("tasks").then((response) => {
                setHoldData(response.data)
            })
        }
    })
    if (holdData !== false) {
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
                holdData.map((data, index) =>
                    data.status == 2 &&
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
                    <h1 className="text-white font-medium text-center text-3xl">HOLD TASKS</h1>
                    <MDBDataTable responsiveMd hover bordered data={data}/>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default Hold;
