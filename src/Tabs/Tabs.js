import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCTabs} from '@material/tabs/dist/mdc.tabs'
import classNames from 'classnames'

class Tabs extends MDCComponent {
  static displayName = 'Tabs'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconTabs: PropTypes.bool,
    iconWithTextTabs: PropTypes.bool,
  }

  attachTo(el) {
    return new MDCTabs(el)
  }

  render() {
    const {
      children,
      className,
      iconTabs,
      iconWithTextTabs,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-tab-bar': true,
      'mdc-tab-bar--icon-tabs': iconTabs,
      'mdc-tab-bar--icons-with-text': iconWithTextTabs,
    }, className)
    return (
      <nav
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        {children}
        <span className="mdc-tab-bar__indicator" />
      </nav>
    )
  }
}

export default Tabs
