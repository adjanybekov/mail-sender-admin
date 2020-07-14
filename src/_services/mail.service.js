import { urls } from "../_constants/urls";
import axios from 'axios';

export const mailService = {
    createMail
};

function createMail({to,subject,text}) {
    const data= 
    {
        content: text,
        receivers: [
          to
        ],
        sender: "adjanybekov@gmail.com",
        subject: subject
      }

    const requestOptions = 
        {method:'POST',
        url:`${urls.mailUrl}/create`,
        data:data
        }

    return axios(requestOptions);
}
