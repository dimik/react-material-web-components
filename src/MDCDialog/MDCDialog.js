import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCDialog as MDCDialogClass} from '@material/dialog'
import classNames from 'classnames'

class MDCDialog extends MDCComponent {
  static displayName = 'MDCDialog'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  attachTo(el) {
    return new MDCDialogClass(el)
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

export default MDCDialog
