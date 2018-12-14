import React, { Component } from 'react';
import classNames from 'classnames';

interface Props {
  children?: any;
  className?: string;
  tag?: any;
  type?: any;
}

class AppSidebarMinimizer extends Component<Props> {
  componentDidMount = () => {
    const isMinimized = document.body.classList.contains('sidebar-minimized');
    this.togglePs(!isMinimized);
  };

  sidebarMinimize = () => {
    const isMinimized = document.body.classList.toggle('sidebar-minimized');
    this.togglePs(!isMinimized);
  };

  togglePs = (toggle: boolean) => {
    const sidebar = document.querySelector('.sidebar-nav');
    if (sidebar) {
      if (toggle) {
        sidebar.classList.add('ps', 'ps-container', 'ps--active-y');
      } else {
        sidebar.classList.remove('ps', 'ps-container', 'ps--active-y');
      }
    }
  };

  brandMinimize = () => {
    document.body.classList.toggle('brand-minimized');
  };

  handleClick = () => {
    this.sidebarMinimize();
    this.brandMinimize();
  };

  render() {
    const { className, children, tag: Tag = 'div', type, ...attributes } = this.props;

    const classes = classNames(className, 'sidebar-minimizer', 'mt-auto');

    return (
      <Tag
        className={classes}
        type={type}
        {...attributes}
        onClick={() => this.handleClick()}
      >
        {children}
      </Tag>
    );
  }
}

export default AppSidebarMinimizer;
