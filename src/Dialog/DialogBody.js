import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DialogBody extends PureComponent {
  static displayName = 'DialogBody'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    scrollable: PropTypes.bool,
  }

  render() {
    const {
      children,
      className,
      scrollable,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-dialog__body': true,
      'mdc-dialog__body--scrollable': scrollable,
    }, className)
    return (
      <section
        {...otherProps}
        className={cssClasses}
      >
        {children}
      </section>
    )
  }
}

export default DialogBody
