import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GetAny, PostAny, responseToast } from "../../main";
import { useParams } from "react-router";
const Edituser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [role, setRole] = useState();
    const { id } = useParams();
    const [reload] = useState(false)
    React.useEffect(() => {
        GetAny("viewUser?id=" + id).then((response) => {
            console.log(response)
            setName(response.data.name);
            setPhone(response.data.phone);
            setEmail(response.data.email);
            setWhatsapp(response.data.whatsapp)
            // console.log(response.data.role)
            setPass(response.data.password)
            setRole(response.data.role)
        });
    }, [reload]);

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // console.log(name, pass, phone, whatsapp)
        formData.append("id", id);
        formData.append("name", name);
        formData.append("password", pass);
        formData.append("phone", phone);
        formData.append("whatsapp", whatsapp);
        // console.log(role)
        formData.append("role", role);

        PostAny("updateUser", formData).then((response) => {
            responseToast(response.message, response.type);
            if (response.status == 200) {
                setName("");
                setPhone("");
                setEmail("");
                setRole("");
               
            }
        });
    };
    return (
        <div className="px-2 lg:px-4">

            <form
                onSubmit={(e) => formSubmit(e)}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
            >
                <div className="rounded-md shadow-sm ">
                    <div className="mb-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                        <label
                            htmlFor="email-address"
                            className="text-gray-300 flex items-center justify-between"
                        >
                            DINGEN NAAM <BsThreeDotsVertical className="ml-2" />
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Jone Doe"
                        />
                    </div>
                    <div className="my-3 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                        <label
                            htmlFor="email-address"
                            className="text-gray-300 flex items-center justify-between"
                        >
                            E-MAIL <BsThreeDotsVertical className="ml-2" />
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={email}
                            type="email"
                            disabled
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="email@email.com"
                        />
                    </div>
                    <div className="my-3 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                        <label
                            htmlFor="email-address"
                            className="text-gray-300 flex items-center justify-between"
                        >
                            WACHTWOORD
                            <BsThreeDotsVertical className="ml-2" />
                        </label>
                        <input
                            id="password"
                            name="password"
                            value={pass}
                            type="password"
                            onChange={(e) => setPass(e.target.value)}

                            className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="personeelswachtwoord"
                        />
                    </div>
                    <div className="my-3 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                        <label
                            htmlFor="email-address"
                            className="text-gray-300 flex items-center justify-between"
                        >
                            TELEFOON <BsThreeDotsVertical className="ml-2" />
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            value={phone}
                            type="number"
                            onChange={(e) => setPhone(e.target.value)}

                            className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="+001122334455"
                        />
                    </div>

                    <div className="my-3 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                        <label
                            htmlFor="email-address"
                            className="text-gray-300 flex items-center justify-between"
                        >
                            WHATAPP <BsThreeDotsVertical className="ml-2" />
                        </label>
                        <input
                            id="whatsapp"
                            name="whatsapp"
                            value={whatsapp}
                            type="text"
                            onChange={(e) => setWhatsapp(e.target.value)}

                            className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Whatsapp-nummer"
                        />
                    </div>
                    <div className="my-3 grid w-full grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                        <label
                            htmlFor="notes"
                            className="text-gray-300 flex items-center justify-between"
                        >
                            ROL <BsThreeDotsVertical className="ml-2" />
                        </label>
                        <select
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            className="browser-default bg-pr text-white custom-select w-48"
                        >
                            <option value="staff">Personeel</option>
                            <option value="admin">beheerder</option>
                        </select>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <IoCheckmarkDoneCircle
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                            />
                        </span>
                        Voeg gebruiker toe
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Edituser;