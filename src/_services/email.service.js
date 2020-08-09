import { urls } from "../_constants/urls";
import axios from "axios";

export const emailService = {
  getAllEmails,
  unsubscribe,
};

function getAllEmails() {
  const requestOptions = { method: "GET", url: `${urls.emailUrl}/list` };

  return axios(requestOptions);
}

function unsubscribe(email, hash) {
  const requestOptions = {
    method: "GET",
    url: `${urls.emailUrl}/unsubscribe/${email}/${hash}`,
  };

  return axios(requestOptions);
}
