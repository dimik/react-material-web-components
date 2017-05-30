import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MenuItem} from '../Menu'
import classNames from 'classnames'

class Option extends PureComponent {
  static displayName = 'Option'

  static propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
    value: PropTypes.string,
  }

  render() {
    const {
      children,
      selected,
      value,
      ...otherProps,
    } = this.props

    return React.createElement(
      MenuItem,
      {
        ...otherProps,
        role: 'option',
        ...(selected && {'aria-selected': true}),
        ...(value && {id: value}),
      },
      children
    )
  }
}

export default Option
