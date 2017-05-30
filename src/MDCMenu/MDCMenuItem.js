import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDCListItem} from '../MDCList'
import classNames from 'classnames'

class MDCMenuItem extends PureComponent {
  static displayName = 'MDCMenuItem'

  static propTypes = {
    children: PropTypes.node,
    role: PropTypes.string,
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    role: 'menuitem',
    tabIndex: 0,
  }

  render() {
    const {
      children,
      ...otherProps,
    } = this.props
    return (
      <MDCListItem
        {...otherProps}
      >
        {children}
      </MDCListItem>
    )
  }
}

export default MDCMenuItem