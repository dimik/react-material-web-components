import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Icon} from '..'
import classNames from 'classnames'

class Tab extends PureComponent {
  static displayName = 'Tab'

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.element,
    iconName: PropTypes.string,
    withIconAndText: PropTypes.bool,
  }

  _renderIcon() {
    const {
      icon,
      iconName,
    } = this.props
    if (React.isValidElement(icon) || iconName) {
      return (
        <Icon
          className="mdc-tab__icon"
          name={iconName}
        >
          {icon}
        </Icon>
      )
    }
  }

  _renderText() {
    const {
      children,
      withIconAndText,
    } = this.props
    return children && React.createElement(
      React.isValidElement(children) ? 'div' : 'span',
      {className: classNames({'mdc-tab__icon-text': withIconAndText})},
      children
    )
  }

  render() {
    const {
      active,
      children,
      className,
      icon,
      iconName,
      withIconAndText,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-tab': true,
      'mdc-tab--active': active,
      'mdc-tab--with-icon-and-text': withIconAndText,
    }, className)
    return (
      <a
        {...otherProps}
        className={cssClasses}
      >
        {this._renderIcon()}
        {this._renderText()}
      </a>
    )
  }
}

export default Tab
