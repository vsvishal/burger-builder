import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-d92c7.firebaseio.com/",
});

export default instance;
