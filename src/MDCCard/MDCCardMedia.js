import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCCardMedia extends PureComponent {
  static displayName = 'MDCCardMedia'

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
    const cssClasses = classNames('mdc-card__media', className)
    return (
      <section
        {...otherProps}
        className={cssClasses}
      >
        {children}
      </section>
    )
  }
}

export default MDCCardMedia