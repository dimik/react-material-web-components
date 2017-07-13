import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../Icon'
import {MDCRipple} from '@material/ripple/dist/mdc.ripple'
import classNames from 'classnames'

class Fab extends PureComponent {
  static displayName = 'Fab'

  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    iconName: PropTypes.string,
    mini: PropTypes.bool,
    plain: PropTypes.bool,
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
      children,
      className,
      iconName,
      mini,
      plain,
      ripple,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-fab': true,
      'mdc-fab--mini': mini,
      'mdc-fab--plain': plain,
    }, className)
    return (
      <button
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        <Icon
          className="mdc-fab__icon"
          name={iconName}
          tagName="span"
        >
          {children}
        </Icon>
      </button>
    )
  }
}

export default Fab
