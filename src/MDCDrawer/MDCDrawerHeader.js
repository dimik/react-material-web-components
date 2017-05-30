import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCDrawerHeader extends PureComponent {
  static displayName = 'MDCDrawerHeader'

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
      `mdc-${drawerType}-drawer__header`,
      className
    )
    return (
      <header
        {...otherProps}
        className={cssClasses}
      >
        <div className={`mdc-${drawerType}-drawer__header-content`}>
          {children}
        </div>
      </header>
    )
  }
}

export default MDCDrawerHeader