import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCList} from '../MDCList'
import {MDCSimpleMenu as MDCSimpleMenuClass} from '@material/menu/dist/mdc.menu'
import classNames from 'classnames'

class MDCSimpleMenu extends MDCComponent {
  static displayName = 'MDCSimpleMenu'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    open: PropTypes.bool,
    openFrom: PropTypes.shape({
      horizontal: PropTypes.oneOf(['left', 'right']),
      vertical: PropTypes.oneOf(['top', 'bottom']),
    }),
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    tabIndex: -1,
  }

  attachTo(el) {
    return new MDCSimpleMenuClass(el)
  }

  render() {
    const {
      children,
      className,
      open,
      openFrom,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-simple-menu': true,
      'mdc-simple-menu--open': open,
      [`mdc-simple-menu--open-from-${openFrom.vertical}-${openFrom.horizontal}`]: openFrom,
    }, className)
    return (
      <div
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        <MDCList
          aria-hidden="true"
          className="mdc-simple-menu__items"
          role="menu"
        >
          {children}
        </MDCList>
      </div>
    )
  }
}

export default MDCSimpleMenu
