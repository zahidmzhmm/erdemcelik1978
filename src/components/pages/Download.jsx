import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { apiURI, headers } from "../../main";
const Download = () => {
  const { id } = useParams();
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (show) {
      var myHeaders = new Headers();
      myHeaders.append("x-api-key", "admin12123");
      var requestOptions = {
        method: "GET",
        headers: headers,
       
      };
      fetch(`${apiURI}download?id=${id}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            if(data.status === 200){
                window.location.href = data.data;
            }
            setTimeout(() => {
                window.location.href = '/complete'
            }, 3000);
        });
    }
  });

  return <div className="text-white">Downloading</div>;
};

export default Download;
