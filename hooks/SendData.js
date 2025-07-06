import axios from "axios"

function SendData(params) {
    axios.post(`https://rbback.onrender.com/create/user`, params)

}

export default SendData