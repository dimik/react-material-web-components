import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class TextfieldHelptext extends PureComponent {
  static displayName = 'TextfieldHelptext'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    persistent: PropTypes.bool,
    tagName: PropTypes.string,
    validationMsg: PropTypes.bool,
  }

  static defaultProps = {
    tagName: 'p',
  }

  render() {
    const {
      children,
      className,
      persistent,
      tagName,
      validationMsg,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-textfield-helptext': true,
      'mdc-textfield-helptext--persistent': persistent,
      'mdc-textfield-helptext--validation-msg': validationMsg,
    }, className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default TextfieldHelptext
