import React, { Component } from 'react';
import classNames from 'classnames';

import {
  sidebarCssClasses,
  validBreakpoints,
  checkBreakpoint
} from './Shared/index';
import toggleClasses from './Shared/toggle-classes';

interface Props {
  children?: React.ReactElement<any>[];
  className: string;
  display: any;
  mobile: boolean;
  tag: any;
  type: string;
}

class AppSidebarToggler extends Component<Props> {
  static defaultProps = {
    display: 'lg',
    mobile: false,
    tag: 'button',
    type: 'button'
  };

  sidebarToggle = (e: any) => {
    e.preventDefault();
    this.toggle();
  };

  toggle = (force?: boolean) => {
    const [display, mobile] = [this.props.display, this.props.mobile];
    let cssClass = sidebarCssClasses[0];
    if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
      cssClass = `sidebar-${display}-show`;
    }
    toggleClasses(cssClass, sidebarCssClasses, force);
  };

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.mobile;
    delete attributes.display;

    const classes = classNames(className, 'navbar-toggler');

    return (
      <Tag
        type="button"
        className={classes}
        {...attributes}
        onClick={(e: any) => this.sidebarToggle(e)}
        data-sidebar-toggler={true}
      >
        {children || <span className="navbar-toggler-icon" />}
      </Tag>
    );
  }
}

export default AppSidebarToggler;
