import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCGridTilePrimary extends PureComponent {
  static displayName = 'MDCGridTilePrimary'

  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
  }

  render() {
    const {
      children,
      className,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-grid-tile__primary', className)
    const child = React.Children.only(children)
    return (
      <div
        {...otherProps}
        className={cssClasses}
      >
        {React.cloneElement(
          child,
          {className: classNames('mdc-grid-tile__primary-content', child.props.className)}
        )}
      </div>
    )
  }
}

export default MDCGridTilePrimary