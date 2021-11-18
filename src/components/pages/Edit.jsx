import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { GetAny, PostAny, responseToast } from "../../main";

export default function Edit() {
  const { id } = useParams();
  const [data, setData] = React.useState(false);
  React.useEffect(() => {
    if (data === false) {
      GetAny("viewTask?id=" + id).then((response) => {
        setData(response.data);
        setCompany(response.data.c_name);
        setName(response.data.name);
        setPhone(response.data.phone);
        setAddress(response.data.address);
        setEmail(response.data.email);
        setNotes(response.data.notes);
        setStatus(response.data.status);
      });
    }
  });
  const [start, setStart] = React.useState(new Date());
  const [end, setEnd] = React.useState(new Date());
  const [company, setCompany] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [fileUpload, setFileUpload] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("start", start);
    formData.append("end", end);
    formData.append("c_name", company);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("notes", notes);
    formData.append("files", fileUpload);
    formData.append("status", status);
    formData.append("whatsapp", whatsapp)
    formData.append("id", id);
    PostAny("editTask", formData).then((response) =>
      responseToast(response.message, response.type)
    );
  };
  if (data !== false) {
    return (
      <>
        <div className="overflow-x-hidden">
          <div className="bg-pr px-3 py-3 md:px-8 md:py-8 rounded-md">
            <div className="md:mt-0 md:col-span-2">
              <h1 className="text-center text-xl font-medium text-gray-200">
                EDIT TASK
              </h1>
              <form
                onSubmit={(e) => formSubmit(e)}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
              >
                <div className="rounded-md shadow-sm ">
                  <div className="my-1 grid w-full grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="notes"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      STATUS <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <select
                      onChange={(e) => setStatus(e.target.value)}
                      className="browser-default bg-pr text-white custom-select w-48"
                    >
                      <option value="1">Complete</option>
                      <option value="2">Hold</option>
                      <option selected value="3">
                        Progress
                      </option>
                      <option value="4">Archive</option>
                    </select>
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
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
                      value={company}
                      required
                      onChange={(e) => setCompany(e.target.value)}
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Your Company"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      NAME <BsThreeDotsVertical className="ml-2" />
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
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      PHONE <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={phone}
                      type="number"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="+001122334455"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      ADDRESS <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <input
                      id="address"
                      name="address"
                      value={address}
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Your Address"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      EMAIL <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="email@email.com"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      WHATSAPP <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      value={whatsapp}
                      type="text"
                      onChange={(e) => setWhatsapp(e.target.value)}
                      required
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="whatsapp number"
                    />
                  </div>
                </div>

                <div className="my-1 grid w-full grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                  <label
                    htmlFor="notes"
                    className="text-gray-300 flex items-center justify-between"
                  >
                    NOTES <BsThreeDotsVertical className="ml-2" />
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    value={notes}
                    cols="30"
                    onChange={(e) => setNotes(e.target.value)}
                    className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    rows="3"
                  />
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-md">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-gray-300 flex items-center">START DATE <BsThreeDotsVertical className="ml-2" /> </p>
                    <div className="bg-white rounded-md">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          renderInput={(props) => (
                            <TextField color="primary" {...props} />
                          )}
                          value={start}
                          onChange={(start) => {
                            setStart(start);
                          }}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-1 flex justify-center px-3 pt-3 pb-1 border-2 border-gray-300 border-dashed rounded-md">
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
                            onChange={(e) => setFileUpload(e.target.files[0])}
                            className="sr-only"
                          />
                        </label>
                      </div>
                    </div>
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
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
