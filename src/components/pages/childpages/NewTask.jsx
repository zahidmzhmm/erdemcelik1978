import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
export default function NewTask() {
  const [value, setValue] = React.useState(new Date());

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="bg-pr px-3 py-3 md:px-8 md:py-8 rounded-md">
          <div className="md:mt-0 md:col-span-2">
            <h1 className="text-center text-3xl font-medium text-gray-200">
              NEW TASK
            </h1>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <div className="rounded-md shadow-sm ">
                <div className="my-4 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                  <label
                    htmlFor="email-address"
                    className="text-gray-300 flex items-center justify-between"
                  >
                    COMPANY NAME <BsThreeDotsVertical className="ml-2" />
                  </label>
                  <input
                    id="company-name"
                    name="company"
                    type="text"
                    required
                    className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Your Company"
                  />
                </div>
                <div className="my-4 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                  <label
                    htmlFor="email-address"
                    className="text-gray-300 flex items-center justify-between"
                  >
                    NAME <BsThreeDotsVertical className="ml-2" />
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Jone Doe"
                  />
                </div>
                <div className="my-4 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                  <label
                    htmlFor="email-address"
                    className="text-gray-300 flex items-center justify-between"
                  >
                    PHONE <BsThreeDotsVertical className="ml-2" />
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    required
                    className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="+001122334455"
                  />
                </div>
                <div className="my-4 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                  <label
                    htmlFor="email-address"
                    className="text-gray-300 flex items-center justify-between"
                  >
                    ADRESS <BsThreeDotsVertical className="ml-2" />
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Your Address"
                  />
                </div>
                <div className="my-4 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                  <label
                    htmlFor="email-address"
                    className="text-gray-300 flex items-center justify-between"
                  >
                    EMAIL <BsThreeDotsVertical className="ml-2" />
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="email@email.com"
                  />
                </div>
              </div>

              <div className="my-4 grid w-full grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                <label
                  htmlFor="notes"
                  className="text-gray-300 flex items-center justify-between"
                >
                  NOTES <BsThreeDotsVertical className="ml-2" />
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  cols="30"
                  className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  rows="10"
                ></textarea>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-md">
                <div className="flex items-center justify-center flex-col gap-2">
                  <p className="text-gray-300">START DATE</p>
                  <div className="bg-white rounded-md">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => (
                          <TextField color="primary" {...props} />
                        )}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col gap-2">
                  <p className="text-gray-300">END DATE</p>
                  <div className="bg-white rounded-md">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => (
                          <TextField color="primary" {...props} />
                        )}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 grid w-full grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                <label
                  htmlFor="notes"
                  className="text-gray-300 flex items-center justify-between"
                >
                  STATUS <BsThreeDotsVertical className="ml-2" />
                </label>
                <select className="browser-default bg-pr text-white custom-select w-48">
                  <option value="1">Complete</option>
                  <option value="2">Progress</option>
                  <option value="3">Hold</option>
                  <option value="3">Archive</option>
                </select>
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
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
