import React from 'react';
import {GetAny} from "../../main";
import {Link} from "react-router-dom";
import {MDBDataTable} from "mdbreact";

const Users = () => {
    const [usersData, setUsersData] = React.useState(false);
    React.useEffect(() => {
        if (usersData === false) {
            GetAny("users").then((response) => {
                setUsersData(response.data)
            })
        }
    })
    if (usersData !== false) {
        const data = {
            columns: [
                {
                    label: "Name",
                    field: "name",
                    width: 200,
                },
                {
                    label: "Email",
                    field: "email",
                    width: 200,
                },
                {
                    label: "Phone",
                    field: "phone",
                    width: 200,
                },
                {
                    label: "WhatsApp",
                    field: "whatsapp",
                    width: 200,
                },
                {
                    label: "Role",
                    field: "role",
                    width: 200,
                },

            ],
            rows: usersData.map((data, index) =>
                data.role == 'staff' &&
                ({
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    whatsapp: data.whatsapp,
                    role: data.role,
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

export default Users;