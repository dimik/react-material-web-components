import React from 'react'
import PropTypes from 'prop-types'
import {SimpleMenu, MenuAnchor, Icon} from '..'

class IconMenu extends React.PureComponent {
  static displayName = 'IconMenu'

  static propTypes = {
    children: PropTypes.node,
    iconName: PropTypes.string,
    open: PropTypes.bool,
  }

  static defaultProps = {
    open: false,
  }

  handleClick = this._handleClick.bind(this)
  handleClose = this._handleClose.bind(this)

  constructor(props) {
    super(props)

    this.state = {
      open: props.open,
    }
  }

  _handleClick() {
    this.setState(state => ({
      open: !state.open,
    }))
  }

  _handleClose() {
    this.setState({open: false})
  }

  render() {
    return (
      <MenuAnchor>
        <Icon
          href="javascript:void(0);"
          name={this.props.iconName}
          onClick={this.handleClick}
          tagName="a"
        />
        <SimpleMenu
          onCancel={this.handleClose}
          open={this.state.open}
        >
          {this.props.children}
        </SimpleMenu>
      </MenuAnchor>
    )
  }
}

export default IconMenu
