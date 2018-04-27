import React, {Component} from 'react'
import SimpleMenu from '../menu/simplemenu'
import DropDownFilter from '../dropdownfilter/dropdownfilter'

class QuickMaeFilterly extends Component
{
  render()
  {
    return (
      <SimpleMenu>       
       {this.props.menu}
      </SimpleMenu>
    )
  }
}

export default QuickMaeFilterly;