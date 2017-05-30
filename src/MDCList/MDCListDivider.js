import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCListDivider extends PureComponent {
  static displayName = 'MDCListDivider'

  static propTypes = {
    className: PropTypes.string,
    inset: PropTypes.bool,
    role: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    role: 'separator',
    tagName: 'li',
  }

  render() {
    const {
      className,
      inset,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-list-divider': true,
      'mdc-list-divider--inset': inset,
    }, className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses}
    )
  }
}

export default MDCListDivider