import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCDialogFooter extends PureComponent {
  static displayName = 'MDCDialogFooter'

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
    const cssClasses = classNames('mdc-dialog__footer', className)
    return (
      <footer
        {...otherProps}
        className={cssClasses}
      >
        {children}
      </footer>
    )
  }
}

export default MDCDialogFooter