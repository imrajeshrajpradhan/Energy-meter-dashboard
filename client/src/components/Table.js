

import React, { Component } from 'react';
 import {Link} from 'react-router-dom'

class Table extends Component {
  render() {
    return (
        <tr>
          <td>
          {/* <a href="/deviceDetails">{this.props.obj.deveui}</a> */}
          <Link to={"/deviceDetails/"+(this.props.obj.deveui)}>{this.props.obj.deveui}</Link>
          </td>
          <td>
            {this.props.obj.meterdata}
          </td>
          <td>
            {this.props.obj.frame_cnt}
          </td>
          <td>
          {this.props.obj.time.replace('T', '  |  ').substring(0, 23)}
          </td>
        
        </tr>
    );
  }

}

export default Table;