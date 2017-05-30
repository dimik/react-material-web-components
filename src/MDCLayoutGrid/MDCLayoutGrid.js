import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCLayoutGrid extends PureComponent {
  static displayName = 'MDCLayoutGrid'

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
    const cssClasses = classNames('mdc-layout-grid', className)
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

export default MDCLayoutGrid