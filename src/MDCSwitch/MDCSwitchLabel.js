import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCSwitchLabel extends PureComponent {
  static displayName = 'MDCSwitchLabel'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'label',
  }

  render() {
    const {
      children,
      className,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-switch-label', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default MDCSwitchLabel