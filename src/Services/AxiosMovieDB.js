import axios from "axios";
import { baseURL } from "../Config/environment";

const AxiosMovieDB = axios.create({
  baseURL: baseURL,
  params: {
    api_key: "1b620d15eb26140c77d72978d76309d6",
  },
});

AxiosMovieDB.interceptors.response.use(undefined, (err) => {
  if (err?.response?.data?.status_message) {
    console.log(
      err?.response?.data?.status_message,
      "<<< message dari interceptors"
    );
  } else {
    throw err;
  }
});

export default AxiosMovieDB;
