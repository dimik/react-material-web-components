import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCLinearProgress as MDCLinearProgressClass} from 'material-components-web'
import classNames from 'classnames'

class MDCLinearProgress extends MDCComponent {
  static displayName = 'MDCLinearProgress'

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    indeterminate: PropTypes.bool,
    reversed: PropTypes.bool,
  }

  attachTo(el) {
    return new MDCLinearProgressClass(el)
  }

  render() {
    const {
      accent,
      children,
      className,
      indeterminate,
      reversed,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-linear-progress': true,
      'mdc-linear-progress--accent': accent,
      'mdc-linear-progress--indeterminate': indeterminate,
      'mdc-linear-progress--reversed': reversed,
    }, className)
    return (
      <div
        {...otherProps}
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        {children}
      </div>
    )
  }
}

export default MDCLinearProgress
