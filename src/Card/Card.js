import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Card extends PureComponent {
  static displayName = 'Card'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    themeDark: PropTypes.bool,
  }

  render() {
    const {
      children,
      className,
      themeDark,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-card': true,
      'mdc-card--theme-dark': themeDark,
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

export default Card
