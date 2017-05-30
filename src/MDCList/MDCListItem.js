import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {MDCRipple as MDCRippleClass} from 'material-components-web'
import classNames from 'classnames'

class MDCListItem extends PureComponent {
  static displayName = 'MDCListItem'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    endDetail: PropTypes.element,
    ripple: PropTypes.bool,
    startDetail: PropTypes.element,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    tagName: 'li',
  }

  componentDidMount() {
    if (this.props.ripple) {
      this.ripple_ = MDCRippleClass.attachTo(this.root_)
    }
  }

  componentWillUnmount() {
    if (this.ripple_) {
      // this.ripple_.deactivate()
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
      startDetail,
      ripple,
      tagName,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-list-item', className)
    return React.createElement(
      tagName,
      {...otherProps, className: cssClasses, ...(ripple && {ref: el => this.root_ = el})},
      this._renderStartDetail(),
      children,
      this._renderEndDetail()
    )
  }
}

export default MDCListItem
