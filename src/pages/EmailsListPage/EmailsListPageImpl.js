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
  let [checkAll, setCheckAll] = useState(false);
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

  function deactivateEmail(emailId) {
    // confirm("Are you sure to deactivate this email?");
    var deactivate = window.confirm("Are you sure to deactivate this email?");
    if (deactivate) {
      emailService.deactivateEmailById(emailId).then((res) => {
        console.log(res);
        window.location.reload();
      });
    }
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
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>List Mail </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">List Mail</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      DataTable with minimal features & hover style
                    </h3>
                  </div>

                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>
                            <input
                              type="checkbox"
                              checked={checkAll}
                              name="checkall"
                              onChange={(e) => {
                                let checkedd = [...checked];

                                setCheckAll(!checkAll);
                                checkAll = !checkAll;
                                checkedd.map((elem, index) =>
                                  checkAll
                                    ? (checkedd[index] = true)
                                    : (checkedd[index] = false)
                                );
                                setChecked(checkedd);

                                // Arrays.fill(checked, true);
                                console.log(checkedd);
                              }}
                            />
                          </th>
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
                                <button onClick={() => mailContact(x.email)}>
                                  Mail
                                </button>
                                <button
                                  onClick={() => {
                                    deactivateEmail(x.id);
                                  }}
                                >
                                  Deactivate
                                </button>
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
                          <div className="dropdown">
                            <button>...</button>
                            <div className="dropdown-content">
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
