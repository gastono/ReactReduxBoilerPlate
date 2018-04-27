import React, {Component} from 'react';
import { render } from 'react-dom';
import Paper from 'material-ui/Paper';
import {
 SortingState, IntegratedSorting, GroupingState,IntegratedGrouping, PagingState, IntegratedPaging,FilteringState,IntegratedFiltering
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  Toolbar, PagingPanel, TableFilterRow
} from '@devexpress/dx-react-grid-material-ui';
import {connect} from 'react-redux';

class QuickMaeGrid extends React.PureComponent
{
  constructor(props) {
    super(props);

    this.state = {    
      columns: [
        { name: 'OID_SUBCLIENTE', title: 'OidSubCliente' },
        { name: 'OID_CLIENTE', title: 'OidCliente' },
        { name: 'COD_SUBCLIENTE', title: 'CodCliente' },
        { name: 'DES_SUBCLIENTE', title: 'DesSubcliente' }
      ],
      filtering:""
    };
  }

  componentDidMount()
  {
    this
    .props
    .Getdba();
  }
}