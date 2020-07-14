import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Navigation = (props) => {
  const [active, setActive] = useState([useLocation().pathname]);

  useEffect(() => {}, [active]);
  return (
    <div>
      <div className="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars"></i>
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="../../index3.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments"></i>
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <img
                      src="assets/img/user1-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 mr-3 img-circle"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <img
                      src="assets/img/user8-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <img
                      src="assets/img/user3-128x128.jpg"
                      alt="User Avatar"
                      className="img-size-50 img-circle mr-3"
                    />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning">
                          <i className="fas fa-star"></i>
                        </span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted">
                        <i className="far fa-clock mr-1"></i> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Messages
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell"></i>
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">
                  15 Notifications
                </span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                  <span className="float-right text-muted text-sm">
                    12 hours
                  </span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">
                  See All Notifications
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                href="#"
                role="button"
              >
                <i className="fas fa-th-large"></i>
              </a>
            </li>
          </ul>
        </nav>

        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <a href="../../index3.html" className="brand-link">
            <img
              src="assets/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </a>

          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="assets/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Alexander Pierce
                </a>
              </div>
            </div>

            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw"></i>
                  </button>
                </div>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item has-treeview menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon far fa-envelope"></i>
                    <p>
                      Mailbox
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a
                        href="/list"
                        className={
                          active == "/list" ? "nav-link active" : "nav-link"
                        }
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>Mail List</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/compose"
                        className={
                          active == "/compose" ? "nav-link active" : "nav-link"
                        }
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>Compose</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/outbox"
                        className={
                          active == "/outbox" ? "nav-link active" : "nav-link"
                        }
                      >
                        <i className="far fa-circle nav-icon"></i>
                        <p>Outbox</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        {props.children}
        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.1.0-pre
          </div>
          <strong>
            Copyright &copy; 2014-2020{" "}
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>{" "}
          All rights reserved.
        </footer>

        <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>
    </div>
  );
};
