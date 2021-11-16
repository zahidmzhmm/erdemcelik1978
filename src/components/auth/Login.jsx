import React, {useState} from "react";
import {LockClosedIcon} from "@heroicons/react/solid";
import {PostAny, responseToast} from "../../main";
import {ToastContainer} from "react-toastify";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password)
        PostAny("login", formData).then((response) => {
            responseToast(response.message, response.type)
            if (response.status === 200) {
                setTimeout(() => {
                    localStorage.setItem('@accessUser', response.data)
                    window.location.href = "/dashboard";
                    setEmail("");
                    setPassword("");
                }, 3000)
            }
        })
    }
    React.useEffect(() => {
        if (localStorage.getItem('@accessUser') != undefined) {
            window.location.href = '/dashboard'
        }
    })
    return (
        <>
            <div className="h-screen w-screen bg-bg">
                <ToastContainer/>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-300">
                                Sign in to your account
                            </h2>
                        </div>
                        <form onSubmit={(e) => formSubmit(e)} className="mt-8 space-y-6" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true"/>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="my-4">
                                    <label htmlFor="email-address" className="text-gray-300">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email" value={email}
                                        autoComplete="email" onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-gray-300">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password" value={password}
                                        type="password" onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            {/*<div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-300">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link
                                        to="#"
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>*/}

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon
                                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                            aria-hidden="true"
                                        />
                                      </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
