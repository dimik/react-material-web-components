import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCTemporaryDrawer} from '@material/drawer/dist/mdc.drawer'
import classNames from 'classnames'

class TemporaryDrawer extends MDCComponent {
  static displayName = 'TemporaryDrawer'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    open: PropTypes.bool,
  }

  static defaultProps = {
    onClose: () => {},
    onOpen: () => {},
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }

  componentDidUpdate() {
    const {open} = this.props
    if (this.component_.open !== open) {
      this.component_.open = open
    }
  }

  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCTemporaryDrawer(el)
  }

  _setupListeners() {
    this.listen(
      'MDCTemporaryDrawer:open',
      this.openListener_ = e => this.props.onOpen()
    )
    this.listen(
      'MDCTemporaryDrawer:close',
      this.closeListener_ = e => this.props.onClose()
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCTemporarytDrawer:open',
      this.openListener_
    )
    this.unlisten(
      'MDCTemporarytDrawer:close',
      this.closeListener_
    )
  }

  render() {
    const {
      children,
      className,
      onClose,
      onOpen,
      open,
      ...otherProps,
    } = this.props
    const cssClasses = classNames(
      'mdc-temporary-drawer',
      className
    )
    return (
      <aside
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        <nav className="mdc-temporary-drawer__drawer">
          {React.Children.map(children, child => React.cloneElement(
            child,
            {drawerType: 'temporary'}
          ))}
        </nav>
      </aside>
    )
  }
}

export default TemporaryDrawer
