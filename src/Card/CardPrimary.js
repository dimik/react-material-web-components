import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {CardTitle} from '.'
import {CardSubtitle} from '.'
import classNames from 'classnames'

class CardPrimary extends PureComponent {
  static displayName = 'CardPrimary'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    subtitleText: PropTypes.node,
    titleLarge: PropTypes.bool,
    titleText: PropTypes.node,
  }

  _renderTitle() {
    const {
      titleText,
      titleLarge,
    } = this.props
    return titleText && (
      <CardTitle large={titleLarge}>{titleText}</CardTitle>
    )
  }

  _renderSubtitle() {
    const {subtitleText} = this.props
    return subtitleText && (
      <CardSubtitle>{subtitleText}</CardSubtitle>
    )
  }

  render() {
    const {
      children,
      className,
      subtitleText,
      titleLarge,
      titleText,
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
