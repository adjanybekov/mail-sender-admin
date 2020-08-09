import React, { useEffect } from "react";
import axios from "axios";
import { emailService } from "../../_services/email.service";

export const UnsubscribePage = (props) => {
  useEffect(() => {
    unsubscribe();
  }, []);

  const unsubscribe = () => {
    emailService.unsubscribe(props.match.params.email, props.match.params.hash);
  };
  return (
    <div>
      You are successfully unsubscribed
      <p>your email - {props.match.params.email}</p>
      <p>your hash is - {props.match.params.hash}</p>
    </div>
  );
};
