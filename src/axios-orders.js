import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-37277.firebaseio.com/",
});

export default instance;
