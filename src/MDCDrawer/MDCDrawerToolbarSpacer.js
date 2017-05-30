import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCDrawerToolbarSpacer extends PureComponent {
  static displayName = 'MDCDrawerToolbarSpacer'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    drawerType: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
  }

  render() {
    const {
      children,
      className,
      drawerType,
      ...otherProps,
    } = this.props
    const cssClasses = classNames(
      `mdc-${drawerType}-drawer__toolbar-spacer`,
      className
    )
    return (
      <div
        {...otherProps}
        className={cssClasses}
      >
        {children}
      </div>
    )
  }
}

export default MDCDrawerToolbarSpacer
