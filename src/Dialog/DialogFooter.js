import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DialogFooter extends PureComponent {
  static displayName = 'DialogFooter'

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

export default DialogFooter
