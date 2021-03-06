import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCLinearProgress} from '@material/linear-progress/dist/mdc.linearProgress'
import classNames from 'classnames'

class LinearProgress extends MDCComponent {
  static displayName = 'LinearProgress'

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    indeterminate: PropTypes.bool,
    reversed: PropTypes.bool,
  }

  attachTo(el) {
    return new MDCLinearProgress(el)
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

export default LinearProgress
