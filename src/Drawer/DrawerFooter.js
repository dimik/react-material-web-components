import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DrawerFooter extends PureComponent {
  static displayName = 'DrawerFooter'

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
      `mdc-${drawerType}-drawer__footer`,
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

export default DrawerFooter
