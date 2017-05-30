import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCGridList as MDCGridListClass} from 'material-components-web'
import classNames from 'classnames'

class MDCGridList extends MDCComponent {
  static displayName = 'MDCGridList'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    headerCaption: PropTypes.bool,
    tileAspectRatio: PropTypes.oneOf(['1x1', '16x9', '2x3', '3x2', '4x3', '3x4']),
    tileGutter1: PropTypes.bool,
    twolineCaption: PropTypes.bool,
    withIconAlignEnd: PropTypes.bool,
    withIconAlignStart: PropTypes.bool,
  }

  attachTo(el) {
    return new MDCGridListClass(el)
  }

  render() {
    const {
      children,
      className,
      headerCaption,
      tileAspectRatio,
      tileGutter1,
      twolineCaption,
      withIconAlignEnd,
      withIconAlignStart,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-grid-list': true,
      'mdc-grid-list--header-caption': headerCaption,
      [`mdc-grid-list--tile-aspect-${tileAspectRatio}`]: tileAspectRatio,
      'mdc-grid-list--tile-gutter-1': tileGutter1,
      'mdc-grid-list--twoline-caption': twolineCaption,
      'mdc-grid-list--with-icon-align-end': withIconAlignEnd,
      'mdc-grid-list--with-icon-align-start': withIconAlignStart,
    }, className)
    return (
      <div
        {...otherProps}
        className={cssClasses}
      >
        <ul className="mdc-grid-list__tiles">
          {children}
        </ul>
      </div>
    )
  }
}

export default MDCGridList
