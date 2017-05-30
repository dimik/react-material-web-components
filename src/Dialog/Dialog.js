import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCDialog} from '@material/dialog/dist/mdc.dialog'
import classNames from 'classnames'

class Dialog extends MDCComponent {
  static displayName = 'Dialog'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  attachTo(el) {
    return new MDCDialog(el)
  }

  render() {
    const {
      children,
      className,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-dialog', className)
    return (
      <aside
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
        role="alertdialog"
      >
        <div className="mdc-dialog__surface">
          {children}
        </div>
        <div className="mdc-dialog__backdrop" />
      </aside>
    )
  }
}

export default Dialog
