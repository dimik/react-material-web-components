import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Icon} from '..'
import {GridTileTitle, GridTileSupportText} from '.'
import classNames from 'classnames'

class GridTileSecondary extends PureComponent {
  static displayName = 'GridTileSecondary'

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
        <Icon
          className="mdc-grid-tile__icon"
          name={iconName}
        >
          {icon}
        </Icon>
      )
    }
  }

  _renderSupportText() {
    const {supportText} = this.props
    return supportText && (
      <GridTileSupportText>{supportText}</GridTileSupportText>
    )
  }

  _renderTitle() {
    const {title} = this.props
    return title && (
      <GridTileTitle>{title}</GridTileTitle>
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

export default GridTileSecondary
