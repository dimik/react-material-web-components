import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCTextfieldLabel extends PureComponent {
  static displayName = 'MDCTextfieldLabel'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    floatAbove: PropTypes.bool,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'label',
  }

  render() {
    const {
      children,
      className,
      floatAbove,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-textfield__label': true,
      'mdc-textfield__label--float-above': floatAbove,
    }, className)
    return children && React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default MDCTextfieldLabel