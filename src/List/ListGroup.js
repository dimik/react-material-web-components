import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {ListGroupSubheader} from '.'
import classNames from 'classnames'

class ListGroup extends PureComponent {
  static displayName = 'ListGroup'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    subheader: PropTypes.node,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'div',
  }

  render() {
    const {
      children,
      className,
      subheader,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-list-group', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses},
      subheader && (<ListGroupSubheader>{subheader}</ListGroupSubheader>),
      children
    )
  }
}

export default ListGroup
