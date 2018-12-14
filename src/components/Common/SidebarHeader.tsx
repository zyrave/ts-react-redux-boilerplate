import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  tag?: any;
}

const AppSidebarHeader = ({ className, children, tag: Tag = 'div', ...attributes }: Props) => {
  const classes = classNames(className, 'sidebar-header');
  const header = children ? (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  ) : null;

  return header;
}

export default AppSidebarHeader;
