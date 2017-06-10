import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Icon extends PureComponent {
  static displayName = 'Icon'

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    // Is used by IconToggle
    onRef: PropTypes.func,
    primary: PropTypes.bool,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'i',
  }

  render() {
    const {
      accent,
      children,
      className,
      name,
      onRef,
      primary,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-theme--accent': accent,
      'material-icons': name,
      'mdc-theme--primary': primary,
    }, className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses, ...(onRef && {ref: onRef})},
      name || children
    )
  }
}

export default Icon
