import React, { Component } from 'react';
import axios from 'axios';
import DeviceTable from './Table';
import Chart from './Chart'
// import Pagination from "react-js-pagination";


export default class DeviceDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { loradata: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/devDetails/'+(this.props.match.params.deveui))
            .then(response => {
                this.setState({ loradata: response.data });
               
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.loradata.map(function (object, i) {
            return <DeviceTable obj={object} key={i} />;
        });
    }

    render() {
        //console.log(this.props.match.params.devid);
        
        return (
            
            <div>
                <h3 style={{ color: 'red' }} align="center">Device Details of {this.props.match.params.deveui} </h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Device ID</th>
                            <th>Meter data</th>
                            <th>Frame Count</th>
                            <th>time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                    
                </table>
                {/* <Chart /> */}
            </div>
        );
    }
}