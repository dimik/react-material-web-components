import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {MDCSlider} from '@material/slider/dist/mdc.slider'
import classNames from 'classnames'

class Slider extends MDCComponent {
  static displayName = 'Slider'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    discrete: PropTypes.bool,
    displayMarkers: PropTypes.bool,
    label: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    step: PropTypes.number,
    tabIndex: PropTypes.number,
    thumbRadius: PropTypes.number,
    thumbSize: PropTypes.number,
    value: PropTypes.number,
  }

  static defaultProps = {
    max: 100,
    min: 0,
    onChange: () => {},
    onInput: () => {},
    step: 0,
    tabIndex: 0,
    thumbRadius: 7.875,
    thumbSize: 21,
    value: 0,
  }

  componentDidMount() {
    super.componentDidMount()

    this._setupListeners()
  }

  componentWillReceiveProps(nextProps) {
    if (this.component_.max !== nextProps.max) {
      this.component_.max = nextProps.max
    }
    if (this.component_.min !== nextProps.min) {
      this.component_.min = nextProps.min
    }
    if (this.component_.value !== nextProps.value) {
      this.component_.value = nextProps.value
    }
    if (nextProps.step !== this.props.step) {
      this.component_.step = nextProps.step
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
    const {
      max,
      min,
      value,
    } = this.props
    const pctComplete = (value - min) / (max - min)
    const translatePx = el.offsetWidth - pctComplete
    // Preventing FOUC
    el.querySelector('.mdc-slider__thumb-container').style.transform = `translateX(${translatePx}px) translateX(-50%)`
    el.querySelector('.mdc-slider__track').style.transform = `scale(${pctComplete})`

    return new MDCSlider(el)
  }

  layout() {
    this.component_.layout()
  }

  stepUp(amount=1) {
    this.component_.stepUp(amount)
  }

  stepDown(amount=1) {
    this.component_.stepDown(amount)
  }

  _setupListeners() {
    this.listen(
      'MDCSlider:change',
      this.changeListener_ = e => this.props.onChange(
        e,
        this.component_.value
      )
    )
    this.listen(
      'MDCSlider:input',
      this.inputListener_ = e => this.props.onInput(
        e,
        this.component_.value
      )
    )
  }

  _clearListeners() {
    this.unlisten(
      'MDCSlider:change',
      this.changeListener_
    )
    this.unlisten(
      'MDCSlider:input',
      this.inputListener_
    )
  }

  render() {
    const {
      children,
      className,
      disabled,
      discrete,
      displayMarkers,
      label,
      max,
      min,
      onChange,
      onInput,
      step,
      tabIndex,
      thumbRadius,
      thumbSize,
      value,
      ...otherProps,
    } = this.props
    const cssClasses = classNames({
      'mdc-slider': true,
      'mdc-slider--disabled': disabled,
      'mdc-slider--discrete': discrete,
      'mdc-slider--display-markers': discrete && displayMarkers,
      'mdc-slider--off': value === 0, // Preventing FOUC
    }, className)
    return (
      <div
        {...otherProps}
        aria-disabled={disabled}
        aria-label={label}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        className={cssClasses}
        ref={el => this.root_ = el}
        role="slider"
        tabIndex={disabled ? -1 : tabIndex}
        {...(step || discrete ? {'data-step': step || 1} : null)}
      >
        <div className="mdc-slider__track-container">
          <div className="mdc-slider__track"/>
          {discrete && displayMarkers (
            <div className="mdc-slider__track-marker-container"/>
          )}
        </div>
        <div className="mdc-slider__thumb-container">
          {discrete && (
            <div className="mdc-slider__pin">
              <span className="mdc-slider__pin-value-marker"/>
            </div>
          )}
          <svg
            className="mdc-slider__thumb"
            height={thumbSize}
            width={thumbSize}
          >
            <circle
              cx={thumbSize / 2}
              cy={thumbSize / 2}
              r={thumbRadius}
            />
          </svg>
          <div className="mdc-slider__focus-ring"/>
        </div>
      </div>
    )
  }
}

export default Slider
