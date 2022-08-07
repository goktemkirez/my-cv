import axios from "axios";

const authAxios = axios.create({
    baseURL: "https://goktemkirez-api.herokuapp.com/api",
});

export default authAxios;