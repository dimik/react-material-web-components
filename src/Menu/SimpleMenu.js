import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {List} from '../List'
import {MDCSimpleMenu} from '@material/menu/dist/mdc.menu'
import classNames from 'classnames'

class SimpleMenu extends MDCComponent {
  static displayName = 'SimpleMenu'

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.component_.open) {
      this.component_.open = nextProps.open
    }
  }

  attachTo(el) {
    return new MDCSimpleMenu(el)
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
      [`mdc-simple-menu--open-from-${openFrom && openFrom.vertical}-${openFrom && openFrom.horizontal}`]: openFrom,
    }, className)
    return (
      <div
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        <List
          aria-hidden="true"
          className="mdc-simple-menu__items"
          role="menu"
        >
          {children}
        </List>
      </div>
    )
  }
}

export default SimpleMenu
