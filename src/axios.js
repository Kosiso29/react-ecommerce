import axios from "axios";

const instance = axios.create({
    baseURL: "https://solarsales.pythonanywhere.com"
});

export default instance;