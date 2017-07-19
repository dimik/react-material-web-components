import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class DialogHeader extends PureComponent {
  static displayName = 'DialogHeader'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.node,
  }

  _renderTitle() {
    const {title} = this.props
    if (title) {
      if (React.isValidElement(title)) {
        const cssClasses = classNames(
          'mdc-dialog__header__title',
          title.props.className
        )
        return React.cloneElement(title, {
          className: cssClasses,
        })
      }
      return (
        <h2 className="mdc-dialog__header__title">{title}</h2>
      )
    }
  }

  render() {
    const {
      children,
      className,
      title,
      ...otherProps,
    } = this.props
    const cssClasses = classNames('mdc-dialog__header', className)
    return (
      <header
        {...otherProps}
        className={cssClasses}
      >
        {this._renderTitle()}
        {children}
      </header>
    )
  }
}

export default DialogHeader
