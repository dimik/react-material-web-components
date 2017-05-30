import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class MDCComponent extends PureComponent {
  static displayName = 'MDCComponent'

  componentDidMount() {
    if (this.root_) {
      this.component_ = this.attachTo(this.root_)
    }
  }

  componentWillUnmount() {
    if (this.component_) {
      this.component_.destroy()
    }
    this.root_ = null
  }

  getComponent() {
    return this.component_
  }
  
  attachTo(el) {
  }

  listen(...args) {
    if (this.component_ && this.root_) {
      this.component_.listen(...args)
    }
  }

  unlisten(...args) {
    if (this.component_ && this.root_) {
      this.component_.unlisten(...args)
    }
  }

  emit(...args) {
    if (this.component_ && this.root_) {
      this.component_.emit(...args)
    }
  }

  render() {
    return null
  }
}

export default MDCComponent