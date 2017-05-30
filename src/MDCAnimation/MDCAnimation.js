import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCAnimation extends PureComponent {
  static displayName = 'MDCAnimation'

  static propTypes = {
    animation: PropTypes.oneOf(['fastOut-slowIn', 'linearOut-slowIn', 'fastOut-linearIn']).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const {
      animation,
      children,
      className,
      ...otherProps,
    } = this.props
    const cssClasses = classNames(
      `mdc-animation-${animation.replace(/In|Out/g, s => `-${s.toLowerCase()}`)}`,
      className
    )
    return (
      <div
        {...otherProps}
        className={cssClasses}
      >
        {children}
      </div>
    )
  }
}

export default MDCAnimation
