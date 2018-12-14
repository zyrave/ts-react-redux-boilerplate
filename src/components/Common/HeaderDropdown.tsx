import React, { Component } from 'react';
import { Dropdown } from 'reactstrap';

interface Props {
  children: JSX.Element | JSX.Element[];
  direction: 'up' | 'down' | 'left' | 'right';
}

interface State {
  dropdownOpen: boolean
}

class AppHeaderDropdown extends Component<Props, State> {
  static defaultProps = {
    direction: 'down'
  };

  state: State = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const { children, ...attributes } = this.props;
    return (
      <Dropdown
        nav={true}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        {...attributes}
      >
        {children}
      </Dropdown>
    );
  }
}

export default AppHeaderDropdown;
