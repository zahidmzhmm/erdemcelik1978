import React, {useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {GetAny, responseToast} from "../../main";

const Delete = () => {
    const {id, page} = useParams();
    const history = useHistory();
    const [update, setUpdate] = useState(true);


    React.useEffect(() => {
        if (update === true) {
            GetAny("deleteTask?id=" + id).then((response) => {
                // console.log(response)
                responseToast(response.message, response.type);
                setTimeout(() => {
                    history.push("/" + page)
                }, 3000)
                setUpdate(false)
            })
        }
    })

    return (
        <div className="text-light">
            Please wait...
        </div>
    );
};

export default Delete;