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
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    open: PropTypes.bool,
    openFrom: PropTypes.shape({
      horizontal: PropTypes.oneOf(['left', 'right']),
      vertical: PropTypes.oneOf(['top', 'bottom']),
    }),
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    tabIndex: PropTypes.number,
  }

  static defaultProps = {
    onCancel: () => {},
    onChange: () => {},
    tabIndex: -1,
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.component_.open) {
      this.component_.open = nextProps.open
    }
  }

  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCSimpleMenu(el)
  }

  _setupListeners() {
    this.listen(
      'MDCSimpleMenu:selected',
      this.changeListener_ = e => this.props.onChange(
        e,
        e.detail,
      )
    )
    this.listen(
      'MDCSimpleMenu:cancel',
      this.cancelListener_ = () => this.props.onCancel()
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCSimpleMenu:selected',
      this.changeListener_
    )
    this.unlisten(
      'MDCSimpleMenu:cancel',
      this.cancelListener_
    )
  }

  render() {
    const {
      children,
      className,
      open,
      openFrom,
      onCancel,
      onChange,
      style,
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
        style={{transform: 'scale(0)', ...style}}
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
