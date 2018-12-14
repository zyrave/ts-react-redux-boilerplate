import React, { Component } from 'react';
import classNames from 'classnames';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  fixed: boolean;
  tag?: any;
}

class AppHeader extends Component<Props> {
  static defaultProps = {
    tag: 'header',
    fixed: false
  };

  componentDidMount() {
    this.isFixed(this.props.fixed);
  }

  isFixed = (fixed: boolean) => {
    if (fixed) {
      document.body.classList.add('header-fixed');
    }
  };

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.fixed;

    const classes = classNames(className, 'app-header', 'navbar');

    return (
      <Tag className={classes} {...attributes}>
        {children}
      </Tag>
    );
  }
}

export default AppHeader;
