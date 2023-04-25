import axios from "axios";

axios.defaults.baseURL = 'https://8000-tuckerfaulk-uppbeatapi-g57bhmlnw7i.ws-eu95.gitpod.io/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
