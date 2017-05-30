import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import MDCButton from '..'
import classNames from 'classnames'

class MDCDialogButton extends PureComponent {
  static displayName = 'MDCDialogButton'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dialogAction: PropTypes.oneOf(['accept', 'cancel']).isRequired,
  }

  render() {
    const {
      children,
      className,
      dialogAction,
      ...otherProps,
    } = this.props
    const cssClasses = classNames(
      'mdc-dialog__footer__button',
      `mdc-dialog__footer__button--${dialogAction}`,
      className
    )
    return (
      <MDCButton
        {...otherProps}
        className={cssClasses}
      >
        {children}
      </MDCButton>
    )
  }
}

export default MDCDialogButton