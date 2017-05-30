import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCSnackbar as MDCSnackbarClass} from '@material/snackbar'
import classNames from 'classnames'

class MDCSnackbar extends MDCComponent {
  static displayName = 'MDCSnackbar'

  static propTypes = {
    actionButton: PropTypes.node,
    actionHandler: PropTypes.func,
    actionOnBottom: PropTypes.bool,
    actionText: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    message: PropTypes.string,
    multiline: PropTypes.bool,
    timeout: PropTypes.number,
  }

  static defaultProps = {
    actionButton: (
      <button
        className="mdc-button mdc-snackbar__action-button mdc-button--accent"
        type="button"
      />
    ),
  }

  componentDidMount(...args) {
    super.componentDidMount(...args)

    if (this.props.message) {
      const {
        actionButton,
        children,
        className,
        ...data,
      } = this.props
      this.component_.show(data)
    }
  }

  componentDidUpdate() {
    if (this.props.message) {
      const {
        actionButton,
        children,
        className,
        ...data,
      } = this.props
      this.component_.show(data)
    }
  }

  attachTo(el) {
    return new MDCSnackbarClass(el)
  }

  _renderActionButton() {
    const {actionButton} = this.props
    return React.isValidElement(actionButton) && (
      <div className="mdc-snackbar__action-wrapper">
        {React.cloneElement(actionButton, {
          className: classNames(
            'mdc-snackbar__action-button',
            actionButton.props.className
          ),
        })}
      </div>
    )
  }

  render() {
    const {
      actionButton,
      actionHandler,
      actionOnBottom,
      actionText,
      children,
      className,
      message,
      timeout,
      multiline,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-snackbar', className)
    return (
      <div
        {...otherProps}
        aria-atomic="true"
        aria-hidden="true"
        aria-live="assertive"
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        {children}
        <div className="mdc-snackbar__text"></div>
        {this._renderActionButton()}
      </div>
    )
  }
}

export default MDCSnackbar
