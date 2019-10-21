import React, { Component } from 'react';

class DeviceTable extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.deveui}
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

export default DeviceTable;