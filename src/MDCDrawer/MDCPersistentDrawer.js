import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCPersistentDrawer as MDCPersistentDrawerClass} from 'material-components-web'
import classNames from 'classnames'

class MDCPersistentDrawer extends MDCComponent {
  static displayName = 'MDCPersistentDrawer'

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

  componentDidUpdate(prevProps) {
    const {open} = this.props
    if (!prevProps.open && open) {
      this.component_.open = open
    }
  }

  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCPersistentDrawerClass(el)
  }

  _setupListeners() {
    this.listen(
      'MDCPersistentDrawer:open',
      this.openListener_ = e => this.props.onOpen()
    )
    this.listen(
      'MDCPersistentDrawer:close',
      this.closeListener_ = e => this.props.onClose()
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCPersistentDrawer:open',
      this.openListener_
    )
    this.unlisten(
      'MDCPersistentDrawer:close',
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
      'mdc-persistent-drawer',
      className
    )
    return (
      <aside
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        <nav className="mdc-persistent-drawer__drawer">
          {React.Children.map(children, child => React.cloneElement(
            child,
            {drawerType: 'persistent'}
          ))}
        </nav>
      </aside>
    )
  }
}

export default MDCPersistentDrawer
