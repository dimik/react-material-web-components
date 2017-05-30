import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCCardMediaItem extends PureComponent {
  static displayName = 'MDCCardMediaItem'

  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    size: PropTypes.oneOf(['1.5x', '2x', '3x']),
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'img',
  }

  render() {
    const {
      children,
      className,
      size,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-card__media-item': true,
      [`mdc-card__media-item--${(size || '').replace('.', 'dot')}`]: size,
    }, className)
    return React.isValidElement(children) ?
      React.cloneElement(
        children,
        {className: classNames(cssClasses, children.props.className)}
      ) : React.createElement(tagName, {...otherProps, className: cssClasses})
  }
}

export default MDCCardMediaItem