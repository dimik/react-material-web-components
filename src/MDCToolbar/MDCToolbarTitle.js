import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCToolbarTitle extends PureComponent {
  static displayName = 'MDCToolbarTitle'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tagName: PropTypes.oneOf(['span', 'div']),
  }

  static defaultProps = {
    tagName: 'span',
  }

  render() {
    const {
      children,
      className,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-toolbar__title', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default MDCToolbarTitle