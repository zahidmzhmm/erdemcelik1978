/* This example requires Tailwind CSS v2.0+ */
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Topbar({setToggle, toggle}) {
    return (
        <div className="m-5">
            <Disclosure as="nav" className="bg-pr rounded-md">
                {({open}) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="flex-1 items-center justify-start flex">
                                    {
                                        !toggle ? <div
                                                className="text-white cursor-pointer pl-4"
                                                onClick={() => setToggle(true)}
                                            >
                                                <FaBars className="w-6 animate-pulse h-6"/>
                                            </div>
                                            :
                                            <div
                                                className="text-white cursor-pointer  pl-4"
                                                onClick={() => setToggle(false)}
                                            >
                                                <AiOutlineClose className="w-6 animate-pulse h-6"/>
                                            </div>
                                    }
                                </div>

                                <div
                                    className="absolute inset-y-0 z-10 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button
                                                className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg border border-gray-500 border-opacity-5 bg-pr ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <Link
                                                            to="/settings"
                                                            className={classNames(
                                                                active ? "bg-sr rounded-sm" : "",
                                                                "block px-4 py-3 font-medium text-sm text-white"
                                                            )}
                                                        >
                                                            Settings
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <Link
                                                            to="/logout"
                                                            className={classNames(
                                                                active ? "bg-sr rounded-sm" : "",
                                                                "block px-4 py-3 font-medium text-sm text-white"
                                                            )}
                                                        >
                                                            Sign out
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </div>
    );
}
