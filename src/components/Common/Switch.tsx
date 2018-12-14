import React, { Component } from 'react';
import classNames from 'classnames';

interface Props {
  color?: string;
  label?: boolean;
  outline?: boolean | string | '' | 'alt';
  size?: '' | 'lg' | 'sm';
  checked?: boolean;
  defaultChecked?: boolean;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  form?: any;
  name?: string;
  required?: boolean;
  onChange?(e: any): void;
  type?: 'checkbox' | 'radio';
  variant?: '' | '3d' | 'pill';
  className: string;
  dataOn?: string;
  dataOff?: string;
}

class AppSwitch extends Component<Props> {
  static defaultProps = {
    color: 'secondary',
    label: false,
    outline: false,
    size: '',
    checked: false,
    defaultChecked: false,
    disabled: false,
    required: false,
    type: 'checkbox',
    variant: '',
    dataOn: 'On',
    dataOff: 'Off'
  };

  state = {
    checked: this.props.defaultChecked || this.props.checked,
    selected: []
  };

  onChange = (e: any) => {
    const target = e.target;
    this.setState({
      checked: target.checked
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  componentDidUpdate = (prevProps: any) => {
    if (this.props.checked !== prevProps.checked) {
      this.setState({
        checked: this.props.checked
      });
    }
  };

  render() {
    const {
      className,
      disabled,
      color,
      name,
      label,
      outline,
      size,
      required,
      type,
      value,
      dataOn,
      dataOff,
      variant,
      ...attributes
    } = this.props;

    delete attributes.checked;
    delete attributes.defaultChecked;
    delete attributes.onChange;

    const classes = classNames(
      className,
      'switch',
      label ? 'switch-label' : false,
      size ? `switch-${size}` : false,
      variant ? `switch-${variant}` : false,
      `switch${outline ? '-outline' : ''}-${color}${
        outline === 'alt' ? '-alt' : ''
      }`,
      'form-check-label'
    );

    const inputClasses = classNames('switch-input', 'form-check-input');

    const sliderClasses = classNames('switch-slider');

    return (
      <label className={classes}>
        <input
          type={type}
          className={inputClasses}
          onChange={this.onChange}
          checked={this.state.checked}
          name={name}
          required={required}
          disabled={disabled}
          value={value}
          {...attributes}
        />
        <span
          className={sliderClasses}
          data-checked={dataOn}
          data-unchecked={dataOff}
        />
      </label>
    );
  }
}

export default AppSwitch;
