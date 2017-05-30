import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Button from '..'
import classNames from 'classnames'

class DialogButton extends PureComponent {
  static displayName = 'DialogButton'

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
      <Button
        {...otherProps}
        className={cssClasses}
      >
        {children}
      </Button>
    )
  }
}

export default DialogButton
