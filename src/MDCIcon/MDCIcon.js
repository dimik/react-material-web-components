import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCIcon extends PureComponent {
  static displayName = 'MDCIcon'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    // Is used by MDCIconToggle
    onRef: PropTypes.func,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'i',
  }

  render() {
    const {
      children,
      className,
      name,
      onRef,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'material-icons': name,
    }, className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses, ...(onRef && {ref: onRef})},
      name || children
    )
  }
}

export default MDCIcon