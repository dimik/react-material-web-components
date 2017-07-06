import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class LayoutGrid extends PureComponent {
  static displayName = 'LayoutGrid'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixedColumnWidth: PropTypes.bool,
  }

  render() {
    const {
      children,
      className,
      fixedColumnWidth,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-layout-grid': true,
      'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
    }, className)
    return (
      <div
        {...otherProps}
        className={cssClasses}
      >
        <div className="mdc-layout-grid__inner">
          {children}
        </div>
      </div>
    )
  }
}

export default LayoutGrid
