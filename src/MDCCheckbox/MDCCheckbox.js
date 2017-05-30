import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCCheckbox as MDCCheckboxClass} from '@material/checkbox/dist/mdc.checkbox'
import classNames from 'classnames'

class MDCCheckbox extends MDCComponent {
  static displayName = 'MDCCheckbox'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    themeDark: PropTypes.bool,
  }

  static defaultProps = {
    onChange: () => {},
  }

  componentDidMount() {
    super.componentDidMount()

    this.input_.indeterminate = this.props.indeterminate
  }

  componentDidUpdate(prevProps) {
    const {indeterminate} = this.props
    if (prevProps.indeterminate !== indeterminate) {
      this.input_.indeterminate = indeterminate
    }
  }

  attachTo(el) {
    return new MDCCheckboxClass(el)
  }

  render() {
    const {
      children,
      className,
      // disabled,
      indeterminate,
      onChange,
      themeDark,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-checkbox': true,
      'mdc-checkbox--disabled': this.props.disabled,
      'mdc-checkbox--theme-dark': themeDark,
    }, className)
    return (
      <div
        className={cssClasses}
        ref={el => this.root_ = el}
      >
        <input
          {...otherProps}
          className="mdc-checkbox__native-control"
          onChange={e => onChange(e, this.input_.checked)}
          ref={el => this.input_ = el}
          type="checkbox"
        />
        <div className="mdc-checkbox__background">
          <svg
            className="mdc-checkbox__checkmark"
            viewBox="0 0 24 24"
          >
            <path
              className="mdc-checkbox__checkmark__path"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
              fill="none"
              stroke="white"
            />
          </svg>
          <div className="mdc-checkbox__mixedmark" />
        </div>
      </div>
    )
  }
}

export default MDCCheckbox
