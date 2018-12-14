import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';

interface Props {
  children?: any;
  className?: string;
  navConfig: any;
  navFunc?: any;
  isOpen?: boolean;
  staticContext?: any;
  tag?: any;
}

class AppSidebarNav extends Component<Props> {
  static defaultProps = {
    tag: 'nav',
    navConfig: {
      items: [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'icon-speedometer',
          badge: { variant: 'info', text: 'NEW' }
        }
      ]
    },
    isOpen: false
  };

  handleClick = (e: any) => {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  };

  activeRoute = (routeName: string, props: any) => {
    return props.location.pathname.indexOf(routeName) > -1
      ? 'nav-item nav-dropdown open'
      : 'nav-item nav-dropdown';
  };

  hideMobile = () => {
    if (document.body.classList.contains('sidebar-show')) {
      document.body.classList.toggle('sidebar-show');
    }
  };

  // nav list
  navList = (items: any) => {
    return items.map((item: any, index: number) => this.navType(item, index));
  };

  // nav type
  navType = (item: any, idx: number) => {
    return item.title
      ? this.navTitle(item, idx)
      : item.divider
      ? this.navDivider(item, idx)
      : item.label
      ? this.navLabel(item, idx)
      : item.children
      ? this.navDropdown(item, idx)
      : this.navItem(item, idx);
  };

  // nav list section title
  navTitle = (title: any, key: number) => {
    const classes = classNames('nav-title', title.class);
    return (
      <li key={key} className={classes}>
        {this.navWrapper(title)}{' '}
      </li>
    );
  };

  // simple wrapper for nav-title item
  navWrapper = (item: any) => {
    return item.wrapper && item.wrapper.element
      ? React.createElement(
          item.wrapper.element,
          item.wrapper.attributes,
          item.name
        )
      : item.name;
  };

  // nav list divider
  navDivider = (divider: any, key: number) => {
    const classes = classNames('divider', divider.class);
    return <li key={key} className={classes} />;
  };

  // nav label with nav link
  navLabel = (item: any, key: number) => {
    const classes = {
      item: classNames('hidden-cn', item.class),
      link: classNames('nav-label', item.class ? item.class : ''),
      icon: classNames(
        'nav-icon',
        !item.icon ? 'fa fa-circle' : item.icon,
        item.label.variant ? `text-${item.label.variant}` : '',
        item.label.class ? item.label.class : ''
      )
    };
    return this.navLink(item, key, classes);
  };

  // nav dropdown
  navDropdown = (item: any, key: number) => {
    const classIcon = classNames('nav-icon', item.icon);
    return (
      <li key={key} className={this.activeRoute(item.url, this.props)}>
        <a
          className="nav-link nav-dropdown-toggle"
          href="#"
          onClick={this.handleClick}
        >
          <i className={classIcon} />
          {item.name}
          {this.navBadge(item.badge)}
        </a>
        <ul className="nav-dropdown-items">{this.navList(item.children)}</ul>
      </li>
    );
  };

  // nav item with nav link
  navItem = (item: any, key: number) => {
    const classes = {
      item: classNames(item.class),
      link: classNames(
        'nav-link',
        item.variant ? `nav-link-${item.variant}` : ''
      ),
      icon: classNames('nav-icon', item.icon)
    };
    return this.navLink(item, key, classes);
  };

  // nav link
  navLink = (item: any, key: number, classes: any) => {
    const url = item.url ? item.url : '';
    const itemIcon = <i className={classes.icon} />;
    const itemBadge = this.navBadge(item.badge);
    const attributes = item.attributes || {};
    return (
      <NavItem key={key} className={classes.item}>
        {attributes.disabled ? (
          <RsNavLink href={''} className={classes.link} {...attributes}>
            {itemIcon}
            {item.name}
            {itemBadge}
          </RsNavLink>
        ) : this.isExternal(url) ? (
          <RsNavLink
            href={url}
            className={classes.link}
            active={true}
            {...attributes}
          >
            {itemIcon}
            {item.name}
            {itemBadge}
          </RsNavLink>
        ) : (
          <NavLink
            to={url}
            className={classes.link}
            activeClassName="active"
            onClick={this.hideMobile}
            {...attributes}
          >
            {itemIcon}
            {item.name}
            {itemBadge}
          </NavLink>
        )}
      </NavItem>
    );
  };

  // badge addon to NavItem
  navBadge = (badge: any) => {
    if (badge) {
      const classes = classNames(badge.class);
      return (
        <Badge className={classes} color={badge.variant}>
          {badge.text}
        </Badge>
      );
    }
    return null;
  };

  isExternal = (url: string) => {
    const link = url ? url.substring(0, 4) : '';
    return link === 'http';
  };

  render() {
    const { className, children, navConfig, ...attributes } = this.props;

    delete attributes.isOpen;
    delete attributes.staticContext;
    delete attributes.tag;

    const navClasses = classNames(className, 'sidebar-nav');

    const isRtl =
      getComputedStyle(document.querySelector('html') as any).direction ===
      'rtl';

    // sidebar-nav root
    return (
      <PerfectScrollbar
        className={navClasses}
        {...attributes}
        option={{ suppressScrollX: !isRtl }}
      >
        <Nav>{children || this.navList(navConfig.items)}</Nav>
      </PerfectScrollbar>
    );
  }
}

export default AppSidebarNav;
