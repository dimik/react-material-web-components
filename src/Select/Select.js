import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {List} from '../List'
import {MDCSelect} from '@material/select/dist/mdc.select'
import classNames from 'classnames'

class Select extends MDCComponent {
  static displayName = 'Select'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    value: PropTypes.string,
  }

  static defaultProps = {
    onChange: () => {},
    tabIndex: 0,
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }

  componentDidUpdate(prevProps) {
    this.component_.initialSyncWithDOM()
  }

  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCSelect(el)
  }

  _setupListeners() {
    this.listen(
      'MDCSelect:change',
      this.changeListener_ = e => this.props.onChange(
        e,
        this.component_.selectedIndex,
        this.component_.value
      )
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCSelect:change',
      this.changeListener_
    )
  }

  _renderLabel() {
    let {label} = this.props
    const {
      children,
      value,
    } = this.props
    if (value) {
      React.Children.forEach(children, child => {
        if (child.props.value === value || child.props.children === value) {
          label = child.props.children
        }
      })
    }
    return (
      <span className="mdc-select__selected-text">
        {label}
      </span>
    )
  }

  render() {
    const {
      children,
      className,
      disabled,
      label,
      multiple,
      onChange,
      tabIndex,
      value,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-select': true,
      'mdc-select--disabled': disabled,
    }, className)
    return (
      <div
        {...otherProps}
        aria-disabled={disabled}
        className={cssClasses}
        ref={el => this.root_ = el}
        role="listbox"
        tabIndex={disabled ? -1 : tabIndex}
      >
        {this._renderLabel()}
        <div className="mdc-simple-menu mdc-select__menu">
          <List className="mdc-simple-menu__items">
            {value ? React.Children.map(children, child => React.cloneElement(
              child,
              {selected: child.props.value === value || child.props.children === value}
            )) : children}
          </List>
        </div>
      </div>
    )
  }
}

export default Select
