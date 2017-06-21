import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCTabBar} from '@material/tabs/dist/mdc.tabs'
import classNames from 'classnames'

class Tabs extends MDCComponent {
  static displayName = 'Tabs'

  static propTypes = {
    accent: PropTypes.bool,
    activeTab: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    iconTabs: PropTypes.bool,
    iconWithTextTabs: PropTypes.bool,
    onChange: PropTypes.func,
    primary: PropTypes.bool,
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
    return new MDCTabBar(el)
  }

  _setupListeners() {
    this.listen(
      'MDCTabBar:change',
      this.changeListener_ = e => this.props.onChange(
        e,
        e.detail,
      )
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCTabBar:change',
      this.changeListener_
    )
  }

  render() {
    const {
      accent,
      activeTab,
      children,
      className,
      iconTabs,
      iconWithTextTabs,
      onChange,
      primary,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-tab-bar': true,
      'mdc-tab-bar--icon-tabs': iconTabs,
      'mdc-tab-bar--icons-with-text': iconWithTextTabs,
      'mdc-tab-bar--indicator-accent': accent,
      'mdc-tab-bar--indicator-primary': primary,
    }, className)
    return (
      <nav
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        {activeTab >= 0 ?
          React.Children.map(children, (child, index) =>
            React.cloneElement(
              child,
              {active: index === activeTab}
            )
          ) : children
        }
        <span className="mdc-tab-bar__indicator" />
      </nav>
    )
  }
}

export default Tabs
