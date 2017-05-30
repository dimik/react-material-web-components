import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCCard extends PureComponent {
  static displayName = 'MDCCard'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    horizontalBlock: PropTypes.node,
    themeDark: PropTypes.bool,
  }

  _renderHorizontalBlock() {
    const {horizontalBlock} = this.props
    return horizontalBlock && (
      <div className="mdc-card__horizontal-block">
        {horizontalBlock}
      </div>
    )
  }

  render() {
    const {
      children,
      className,
      horizontalBlock,
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
        {this._renderHorizontalBlock()}
        {children}
      </div>
    )
  }
}

export default MDCCard