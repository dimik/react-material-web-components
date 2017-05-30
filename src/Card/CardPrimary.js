import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CardTitle from '.'
import CardSubtitle from '.'
import classNames from 'classnames'

class CardPrimary extends PureComponent {
  static displayName = 'CardPrimary'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    titleLarge: PropTypes.bool,
  }

  _renderTitle() {
    const {
      title,
      titleLarge,
    } = this.props
    return title && (
      <CardTitle large={titleLarge}>{title}</CardTitle>
    )
  }

  _renderSubtitle() {
    const {subtitle} = this.props
    return subtitle && (
      <CardSubtitle>{subtitle}</CardSubtitle>
    )
  }

  render() {
    const {
      children,
      className,
      subtitle,
      title,
      titleLarge,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-card__primary', className)
    return (
      <section
        {...otherProps}
        className={cssClasses}
      >
        {children}
        {this._renderTitle()}
        {this._renderSubtitle()}
      </section>
    )
  }
}

export default CardPrimary
