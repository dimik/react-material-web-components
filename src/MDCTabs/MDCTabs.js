import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCTabs as MDCTabsClass} from 'material-components-web'
import classNames from 'classnames'

class MDCTabs extends MDCComponent {
  static displayName = 'MDCTabs'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconTabs: PropTypes.bool,
    iconWithTextTabs: PropTypes.bool,
  }

  attachTo(el) {
    return new MDCTabsClass(el)
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

export default MDCTabs
