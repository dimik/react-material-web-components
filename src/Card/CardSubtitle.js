import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class CardSubtitle extends PureComponent {
  static displayName = 'CardSubtitle'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'h2',
  }

  render() {
    const {
      children,
      className,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-card__subtitle', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default CardSubtitle
