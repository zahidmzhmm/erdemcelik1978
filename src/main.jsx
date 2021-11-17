// export const mainURI = "https://crownedtutors.com";
import axios from "axios";
import {toast} from "react-toastify";

export const mainURI = "https://erdemcelik.fazgroupltd.com";
export const apiURI = mainURI + "/api/";
export const headers = {
    'x-api-key': 'admin12123'
};

export const PostAny = async (page, data) => {
    return await axios({
        headers,
        url: apiURI + page,
        method: "post",
        data: data
    }).then((response) => {
        return response.data
    });
}
export const GetAny = async (page) => {
    return await axios({
        headers,
        url: apiURI + page,
        method: "get"
    }).then((response) => {
        return response.data
    });
}

export function responseToast(message, type = "warning") {
    if (type == 'success') {
        toast.success(message, options);
    }
    if (type == 'danger') {
        toast.error(message, options);
    }
    if (type == 'warning') {
        toast.warning(message, options);
    }
}

const options = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}