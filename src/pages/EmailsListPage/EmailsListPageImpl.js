import React, { useEffect, useState } from "react";
import { emailService } from "../../_services/email.service";
// import * as moment from 'moment';

export const EmailsListPageImpl = (props) => {
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
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>List Mail</h1>
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
                          <th>created_at</th>
                        </tr>
                      </thead>
                      <tbody>
                        {emails.map((x, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{x.email}</td>
                              <td>{x.createdAt}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>#</th>
                          <th>email</th>
                          <th>created_at</th>
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
