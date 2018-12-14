import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  tag?: any;
}

const AppSidebarForm = ({
  className,
  children,
  tag: Tag = 'div',
  ...attributes
}: Props) => {
  const classes = classNames(className, 'sidebar-form');
  const form = children ? (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  ) : null;

  return form;
};

export default AppSidebarForm;
