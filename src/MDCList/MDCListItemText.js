import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCListItemText extends PureComponent {
  static displayName = 'MDCListItemText'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    secondaryText: PropTypes.node,
    tagName: PropTypes.oneOf(['span', 'div']),
  }

  static defaultProps = {
    tagName: 'span',
  }

  _renderSecondaryText() {
    const {secondaryText} = this.props
    if (secondaryText) {
      const cssClass = 'mdc-list-item__text_secondaryText'
      return React.isValidElement(secondaryText) ?
        React.cloneElement(
          secondaryText,
          {className: classNames(cssClass, secondaryText.props.className)}
        ) : (
          <span className={cssClass}>{secondaryText}</span>
        )
    }
  }

  render() {
    const {
      children,
      className,
      secondaryText,
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

export default MDCListItemText