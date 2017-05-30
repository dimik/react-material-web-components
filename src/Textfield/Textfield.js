import React from 'react'
import PropTypes from 'prop-types'
import {MDCComponent} from '../MDCComponent'
import {TextfieldLabel} from '.'
import {MDCTextfield} from '@material/textfield/dist/mdc.textfield'
import classNames from 'classnames'
import uniqueId from 'lodash.uniqueid'

class Textfield extends MDCComponent {
  static displayName = 'Textfield'

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    fullwidth: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.node,
    multiline: PropTypes.bool,
    onChange: PropTypes.func,
    tagName: PropTypes.oneOf(['label', 'div']),
    value: PropTypes.string,
  }

  static defaultProps = {
    id: uniqueId('textfield_'),
    onChange: () => {},
    tagName: 'div',
  }

  attachTo(el) {
    return new MDCTextfield(el)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.props.disabled) {
      this.component_.disabled = nextProps.disabled
    }
  }

  _isFocused() {
    return document.activeElement === this.input_
  }

  render() {
    const {
      children,
      className,
      dense,
      // disabled,
      fullwidth,
      // id,
      label,
      multiline,
      onChange,
      tagName,
      // value,
      ...otherProps,
    } = this.props
    const isFocused = this._isFocused()
    const hasValue = Boolean(this.props.value)
    const cssClasses = classNames({
      'mdc-textfield': true,
      'mdc-textfield--dense': dense,
      'mdc-textfield--disabled': this.props.disabled,
      'mdc-textfield--fullwidth': fullwidth,
      'mdc-textfield--multiline': multiline,
      // prevents a Flash Of Un-styled Content (FOUC)
      'mdc-textfield--upgraded': true,
      'mdc-textfield--focused': isFocused,
    }, className)
    return React.createElement(
      tagName,
      {className: cssClasses, ref: el => this.root_ = el},
      React.createElement(
        multiline ? 'textarea' : 'input',
        {
          ...otherProps,
          className: 'mdc-textfield__input',
          ref: el => this.input_ = el,
          onChange: e => onChange(e, this.input_.value),
        }
      ),
      React.isValidElement(label) ? label : React.createElement(
        TextfieldLabel,
        {
          tagName: tagName === 'label' ? 'span' : 'label',
          htmlFor: this.props.id,
          // prevents a Flash Of Un-styled Content (FOUC)
          floatAbove: hasValue || isFocused,
          key: isFocused,
        },
        label
      )
    )
  }
}

export default Textfield
