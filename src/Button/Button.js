import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDCRipple} from '@material/ripple/dist/mdc.ripple'
import classNames from 'classnames'

class Button extends PureComponent {
  static displayName = 'Button'

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
    ripple: PropTypes.bool,
  }

  componentDidMount() {
    if (this.props.ripple) {
      this.ripple_ = MDCRipple.attachTo(this.root_)
    }
  }

  componentWillUnmount() {
    if (this.ripple_) {
      this.ripple_.destroy()
      this.ripple_ = null
    }
    this.root_ = null
  }

  render() {
    const {
      accent,
      children,
      className,
      compact,
      dense,
      primary,
      raised,
      ripple,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-button': true,
      'mdc-button--accent': accent,
      'mdc-button--compact': compact,
      'mdc-button--dense': dense,
      'mdc-button--primary': primary,
      'mdc-button--raised': raised,
    }, className)
    return (
      <button
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        {children}
      </button>
    )
  }
}

export default Button
