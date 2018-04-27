import React, {Component} from 'react'
import {Grid, Button, Dropdown, Header, Menu} from 'semantic-ui-react'

class DropDownFilter extends Component
{
  componentWillMount() {
    this.setState({
      isFetching: false,
      multiple: true,
      search: true,
      searchQuery: null,
      value: [],
      options: [
        {
          "key": "August McClure",
          "text": "August McClure",
          "value": "august_mc_clure"
        }, {
          "key": "Kelley Stamm",
          "text": "Kelley Stamm",
          "value": "kelley_stamm"
        }, {
          "key": "Braulio Terry",
          "text": "Braulio Terry",
          "value": "braulio_terry"
        }
      ] //getOptions(),
    })
  }

  handleChange = (e, {value}) => this.setState({value})
  handleSearchChange = (e, {searchQuery}) => this.setState({searchQuery})

  fetchOptions = () => {
    this.setState({isFetching: true})

    setTimeout(() => {
      //   this.setState({ isFetching: false, options: getOptions() })
      this.setState({
        isFetching: false,
        options: [
          {
            "key": "August McClure",
            "text": "August McClure",
            "value": "august_mc_clure"
          }, {
            "key": "Kelley Stamm",
            "text": "Kelley Stamm",
            "value": "kelley_stamm"
          }, {
            "key": "Braulio Terry",
            "text": "Braulio Terry",
            "value": "braulio_terry"
          }
        ]
      })

    }, 500)
  }

  toggleSearch = e => this.setState({search: e.target.checked})

  render() {
    const {multiple, options, isFetching, search, value} = this.state

    return (
      <Menu>
        <Menu.Item>
          <Dropdown
            selection
            multiple={multiple}
            search={search}
            options={options}
            value={value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
            disabled={isFetching}
            loading={isFetching}/>
        </Menu.Item>
        { this.props.children != undefined && <Menu.Item>
          {this.props.children}
        </Menu.Item>}
      </Menu>

    )
  }
}

export default DropDownFilter;