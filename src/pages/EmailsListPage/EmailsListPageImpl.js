import React, { useEffect, useState } from "react";
import { emailService } from "../../_services/email.service";
import moment from "moment";
import "./index.css";
import { useHistory } from "react-router-dom";
import store from "../../_mobx_storage/RecieverStorage";

// import * as moment from 'moment';

export const EmailsListPageImpl = (props) => {
  useEffect(() => {
    getEmails();
  }, []);
  const [emails, setEmails] = useState([]);
  const history = useHistory();
  const getEmails = () => {
    emailService.getAllEmails().then((res) => {
      console.log(res.data);
      setEmails(res.data);
    });
  };

  function mailContact() {
    console.log("object");
    store.recievers = ["asdad"];
    history.push("/compose");
  }
  return (
    <div>
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>List Mail {props.store.filter}</h1>
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
                                <input type="checkbox" />
                              </td>
                              <td>{x.email}</td>
                              <td>
                                {x.status == 1 ? "Active" : "Deactivated"}
                              </td>
                              <td>{String(x.createdAt)}</td>
                              <td>
                                <button>Delete</button>
                                <button onClick={mailContact}>Mail</button>
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
                          <button>mail selected</button>
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
