import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {ListItem} from '../List'
import classNames from 'classnames'

class MenuItem extends PureComponent {
  static displayName = 'MenuItem'

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
      <ListItem
        {...otherProps}
      >
        {children}
      </ListItem>
    )
  }
}

export default MenuItem
