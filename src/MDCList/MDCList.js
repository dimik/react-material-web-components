import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCList extends PureComponent {
  static displayName = 'MDCList'

  static propTypes = {
    avatarList: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    dense: PropTypes.bool,
    tagName: PropTypes.string,
    twoLine: PropTypes.bool,
  }

  static defaultProps = {
    tagName: 'ul',
  }

  render() {
    const {
      avatarList,
      children,
      className,
      dense,
      tagName,
      twoLine,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-list': true,
      'mdc-list--avatar-list': avatarList,
      'mdc-list--dense': dense,
      'mdc-list--two-line': twoLine,
    }, className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      children
    )
  }
}

export default MDCList
