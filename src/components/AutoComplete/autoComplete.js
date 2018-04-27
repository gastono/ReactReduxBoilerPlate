import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Grid,Dropdown, Menu} from 'semantic-ui-react'

class AutoComplete extends Component
{
  state = {
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
    ],
    connection: this.props.connectiontype
  }

  handleChange = (e, {value}) => {
   this.props.Search()
  }

  handleSearchChange = (e, {searchQuery}) => {
    switch (this.state.connection) 
    {
      case "REMOTE":
        this
          .props
          .RemoteFilter(searchQuery);
        break;
      case "LOCAL":
        this
          .props
          .LocalFilter(searchQuery);
        break;
      case "REMOTE-LOCAL":
        if (this.props.parentvalue == "") {
            this
            .props
            .RemoteFilter(searchQuery);    
        }else
        {
            this
          .props
          .LocalFilter(searchQuery);
        }
        break;
    }
  }

  render() {
    const {multiple, isFetching, search, value} = this.state

    return (
      <Menu>
        <Menu.Item>
          <Dropdown selection search={search} 
            options={this.props.options} //opciones que vienen desde la base de datos
            value={value} //dato seleccionado
            placeholder={this.props.placeholder} //nombre en gris dentro de la caja
            onChange={this.handleChange} //evento por seleccion de item
            onSearchChange={this.handleSearchChange} //evento por cada tipeo
            disabled={isFetching} loading={isFetching}/>
        </Menu.Item>     
      </Menu>
    )
  }
}

mapStateToProps = (state) => {
  return {
    options: state.QuickMaeSearch.autoCompleteOptions[this.porps.name],
    parentvalue: this.props.parentname == undefined ? "" : state.Global.componentValues[this.props.parentname]
  }
}

mapDispatchToProps = (state, props) => {
  return {
    RemoteFilter: (letter) => dispatch(QuickMaeSearchApiWrapper( props.FilterApiAction, letter, props.SoruceStateAddress)), //Filtro Remoto
    LocalFilter: (letter) => dispatch(LocalFilter(letter, props.SoruceStateAddress)),//Filtro Local
    Search:(value) => dispatch(QuickMaeSearchApiWrapper(value,props.SearchApiAction,props.SoruceStateAddress)) //Busqueda Remota
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AutoComplete);
