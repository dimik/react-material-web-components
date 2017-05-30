import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCRadio as MDCRadioClass} from '@material/radio'
import classNames from 'classnames'

class MDCRadio extends MDCComponent {
  static displayName = 'MDCRadio'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
  }

  attachTo(el) {
    return new MDCRadioClass(el)
  }
  
  render() {
    const {
      children,
      className,
      // disabled,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-radio': true,
      'mdc-radio--disabled': this.props.disabled,
    }, className)
    return (
      <div
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        <input
          {...otherProps}
          className="mdc-radio__native-control"
          type="radio"
        />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
    )
  }
}

export default MDCRadio