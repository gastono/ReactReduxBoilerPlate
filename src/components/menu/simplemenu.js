import React, {Component} from 'react'
import {Menu,} from 'semantic-ui-react'

class SimpleMenu extends Component
{
  render()
  {
    return (
       
        <Menu stackable>
        {this.props.children}
        </Menu>
      
    )
  }
}

export default SimpleMenu;