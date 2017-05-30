import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const dozen = Array.from(new Array(12)).map((_, i) => i + 1)

class LayoutGridCell extends PureComponent {
  static displayName = 'LayoutGridCell'

  static propTypes = {
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),
    children: PropTypes.node,
    className: PropTypes.string,
    desktop: PropTypes.oneOf(dozen),
    order: PropTypes.oneOf(dozen),
    phone: PropTypes.oneOf(dozen),
    span: PropTypes.oneOf(dozen),
    tablet: PropTypes.oneOf(dozen),
  }

  render() {
    const {
      align,
      children,
      className,
      desktop,
      order,
      phone,
      span,
      tablet,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-layout-grid__cell': true,
      [`mdc-layout-grid__cell--align-${align}`]: align,
      [`mdc-layout-grid__cell--span-${span}`]: span,
      [`mdc-layout-grid__cell--span-${desktop}-desktop`]: desktop,
      [`mdc-layout-grid__cell--span-${phone}-phone`]: phone,
      [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet,
      [`mdc-layout-grid__cell--order-${order}`]: order,
    }, className)
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

export default LayoutGridCell
