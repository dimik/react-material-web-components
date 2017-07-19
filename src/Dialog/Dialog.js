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
    onAccept: PropTypes.func,
    onCancel: PropTypes.func,
    open: PropTypes.bool,
  }

  static defaultProps = {
    onAccept: () => {},
    onCancel: () => {},
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.component_.open) {
      this.component_[nextProps.open ? 'show' : 'close']()
    }
  }

  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCDialog(el)
  }

  _setupListeners() {
    this.listen(
      'MDCDialog:accept',
      this.acceptListener_ = () => this.props.onAccept()
    )
    this.listen(
      'MDCDialog:cancel',
      this.cancelListener_ = () => this.props.onCancel()
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCDialog:accept',
      this.acceptListener_
    )
    this.unlisten(
      'MDCDialog:cancel',
      this.cancelListener_
    )
  }

  render() {
    const {
      children,
      className,
      onAccept,
      onCancel,
      open,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-dialog': true,
      'mdc-dialog--open': open,
    }, className)
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
