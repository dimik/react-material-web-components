import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCElevation extends PureComponent {
  static displayName = 'MDCElevation'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tagName: PropTypes.string,
    transition: PropTypes.bool,
    z: PropTypes.oneOf(Array.from(new Array(25)).map((_, i) => i)),
  }

  static defaultProps = {
    tagName: 'div',
    z: 0,
  }

  render() {
    const {
      children,
      className,
      tagName,
      transition,
      z,
      ...otherProps,
    } = this.props
    const cssClasses = classNames(
      `mdc-elevation--z${z}`,
      {'mdc-elevation-transition': transition},
      className
    )
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default MDCElevation
