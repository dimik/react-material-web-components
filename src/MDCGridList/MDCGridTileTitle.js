import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCGridTileTitle extends PureComponent {
  static displayName = 'MDCGridTileTitle'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'span',
  }

  render() {
    const {
      children,
      className,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-grid-tile__title', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default MDCGridTileTitle