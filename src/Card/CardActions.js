import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class CardActions extends PureComponent {
  static displayName = 'CardActions'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool,
  }

  render() {
    const {
      children,
      className,
      vertical,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-card__actions': true,
      'mdc-card__actions--vertical': vertical,
    }, className)
    return (
      <section
        {...otherProps}
        className={cssClasses}
      >
        {React.Children.map(children, child => React.cloneElement(
          child,
          {className: classNames('mdc-card__action', child.props.className)}
        ))}
      </section>
    )
  }
}

export default CardActions
