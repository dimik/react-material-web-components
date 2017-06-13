import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {ListItemText} from '.'
import {MDCRipple} from '@material/ripple/dist/mdc.ripple'
import classNames from 'classnames'

class ListItem extends PureComponent {
  static displayName = 'ListItem'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    endDetail: PropTypes.element,
    primaryText: PropTypes.node,
    ripple: PropTypes.bool,
    secondaryText: PropTypes.node,
    startDetail: PropTypes.element,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'li',
  }

  componentDidMount() {
    if (this.props.ripple) {
      this.ripple_ = MDCRipple.attachTo(this.root_)
    }
  }

  componentWillUnmount() {
    if (this.ripple_) {
      this.ripple_.destroy()
      this.ripple_ = null
    }
    this.root_ = null
  }

  _renderStartDetail() {
    const {startDetail} = this.props
    if (React.isValidElement(startDetail)) {
      const cssClasses = classNames(
        'mdc-list-item__start-detail',
        startDetail.props.className
      )
      return React.cloneElement(
        startDetail,
        {className: cssClasses}
      )
    }
  }

  _renderEndDetail() {
    const {endDetail} = this.props
    if (React.isValidElement(endDetail)) {
      const cssClasses = classNames(
        'mdc-list-item__end-detail',
        endDetail.props.className
      )
      return React.cloneElement(
        endDetail,
        {className: cssClasses}
      )
    }
  }

  render() {
    const {
      children,
      className,
      endDetail,
      primaryText,
      ripple,
      secondaryText,
      startDetail,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-list-item', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses, ...(ripple && {ref: el => this.root_ = el})},
      this._renderStartDetail(),
      children || (<ListItemText secondary={secondaryText}>{primaryText}</ListItemText>),
      this._renderEndDetail()
    )
  }
}

export default ListItem
