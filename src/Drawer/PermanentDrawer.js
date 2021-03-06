import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class PermanentDrawer extends PureComponent {
  static displayName = 'PermanentDrawer'

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
    const cssClasses = classNames(
      'mdc-permanent-drawer',
      className
    )
    return (
      <nav
        {...otherProps}
        className={cssClasses}
      >
        {React.Children.map(children, child => React.cloneElement(
          child,
          {drawerType: 'permanent'}
        ))}
      </nav>
    )
  }
}

export default PermanentDrawer
