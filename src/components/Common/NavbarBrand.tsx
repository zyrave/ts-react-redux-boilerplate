import React, { Component } from 'react';
import classNames from 'classnames';

interface Props {
  children?: React.ReactElement<any>[];
  className?: string;
  brand?: any;
  full: any;
  minimized: any;
  tag: any;
}

class AppNavbarBrand extends Component<Props> {
  static defaultProps = {
    tag: 'a'
  };

  imgSrc = (brand: any) => {
    return brand.src ? brand.src : '';
  };

  imgWidth = (brand: any) => {
    return brand.width ? brand.width : 'auto';
  };

  imgHeight = (brand: any) => {
    return brand.height ? brand.height : 'auto';
  };

  imgAlt = (brand: any) => {
    return brand.alt ? brand.alt : '';
  };

  navbarBrandImg = (props: Props, classBrand: string, key: string | number) => {
    return (
      <img
        src={this.imgSrc(props)}
        width={this.imgWidth(props)}
        height={this.imgHeight(props)}
        alt={this.imgAlt(props)}
        className={classBrand}
        key={key.toString()}
      />
    );
  };

  render() {
    const {
      className,
      children,
      tag: Tag,
      brand,
      full,
      minimized,
      ...attributes
    } = this.props;
    const classes = classNames(className, 'navbar-brand');

    const img = [];
    if (brand) {
      const props = brand;
      const classBrand = 'navbar-brand';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (full) {
      const props = full;
      const classBrand = 'navbar-brand-full';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }
    if (minimized) {
      const props = minimized;
      const classBrand = 'navbar-brand-minimized';
      img.push(this.navbarBrandImg(props, classBrand, img.length + 1));
    }

    return (
      <Tag {...attributes} className={classes}>
        {children || img}
      </Tag>
    );
  }
}

export default AppNavbarBrand;
