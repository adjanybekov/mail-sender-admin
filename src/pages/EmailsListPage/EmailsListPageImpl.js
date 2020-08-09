import React, { useEffect, useState } from "react";
import { emailService } from "../../_services/email.service";
import moment from "moment";
import "./index.css";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../../index";
import { mailService } from "../../_services/mail.service";
// import * as moment from 'moment';

export const EmailsListPageImpl = (props) => {
  const [emails, setEmails] = useState([]);
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    getEmails();
  }, []);

  const history = useHistory();
  const store = React.useContext(StoreContext);
  const getEmails = () => {
    emailService.getAllEmails().then((res) => {
      let emails = res.data;
      let checkedmails = emails.map((obj) => {
        checked.push(false);
        return { ...obj, checked: false };
      });

      console.log(checkedmails, checked, "checked");
      setChecked(checked);
      setEmails(checkedmails);
    });
  };

  function mailContact(email) {
    console.log("object");
    store.addEmail(email);
    history.push("/compose");
  }

  function handleMailSelected() {
    // store.emails = receivers;
    emails
      .filter((x, index) => checked[index] == true)
      .map((r) => {
        console.log(r.email);
        store.addEmail(r.email);
      });

    history.push("/compose");
  }

  function handleCheck(e, email, index) {
    // e.preventDefault();
    console.log(
      emails,
      emails[emails.indexOf(emails.find((x) => x.email == email))].checked
    );
    emails[
      emails.indexOf(emails.find((x) => x.email == email))
    ].checked = !emails[emails.indexOf(emails.find((x) => x.email == email))]
      .checked;

    console.log(
      checked,
      emails,
      emails[emails.indexOf(emails.find((x) => x.email == email))].checked
    );

    let checkedd = [...checked];
    checkedd[index] = !checkedd[index];
    setChecked(checkedd);

    setEmails(emails);
  }

  return (
    <div>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>List Mail {store.filter}</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">List Mail</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">
                      DataTable with minimal features & hover style
                    </h3>
                  </div>

                  <div class="card-body">
                    <table
                      id="example2"
                      class="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>email</th>
                          <th>status</th>
                          <th>created_at</th>
                          <th>actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {emails.map((x, index) => {
                          return (
                            <tr>
                              <td>
                                <input
                                  key={index}
                                  type="checkbox"
                                  name={x.email}
                                  checked={checked[index]}
                                  onChange={(e) => {
                                    handleCheck(e, x.email, index);
                                  }}
                                />
                              </td>
                              <td>{x.email}</td>
                              <td>
                                {x.status == 1 ? "Active" : "Deactivated"}
                              </td>
                              <td>{String(x.createdAt)}</td>
                              <td>
                                <button>Delete</button>
                                <button onClick={() => mailContact(x.email)}>
                                  Mail
                                </button>
                                <button>Deactivate</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          {/* <th>#</th>
                          <th>email</th>
                          <th>created_at</th> */}
                          <button onClick={handleMailSelected}>
                            mail selected
                          </button>
                          <button>delete selected</button>
                          <div class="dropdown">
                            <button>...</button>
                            <div class="dropdown-content">
                              <a href="#">Export</a>
                              <a href="#">Import</a>
                            </div>
                          </div>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
