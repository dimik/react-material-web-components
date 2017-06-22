import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCToolbar} from '@material/toolbar/dist/mdc.toolbar'
import classNames from 'classnames'

class Toolbar extends MDCComponent {
  static displayName = 'Toolbar'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fixed: PropTypes.bool,
    fixedAdjustElementSelector: PropTypes.string,
    fixedAtLastRow: PropTypes.bool,
    fixedLastRowOnly: PropTypes.bool,
    flexible: PropTypes.bool,
    flexibleDefaultBehavior: PropTypes.bool,
    flexibleMax: PropTypes.bool,
    flexibleMin: PropTypes.bool,
    onChange: PropTypes.func,
    waterfall: PropTypes.bool,
  }

  static defaultProps = {
    onChange: () => {},
    fixedAdjustElementSelector: '.mdc-toolbar-fixed-adjust',
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }

  componentDidUpdate() {
    this.component_.destroy()
    this.component_ = this.attachTo(this.root_)
    const fixedAdjustElement = document.querySelector(this.props.fixedAdjustElementSelector)
    if (fixedAdjustElement) {
      this.component_.fixedAdjustElement = fixedAdjustElement
    }
  }

  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCToolbar(el)
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
      fixedAtLastRow,
      fixedLastRowOnly,
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
      'mdc-toolbar--fixed-at-last-row': fixedAtLastRow,
      'mdc-toolbar--fixed-lastrow-only': fixedLastRowOnly,
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

export default Toolbar
