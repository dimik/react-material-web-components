import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class ListItemText extends PureComponent {
  static displayName = 'ListItemText'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    secondary: PropTypes.node,
    tagName: PropTypes.oneOf(['span', 'div']),
  }

  static defaultProps = {
    tagName: 'span',
  }

  _renderSecondaryText() {
    const {secondary} = this.props
    if (secondary) {
      const cssClass = 'mdc-list-item__text__secondary'
      return React.isValidElement(secondary) ?
        React.cloneElement(
          secondary,
          {className: classNames(cssClass, secondary.props.className)}
        ) : (
          <span className={cssClass}>{secondary}</span>
        )
    }
  }

  render() {
    const {
      children,
      className,
      secondary,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-list-item__text', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children,
      this._renderSecondaryText()
    )
  }
}

export default ListItemText
