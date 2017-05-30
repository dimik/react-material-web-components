import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class MDCSwitch extends PureComponent {
  static displayName = 'MDCSwitch'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => {},
  }
  
  render() {
    const {
      children,
      className,
      onChange,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-switch': true,
      'mdc-switch--disabled': this.props.disabled,
    }, className)
    return (
      <div
        className={cssClasses}
      >
        <input
          {...otherProps}
          className="mdc-switch__native-control"
          onChange={e => onChange(e, this.input_.checked)}
          ref={el => this.input_ = el}
          type="checkbox"
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>
    )
  }
}

export default MDCSwitch
