import { urls } from "../_constants/urls";
import axios from "axios";

export const emailService = {
  getAllEmails,
  deactivateEmailById,
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

function deactivateEmailById(id) {
  const data = {
    status: 0,
  };

  const requestOptions = {
    method: "POST",
    url: `${urls.emailUrl}/update/${id}`,
    data: data,
  };

  return axios(requestOptions);
}
