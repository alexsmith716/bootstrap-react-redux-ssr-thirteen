import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';


class TableBody extends Component {

  constructor(props) {

    super(props);

    // this.state = {};
  }

  static propTypes = {
    tableData: PropTypes.array
  };

  static defaultProps = {
    //
  };

  render() {

    let rows = [];

    this.props.tableData.forEach((obj, index, arr) => {
      rows.push( <TableRow data={ obj } key={ index } /> );
    });

    return (

      <tbody>

        {rows}

      </tbody>

    );
  }
}

export default TableBody;
