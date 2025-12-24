import axios from "axios";
import { getAccessToken } from "./token";
import { clearUserData } from "./auth";

const authedRequest = (
  url,
  method = "post",
  data = {}
) => {
  const token = getAccessToken();

  if (!token) {
    clearUserData();
    return Promise.reject(new Error("No access token"));
  }

  return axios({
    url,
    method,
    data
  })
    .then(response => {
      return response; 
    })
    .catch(error => {
      console.error("authedRequest error: ", error);

      clearUserData();

      return Promise.reject(error); 
    });
};

export default authedRequest;
