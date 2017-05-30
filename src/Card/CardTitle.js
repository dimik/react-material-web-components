import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class CardTitle extends PureComponent {
  static displayName = 'CardTitle'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    large: PropTypes.bool,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'h1',
  }

  render() {
    const {
      children,
      className,
      large,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-card__title': true,
      'mdc-card__title--large': large,
    }, className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default CardTitle
