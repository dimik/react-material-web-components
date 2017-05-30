import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCDialogHeader extends PureComponent {
  static displayName = 'MDCDialogHeader'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const {
      children,
      className,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-dialog__header', className)
    return (
      <header
        {...otherProps}
        className={cssClasses}
      >
        {React.isValidElement(children) ? children : (
          <h2 className="mdc-dialog__header__title">{children}</h2>
        )}
      </header>
    )
  }
}

export default MDCDialogHeader