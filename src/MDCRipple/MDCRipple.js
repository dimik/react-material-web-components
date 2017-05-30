import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCRipple as MDCRippleClass} from '@material/ripple/dist/mdc.ripple'
import classNames from 'classnames'

class MDCRipple extends MDCComponent {
  static displayName = 'MDCRipple'

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    primary: PropTypes.bool,
    unbounded: PropTypes.bool,
  }

  attachTo(el) {
    return new MDCRippleClass(el)
  }

  render() {
    const {
      accent,
      children,
      className,
      primary,
      unbounded,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-ripple-surface': true,
      'mdc-ripple-surface--accent': accent,
      'mdc-ripple-surface--primary': primary,
    }, className)
    return (
      <div
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
        {...(unbounded ? {'data-mdc-ripple-is-unbounded': true} : null)}
      >
        {children}
      </div>
    )
  }
}

export default MDCRipple
