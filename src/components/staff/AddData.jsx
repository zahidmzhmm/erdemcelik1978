import React, {useState} from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useHistory, useParams } from "react-router-dom";
import { GetAny, PostAny, responseToast } from "../../main";
import { AiFillCloseCircle } from "react-icons/ai";
import { Spinner } from 'react-bootstrap';
export default function AddData() {
  const { id } = useParams();
  const [data, setData] = React.useState(false);
  const history = useHistory();
  const [previewitems, setPreviewitems] = React.useState([])
  const [start, setStart] = React.useState(new Date());
  const [end, setEnd] = React.useState(new Date());
  const [company, setCompany] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [loader, setLoader] = useState(false)
  React.useEffect(() => {
    if (data === false) {
      GetAny("viewTask?id=" + id).then((response) => {
        setData(response.data.task);
        setCompany(response.data.task.c_name);
        setName(response.data.task.name);
        setPhone(response.data.task.phone);
        setAddress(response.data.task.address);
        setEmail(response.data.task.email);
        setWhatsapp(response.data.task.whatsapp);
        setNotes(response.data.task.notes);
        
        // console.log(response)
      });
    }
  });
  const formSubmit = (e) => {
    e.preventDefault();
    setLoader(true)
    const formData = new FormData();
    formData.append("id", id);
    formData.append("start", start);
    formData.append("end", end);
    formData.append("c_name", company);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("whatsapp", whatsapp);
    formData.append("notes", notes);
    for (let i = 0; i < previewitems.length; i++) {
      formData.append(`files[${i}]`, previewitems[i])
    }
    formData.append("status", 1);
    PostAny("editTask", formData).then((response) => {
      setLoader(false)
      responseToast(response.message, response.type);
      if (response.status == 200) {
        history.push("/staff/progress");
      }
    });
  };
  const filePreview = (data) => {
    let items = [];
    for (let i = 0; i < data.length; i++) {
      items[i] = data[i];
    }
  // console.log(items[0].name)
    setPreviewitems(previewitems.concat(items))


  }
  const filterItem = (data) => {
    const filterarray = previewitems.filter((item) => item !== data)

    setPreviewitems(filterarray)

  }
  if (data !== false) {
    return (
      <>
        <div className="overflow-x-hidden">    
          <div className="bg-pr px-3 py-3 md:px-8 md:py-8 rounded-md">
            <div className="md:mt-0 md:col-span-2">
              <h1 className="text-center text-3xl font-medium text-gray-200">
                Gegevens toevoegen
              </h1>
              {loader && <div style={{ background: 'rgba(0,0,0,0.8)' }} className="w-full h-screen z-40 absolute top-0 left-0 flex items-center justify-center">
                <Spinner animation="grow" className="text-sr text-3xl" /> <h2 className=" text-xl lg:text-4xl font-bold text-sr">Bestanden uploaden</h2>
              </div>}
              {!loader && <form
                onSubmit={(e) => formSubmit(e)}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
              >
                <div className="rounded-md shadow-sm ">
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      BEDRIJF
                      <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <input
                      id="company-name"
                      name="company"
                      type="text"
                      value={company}
                   
                      onChange={(e) => setCompany(e.target.value)}
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Uw onderneming"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      NAAM <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={name}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                     
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
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
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                    <label
                      htmlFor="email-address"
                      className="text-gray-300 flex items-center justify-between"
                    >
                      ADRES <BsThreeDotsVertical className="ml-2" />
                    </label>
                    <input
                      id="address"
                      name="address"
                      value={address}
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                     
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Jouw adres"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
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
                      onChange={(e) => setEmail(e.target.value)}
                   
                      className="appearance-none col-span-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="email@email.com"
                    />
                  </div>
                  <div className="my-1 grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
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
                      placeholder="whatsapp-nummer"
                    />
                  </div>
                </div>

                <div className="my-1 grid w-full grid-cols-1 md:grid-cols-5 gap-2 md:gap-5">
                  <label
                    htmlFor="notes"
                    className="text-gray-300 flex items-center justify-between"
                  >
                    OPMERKINGEN <BsThreeDotsVertical className="ml-2" />
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
                {/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-md">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-gray-300 flex items-center">START DATE <BsThreeDotsVertical className="ml-2" /></p>
                    <div className="bg-white rounded-md">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          ampm={false}
                          ampmInClock={false}
                          inputFormat="dd/MM/yyyy/ h:m"
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
               
                </div> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="mt-1 flex justify-center px-3 pt-3 pb-1 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                      {previewitems.length !== 0 ?
                      <div className="text-white">{previewitems.map((item, ind) => (
                        <div key={ind} className="text-white flex items-center gap-1">
                          <p className="text-sm">{item.name}</p>
                          <AiFillCloseCircle onClick={() => filterItem(item)} className="ml-2 text-white cursor-pointer" /> </div>
                      ))}</div>
                      : <svg
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
                      </svg>}
                        <div className="flex text-sm text-gray-600">
                          {/* <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Een bestand uploaden</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              multiple
                              onChange={(e) => {
                               
                                filePreview(e.target.files)
                              }}
                              className="sr-only"
                            />
                          </label> */}
                             <div class="form-group">
                          <label for="exampleFormControlFile1" className="text-white bg-sr px-1 py-1 rounded-sm cursor-pointer">Een bestand uploaden</label>
                          <input hidden multiple type="file" onChange={(e) => {
                            filePreview(e.target.files)
                          }} class="form-control-file" id="exampleFormControlFile1" />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-md-6">
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
                            <span>{file2}</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              multiple
                              onChange={(e) => {
                                setFileUpload2(e.target.files[0])
                                setFile2(e.target.files.length + " bestanden geselecteerd")
                              }}
                              className="sr-only"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> */}
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
                    Compleet
                  </button>
                </div>
              </form>}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
