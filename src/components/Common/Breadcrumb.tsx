import React, { Component } from 'react';
import { Route, Link, matchPath } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import classNames from 'classnames';

let routes: any;

const getPaths = (pathname: string) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const findRouteName = (url: any) => {
  const aroute = routes.find((route: { path: string; exact: boolean }) =>
    matchPath(url, { path: route.path, exact: route.exact })
  );
  return aroute && aroute.name ? aroute.name : null;
};

interface BreadcrumbItemType {
  match: {
    url: string;
    isExact: boolean;
  };
}

const BreadcrumbsItem = ({ match }: BreadcrumbItemType) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact ? (
      <BreadcrumbItem active={true}>{routeName}</BreadcrumbItem>
    ) : (
      <BreadcrumbItem>
        <Link to={match.url || ''}>{routeName}</Link>
      </BreadcrumbItem>
    );
  }
  return null;
};

const Breadcrumbs = (args: any) => {
  const paths = getPaths(args.location.pathname);
  const items = paths.map((path, i) => (
    <Route key={i.toString()} path={path} component={BreadcrumbsItem} />
  ));
  return <Breadcrumb>{items}</Breadcrumb>;
};

interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  appRoutes: any;
  tag?: any;
}

interface State {
  routes: any;
}

class AppBreadcrumb extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { routes: props.appRoutes };
    routes = this.state.routes;
  }

  static defaultProps = {
    tag: 'div',
    className: '',
    appRoutes: [{ path: '/', exact: true, name: 'Home', component: null }]
  };

  render() {
    const { className, tag: Tag, ...attributes } = this.props;

    delete attributes.children;
    delete attributes.appRoutes;

    const classes = classNames(className);

    return (
      <Tag className={classes}>
        <Route path="/:path" component={Breadcrumbs} {...attributes} />
      </Tag>
    );
  }
}

export default AppBreadcrumb;
