import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCGridTile extends PureComponent {
  static displayName = 'MDCGridTile'

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
    const cssClasses = classNames('mdc-grid-tile', className)
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

export default MDCGridTile