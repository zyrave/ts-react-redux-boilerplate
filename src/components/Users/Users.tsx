import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

interface Props {
  fetchRequest(): void;
  data: any;
}

class Index extends Component<Props> {
  state = {
    dropdownOpen: new Array(19).fill(false) // tslint:disable-line
  };

  componentDidMount() {
    this.props.fetchRequest();
  }

  toggle = (i: number) => {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      dropdownOpen: newArray
    });
  };

  render() {
    const { data } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" />
                <strong>Users</strong>
              </CardHeader>
              <CardBody>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 pull-right">
                  <div className="form-group form-group-sm react-bs-table-search-form input-group input-group-sm">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      value=""
                      onChange={() => null}
                      style={{ height: '35px' }}
                    />
                    <button
                      className="btn btn-default btn-secondary react-bs-table-search-clear-btn ml-2"
                      type="button"
                    >
                      Clear
                    </button>
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
                            <span className="badge bg-primary">Approved</span>
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
                </div>
                <nav className="" aria-label="pagination">
                  <ul className="pagination pull-right">
                    <li className="page-item">
                      <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">Prev</span>
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>
                    <li className="page-item active">
                      <button className="page-link">1</button>
                    </li>
                    <li className="page-item page-item">
                      <button className="page-link">2</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">3</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">4</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link" aria-label="Next">
                        <span aria-hidden="true">Next</span>
                        <span className="sr-only">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
                {/* <div className="card-footer clearfix">
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
                </div> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      // <div className="content-wrapper mt-5">
      //   <section className="content-header">
      //     <div className="container-fluid">
      //       <div className="row mb-2">
      //         <div className="col-sm-6">
      //           <h1>Users</h1>
      //         </div>
      //       </div>
      //     </div>
      //   </section>

      //   <section className="content">
      //     <div className="container-fluid">
      //       <div className="row">
      //         <div className="col-12">
      //           <div className="card">
      //             <div className="card-header">
      //               <h3 className="card-title">Users</h3>

      //               <div className="card-tools">
      //                 <div
      //                   className="input-group input-group-sm"
      //                   style={{ width: '150px' }}
      //                 >
      //                   <input
      //                     type="text"
      //                     name="table_search"
      //                     className="form-control float-right"
      //                     placeholder="Search"
      //                   />

      //                   <div className="input-group-append">
      //                     <button type="submit" className="btn btn-default">
      //                       <i className="fa fa-search" />
      //                     </button>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>

      //             <div className="card-body table-responsive p-0">
      //               <table className="table table-hover">
      //                 <tbody>
      //                   <tr>
      //                     <th>ID</th>
      //                     <th>User</th>
      //                     <th>Email</th>
      //                     <th>Status</th>
      //                     <th>Reason</th>
      //                     <th>Progress</th>
      //                   </tr>
      //                   {data.map((user: any) => (
      //                     <tr key={user.id}>
      //                       <td>{user.id}</td>
      //                       <td>{user.name}</td>
      //                       <td>{user.email}</td>
      //                       <td>
      //                         <span className="badge bg-primary">Approved</span>
      //                       </td>
      //                       <td>
      //                         This user was approved by <b>Anil</b>
      //                       </td>
      //                       <td className="align-middle">
      //                         <div className="progress progress-xs">
      //                           <div
      //                             className="progress-bar bg-primary"
      //                             style={{ width: '100%' }}
      //                           />
      //                         </div>
      //                       </td>
      //                     </tr>
      //                   ))}
      //                 </tbody>
      //               </table>

      //               <div className="card-footer clearfix">
      //                 <ul className="pagination pagination-sm m-0 float-right">
      //                   <li className="page-item">
      //                     <a className="page-link" href="#">
      //                       &laquo;
      //                     </a>
      //                   </li>
      //                   <li className="page-item">
      //                     <a className="page-link" href="#">
      //                       1
      //                     </a>
      //                   </li>
      //                   <li className="page-item">
      //                     <a className="page-link" href="#">
      //                       2
      //                     </a>
      //                   </li>
      //                   <li className="page-item">
      //                     <a className="page-link" href="#">
      //                       3
      //                     </a>
      //                   </li>
      //                   <li className="page-item">
      //                     <a className="page-link" href="#">
      //                       &raquo;
      //                     </a>
      //                   </li>
      //                 </ul>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </section>
      // </div>
    );
  }
}

export default Index;
