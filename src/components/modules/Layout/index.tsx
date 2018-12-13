import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: any) => (
  <div className="wrapper">
    <nav className="main-header navbar navbar-expand fixed-top bg-white navbar-light border-bottom">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#">
            <i className="fa fa-bars" />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/users" className="nav-link">
            Users
          </Link>
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
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </form>
    </nav>

    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src="https://adminlte.io/themes/dev/AdminLTE/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="https://adminlte.io/themes/dev/AdminLTE/dist/img/user2-160x160.jpg"
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

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview">
              <Link to="/" className="nav-link">
                <i className="nav-icon fa fa-dashboard" />
                <p>
                  Dashboard
                  <i className="right fa fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../../index.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../index2.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../index3.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Dashboard v3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link active">
                <i className="nav-icon fa fa-users" />
                <p>
                  Users
                  <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fa fa-pie-chart" />
                <p>
                  Charts
                  <i className="right fa fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../charts/chartjs.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>ChartJS</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/flot.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Flot</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../charts/inline.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Inline</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fa fa-tree" />
                <p>
                  UI Elements
                  <i className="fa fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../UI/general.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>General</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/icons.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Icons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/buttons.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Buttons</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../UI/sliders.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Sliders</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fa fa-edit" />
                <p>
                  Forms
                  <i className="fa fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../forms/general.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>General Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/advanced.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Advanced Elements</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../forms/editors.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Editors</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview menu-open">
              <a href="#" className="nav-link">
                <i className="nav-icon fa fa-table" />
                <p>
                  Tables
                  <i className="fa fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../tables/simple.html" className="nav-link active">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Simple Tables</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../tables/data.html" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>Data Tables</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    {children}
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.0.0-alpha
      </div>
      <strong>
        Copyright &copy; 2014-2018 <a href="http://adminlte.io">AdminLTE.io</a>.
      </strong>{' '}
      All rights reserved.
    </footer>

    <aside className="control-sidebar control-sidebar-dark" />
  </div>
);

export default Layout;
