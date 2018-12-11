import React, { Component } from 'react';

interface IProps {
  fetchRequest(): void;
  data: any;
}

interface IState {}

class index extends Component<IProps, IState> {
  state = {};

  componentDidMount() {
    this.props.fetchRequest();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="list-group">
        {data.map((user: any) => (
          <a
            href="#"
            className="list-group-item list-group-item-action flex-column align-items-start"
            key={user.id}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{user.name}</h5>
              <small>{user.email}</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>{user.username}</small>
          </a>
        ))}
      </div>
    );
  }
}

export default index;
