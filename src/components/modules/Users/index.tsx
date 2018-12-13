import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../Layout';

interface IProps {
  fetchRequest(): void;
  data: any;
}

interface IState {}

class Index extends Component<IProps, IState> {
  state = {};

  componentDidMount() {
    this.props.fetchRequest();
  }

  render() {
    const { data } = this.props;

    return (
      <Layout>
        <div className="content-wrapper mt-5">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Users</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Users</li>
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
                      <h3 className="card-title">Users</h3>

                      <div className="card-tools">
                        <div
                          className="input-group input-group-sm"
                          style={{ width: '150px' }}
                        >
                          <input
                            type="text"
                            name="table_search"
                            className="form-control float-right"
                            placeholder="Search"
                          />

                          <div className="input-group-append">
                            <button type="submit" className="btn btn-default">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-body table-responsive p-0">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Reason</th>
                            <th>Progress</th>
                          </tr>
                          {data.map((user: any) => (
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>
                                <span className="badge bg-primary">
                                  Approved
                                </span>
                              </td>
                              <td>
                                This user was approved by <b>Anil</b>
                              </td>
                              <td className="align-middle">
                                <div className="progress progress-xs">
                                  <div
                                    className="progress-bar bg-primary"
                                    style={{ width: '100%' }}
                                  />
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="card-footer clearfix">
                        <ul className="pagination pagination-sm m-0 float-right">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              &laquo;
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              &raquo;
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;
