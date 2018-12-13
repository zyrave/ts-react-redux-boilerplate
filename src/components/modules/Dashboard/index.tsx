import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboard.scss';
import Layout from '../Layout';

const Dashboard = () => (
  <Layout>
    <div className="content-wrapper mt-5">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p>DASHBOARD!!!!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Dashboard;
