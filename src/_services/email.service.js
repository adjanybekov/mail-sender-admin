import { urls } from "../_constants/urls";
import axios from 'axios';

export const emailService = {
    getAllEmails
};

function getAllEmails() {
 

    const requestOptions = 
        {method:'GET',
        url:`${urls.emailUrl}/list`,
        }

    return axios(requestOptions);
}
