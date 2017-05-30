import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCToolbar as MDCToolbarClass} from '@material/toolbar'
import classNames from 'classnames'

class MDCToolbar extends MDCComponent {
  static displayName = 'MDCToolbar'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    flexible: PropTypes.bool,
    flexibleDefaultBehavior: PropTypes.bool,
    flexibleMax: PropTypes.bool,
    flexibleMin: PropTypes.bool,
    onChange: PropTypes.func,
    waterfall: PropTypes.bool,
  }

  static defaultProps = {
    onChange: () => {},
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }
  
  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCToolbarClass(el)
  }

  _setupListeners() {
    this.listen(
      'MDCToolbar:change',
      this.changeListener_ = e => this.props.onChange(e, e.detail)
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCToolbar:change',
      this.changeListener_
    )
  }

  render() {
    const {
      children,
      className,
      fixed,
      flexible,
      flexibleDefaultBehavior,
      flexibleMax,
      flexibleMin,
      onChange,
      waterfall,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-toolbar': true,
      'mdc-toolbar--fixed': fixed,
      'mdc-toolbar--flexible': flexible,
      'mdc-toolbar--flexible-default-behavior': flexibleDefaultBehavior,
      'mdc-toolbar--flexible-space-maximized': flexibleMax,
      'mdc-toolbar--flexible-space-minimized': flexibleMin,
      'mdc-toolbar--waterfall': waterfall,
    }, className)
    return (
      <header
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        {children}
      </header>
    )
  }
}

export default MDCToolbar