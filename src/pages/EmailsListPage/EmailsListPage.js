import React, { useEffect, useState } from "react";
import { emailService } from "../../_services/email.service";
import { Navigation } from "../../_components";
import { EmailsListPageImpl } from "./";

// import * as moment from 'moment';

export const EmailsListPage = (props) => {
  return (
    <div>
      <Navigation>
        <EmailsListPageImpl />
      </Navigation>
    </div>
  );
};
