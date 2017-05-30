import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class ToolbarSection extends PureComponent {
  static displayName = 'ToolbarSection'

  static propTypes = {
    alignEnd: PropTypes.bool,
    alignStart: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    shrinkToFit: PropTypes.bool,
  }

  render() {
    const {
      alignEnd,
      alignStart,
      children,
      className,
      shrinkToFit,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-toolbar__section': true,
      'mdc-toolbar__section--align-start': alignStart,
      'mdc-toolbar__section--align-end': alignEnd,
      'mdc-toolbar__section--shrink-to-fit': shrinkToFit,
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

export default ToolbarSection
