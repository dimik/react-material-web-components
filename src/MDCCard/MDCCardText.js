import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCCardText extends PureComponent {
  static displayName = 'MDCCardText'

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
    const cssClasses = classNames('mdc-card__supporting-text', className)
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

export default MDCCardText