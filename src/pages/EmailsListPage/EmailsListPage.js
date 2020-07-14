import React, { useEffect, useState } from "react";
import { emailService } from "../../_services/email.service";
import { Navigation } from "../../_components";
import { EmailsListPageImpl } from "./";
// import * as moment from 'moment';

export const EmailsListPage = (props) => {
  useEffect(() => {
    getEmails();
  }, []);
  const [emails, setEmails] = useState([]);

  const getEmails = () => {
    emailService.getAllEmails().then((res) => {
      console.log(res.data);
      setEmails(res.data);
    });
  };
  return (
    <div>
      <Navigation>
        <EmailsListPageImpl />
      </Navigation>
    </div>
  );
};
