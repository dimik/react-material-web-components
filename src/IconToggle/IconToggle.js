import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {Icon} from '../Icon'
import {MDCIconToggle} from '@material/icon-toggle/dist/mdc.iconToggle'
import classNames from 'classnames'

class IconToggle extends MDCComponent {
  static displayName = 'IconToggle'

  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.element,
    className: PropTypes.string,
    contentOff: PropTypes.string,
    contentOn: PropTypes.string,
    cssClassOff: PropTypes.string,
    cssClassOn: PropTypes.string,
    disabled: PropTypes.bool,
    iconInnerSelector: PropTypes.string,
    labelOff: PropTypes.string,
    labelOn: PropTypes.string,
    onChange: PropTypes.func,
    primary: PropTypes.bool,
    tabIndex: PropTypes.number,
    toggle: PropTypes.oneOf(['on', 'off']).isRequired,
  }

  static defaultProps = {
    onChange: () => {},
    tabIndex: 0,
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }

  componentDidUpdate(prevProps) {
    if (this._isToggleDataChanged(prevProps, this.props)) {
      this.component_.refreshToggleData()
    }
  }

  componentWillReceiveProps(nextProps) {
    const isOn = nextProps.toggle === 'on'
    if (this.component_.on !== isOn) {
      this.component_.on = isOn
    }
    if (nextProps.disabled !== this.props.disabled) {
      this.component_.disabled = nextProps.disabled
    }
  }

  componentWillUnmount() {
    this._clearListeners()

    super.componentWillUnmount()
  }

  attachTo(el) {
    return new MDCIconToggle(el)
  }

  _isToggleDataChanged(props1, props2) {
    return !(
      props1.contentOff === props2.contentOff &&
      props1.contentOn === props2.contentOn &&
      props1.cssClassOff === props2.cssClassOff &&
      props1.cssClassOn === props2.cssClassOn &&
      props1.labelOff === props2.labelOff &&
      props1.labelOn === props2.labelOn &&
      props1.iconInnerSelector === props2.iconInnerSelector
    )
  }

  _setupListeners() {
    this.listen(
      'MDCIconToggle:change',
      this.changeListener_ = e => this.props.onChange(
        e,
        e.detail.isOn ? 'on' : 'off'
      )
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCIconToggle:change',
      this.changeListener_
    )
  }

  render() {
    const {
      accent,
      children,
      className,
      contentOff,
      contentOn,
      cssClassOff,
      cssClassOn,
      disabled,
      iconInnerSelector,
      labelOff,
      labelOn,
      primary,
      tabIndex,
      toggle,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-icon-toggle': true,
      'mdc-icon-toggle--accent': accent,
      'mdc-icon-toggle--disabled': disabled,
      'mdc-icon-toggle--primary': primary,
    }, className)
    return (
      <Icon
        {...otherProps}
        aria-disabled={disabled}
        aria-label={toggle === 'on' ? labelOn : labelOff}
        aria-pressed={toggle === 'on'}
        className={cssClasses}
        {...(iconInnerSelector && {'data-icon-inner-selector': iconInnerSelector})}
        data-toggle-off={JSON.stringify({content: contentOff, cssClass: cssClassOff, label: labelOff})}
        data-toggle-on={JSON.stringify({content: contentOn, cssClass: cssClassOn, label: labelOn})}
        name={toggle === 'on' ? contentOn : contentOff}
        onRef={el => this.root_ = el}
        role="button"
        tabIndex={disabled ? -1 : tabIndex}
      >
        {React.isValidElement(children) && React.cloneElement(children, {'aria-hidden': true})}
      </Icon>
    )
  }
}

export default IconToggle
