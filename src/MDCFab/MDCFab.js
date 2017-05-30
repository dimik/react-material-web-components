import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDCIcon} from '../MDCIcon'
import {MDCRipple as MDCRippleClass} from '@material/ripple/dist/mdc.ripple'
import classNames from 'classnames'

class MDCFab extends PureComponent {
  static displayName = 'MDCFab'

  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    iconName: PropTypes.string,
    mini: PropTypes.bool,
    plain: PropTypes.bool,
    ripple: PropTypes.bool,
  }

  static defaultProps = {
    tagName: 'li',
  }

  componentDidMount() {
    if (this.props.ripple) {
      this.ripple_ = MDCRippleClass.attachTo(this.root_)
    }
  }

  componentWillUnmount() {
    if (this.ripple_) {
      // this.ripple_.deactivate()
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
        <MDCIcon
          className="mdc-fab__icon"
          name={iconName}
          tagName="span"
        >
          {children}
        </MDCIcon>
      </button>
    )
  }
}

export default MDCFab
