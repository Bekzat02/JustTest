import * as axios from "axios";

export const notesAPI = {
    sendData(object) {
        return axios.post("https://jsonplaceholder.typicode.com/posts",object)
    },
}




