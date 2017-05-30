import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCToolbarRow extends PureComponent {
  static displayName = 'MDCToolbarRow'

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
      'mdc-toolbar__row',
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

export default MDCToolbarRow