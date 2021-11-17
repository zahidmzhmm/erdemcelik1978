import {Listbox, Transition} from "@headlessui/react";
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";
import React, {Fragment, useState} from "react";
import {Modal, Button} from "react-bootstrap"
import {GetAny, PostAny, responseToast} from "../../main";
import "./modal.scss";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const SendHold = ({data2}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [data, setData] = useState(false);
    const [selected, setSelected] = useState(0);
    const [option, setOption] = useState(1);
    const handleClose = () => setModalShow(false);


    React.useEffect(() => {
        if (data === false) {
            GetAny("users").then((response) => {
                setData(response.data)
                setSelected(response.data[0])
            })
        }
    })
    const formSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("id", selected.id);
        formData.append("staff_id", selected.id);
        formData.append("task_id", data2.id);
        formData.append("role", option);
        PostAny("sendAlert", formData).then((response) => {
            responseToast(response.message, response.type)
            setModalShow(false)
        })
    }
    if (data !== false && data2) {
        return (
            <>
                <button
                    onClick={(e) => setModalShow(!modalShow)}
                    className="bg-sr text-white px-2 py-1 rounded-md">
                    Send Another
                </button>
                <Modal
                    show={modalShow} onHide={handleClose}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Body className="bg-pr px-5 py-4">
                        <form action="" onSubmit={(e) => formSubmit(e)}>
                            <Listbox value={selected} onChange={setSelected}>
                                {({open}) => (
                                    <>
                                        <Listbox.Label className="block text-xl font-medium text-gray-200 ">
                                            SELECT STUFF
                                        </Listbox.Label>
                                        <div className="relative">
                                            <Listbox.Button
                                                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <span className="flex items-center">
                                      <img
                                          src="/user.jpg"
                                          alt=""
                                          className="flex-shrink-0 h-6 w-6 rounded-full"
                                      />
                                      <span className="ml-3 block truncate">
                                        {selected.name}
                                      </span>
                                    </span>
                                                <span
                                                    className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                    </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0">
                                                <Listbox.Options
                                                    className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {data.map((person) => (
                                                        person.role == 'staff' &&
                                                        <Listbox.Option
                                                            key={person.id}
                                                            className={({active}) =>
                                                                classNames(
                                                                    active
                                                                        ? "text-white bg-indigo-600"
                                                                        : "text-gray-900",
                                                                    "cursor-default select-none relative py-2 pl-3 pr-9"
                                                                )
                                                            }
                                                            value={person}>
                                                            {({selected, active}) => (
                                                                <>
                                                                    <div className="flex items-center">
                                                                        <img
                                                                            src="/user.jpg"
                                                                            alt=""
                                                                            className="flex-shrink-0 h-6 w-6 rounded-full"
                                                                        />
                                                                        <span className={classNames(
                                                                            selected ? "font-semibold" : "font-normal",
                                                                            "ml-3 block truncate"
                                                                        )}>
                                                                    {person.name}
                                                                </span>
                                                                    </div>
                                                                    {selected ? (
                                                                        <span className={classNames(
                                                                            active ? "text-white" : "text-indigo-600",
                                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                        )}>
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                                                </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                            <div className="checkboxGroup mt-4">
                                <div className={`form-group ${option == 1 ? 'active' : ''}`}>
                                    <label htmlFor="email">Email</label>
                                    <input type="checkbox" id="email" onChange={(e) => setOption(1)}
                                           className="d-none"/>
                                </div>
                                <div className={`form-group ${option == 2 ? 'active' : ''}`}>
                                    <label htmlFor="sms">SMS</label>
                                    <input type="checkbox" onChange={(e) => setOption(2)} id="sms" className="d-none"/>
                                </div>
                                <div className={`form-group ${option == 3 ? 'active' : ''}`}>
                                    <label htmlFor="whatsapp">WhatsApp</label>
                                    <input type="checkbox" onChange={(e) => setOption(3)} id="whatsapp"
                                           className="d-none"/>
                                </div>
                            </div>
                            <div className="text-center mb-3">
                                <Button type="submit" className={'rounded'} variant={"primary"}
                                        size={"md"}>Submit</Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        );
    } else {
        return null
    }
};

export default SendHold;
