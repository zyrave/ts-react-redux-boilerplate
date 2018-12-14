import React, { Component } from 'react';
import classNames from 'classnames';

import {
  asideMenuCssClasses,
  checkBreakpoint,
  validBreakpoints
} from './Shared';
import toggleClasses from './Shared/toggle-classes';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  display?: 'sm' | 'md' | 'lg' | '';
  fixed: boolean;
  isOpen?: boolean;
  offCanvas?: boolean;
  tag?: any; // () => void | string;
}

class AppAside extends Component<Props> {
  static defaultProps = {
    tag: 'aside',
    display: '',
    fixed: false,
    isOpen: false,
    offCanvas: true
  };

  componentDidMount = () => {
    this.isFixed(this.props.fixed);
    this.isOffCanvas(this.props.offCanvas);
    this.displayBreakpoint(this.props.display);
  }

  isFixed = (fixed: boolean) => {
    if (fixed) {
      document.body.classList.add('aside-menu-fixed');
    }
  }

  isOffCanvas = (offCanvas: boolean = false) => {
    if (offCanvas) {
      document.body.classList.add('aside-menu-off-canvas');
    }
  }

  displayBreakpoint(display: string = '') {
    if (display && checkBreakpoint(display, validBreakpoints)) {
      const cssClass = `aside-menu-${display}-show`;
      toggleClasses(cssClass, asideMenuCssClasses, true);
    }
  }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.display;
    delete attributes.fixed;
    delete attributes.offCanvas;
    delete attributes.isOpen;

    const classes = classNames(className, 'aside-menu');

    return (
      <Tag {...attributes} className={classes}>
        {children}
      </Tag>
    );
  }
}

export default AppAside;
