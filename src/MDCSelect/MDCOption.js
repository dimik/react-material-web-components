import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDCMenuItem} from '../MDCMenu'
import classNames from 'classnames'

class MDCOption extends PureComponent {
  static displayName = 'MDCOption'

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
      MDCMenuItem,
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

export default MDCOption