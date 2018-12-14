
import React, { Component } from 'react';
import classNames from 'classnames';

import { asideMenuCssClasses, validBreakpoints, checkBreakpoint } from './Shared/index';
import toggleClasses from './Shared/toggle-classes';

interface Props {
  children?: React.ReactElement<any>[];
  className: string;
  defaultOpen?: boolean;
  display?: string,
  mobile?: boolean;
  tag?: any,
  type?: string
};

class AppAsideToggler extends Component<Props> {
  static defaultProps = {
    defaultOpen: false,
    display: 'lg',
    mobile: false,
    tag: 'button',
    type: 'button'
  };
  componentDidMount() {
    this.toggle(this.props.defaultOpen)
  }

  toggle = (force?: boolean) => {
    const [display, mobile] = [this.props.display, this.props.mobile];
    let cssClass = asideMenuCssClasses[0];
    if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
      cssClass = `aside-menu-${display}-show`
    }
    toggleClasses(cssClass, asideMenuCssClasses, force)
  }

  asideToggle = (e: any) => {
    e.preventDefault();
    this.toggle()
  }

  render() {
    const { className, children, type, tag: Tag, ...attributes } = this.props;

    delete attributes.defaultOpen;
    delete attributes.display;
    delete attributes.mobile;

    const classes = classNames(className, 'navbar-toggler');

    return (
      <Tag
        type={type}
        className={classes}
        {...attributes}
        onClick={(e: any) => this.asideToggle(e)}
      >
        {children || <span className="navbar-toggler-icon" />}
      </Tag>
    );
  }
}

export default AppAsideToggler;
