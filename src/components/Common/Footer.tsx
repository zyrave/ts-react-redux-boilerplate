import React, { Component } from "react";
import classNames from "classnames";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  fixed?: boolean;
  tag?: any;
}

class AppFooter extends Component<Props> {
  static defaultProps = {
    tag: "footer",
    fixed: false
  };

  componentDidMount = () => {
    this.isFixed(this.props.fixed);
  };

  isFixed = (fixed: boolean = false) => {
    if (fixed) {
      document.body.classList.add("footer-fixed");
    }
  };

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.fixed;

    const classes = classNames(className, "app-footer");

    return (
      <Tag className={classes} {...attributes}>
        {children}
      </Tag>
    );
  }
}

export default AppFooter;
