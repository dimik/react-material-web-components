import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDCIcon} from '..'
import {MDCGridTileTitle, MDCGridTileSupportText} from '.'
import classNames from 'classnames'

class MDCGridTileSecondary extends PureComponent {
  static displayName = 'MDCGridTileSecondary'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.element,
    iconName: PropTypes.string,
    supportText: PropTypes.string,
    title: PropTypes.string,
  }

  _renderIcon() {
    const {
      icon,
      iconName,
    } = this.props
    if (React.isValidElement(icon) || iconName) {
      return (
        <MDCIcon
          className="mdc-grid-tile__icon"
          name={iconName}
        >
          {icon}
        </MDCIcon>
      )
    }
  }

  _renderSupportText() {
    const {supportText} = this.props
    return supportText && (
      <MDCGridTileSupportText>{supportText}</MDCGridTileSupportText>
    )
  }

  _renderTitle() {
    const {title} = this.props
    return title && (
      <MDCGridTileTitle>{title}</MDCGridTileTitle>
    )
  }

  render() {
    const {
      children,
      className,
      icon,
      supportText,
      title,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-grid-tile__secondary', className)
    return (
      <span
        {...otherProps}
        className={cssClasses}
      >
        {children}
        {this._renderIcon()}
        {this._renderTitle()}
        {this._renderSupportText()}
      </span>
    )
  }
}

export default MDCGridTileSecondary