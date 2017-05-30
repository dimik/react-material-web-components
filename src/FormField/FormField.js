import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCFormField} from '@material/form-field/dist/mdc.formField'
import classNames from 'classnames'

class FormField extends MDCComponent {
  static displayName = 'FormField'

  static propTypes = {
    alignEnd: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  attachTo(el) {
    return new MDCFormField(el)
  }

  render() {
    const {
      alignEnd,
      children,
      className,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-form-field': true,
      'mdc-form-field--align-end': alignEnd,
    }, className)
    return (
      <div
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        {children}
      </div>
    )
  }
}

export default FormField
