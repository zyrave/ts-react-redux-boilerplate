import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  tag?: any;
}

const AppSidebarFooter = ({
  className,
  children,
  tag: Tag = 'div',
  ...attributes
}: Props) => {
  const classes = classNames(className, 'sidebar-footer');
  const footer = children ? (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  ) : null;

  return footer;
};

export default AppSidebarFooter;
