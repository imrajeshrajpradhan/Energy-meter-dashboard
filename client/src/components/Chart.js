import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'
import axios from 'axios';

class Chart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         chartData:{
             labels:[],
             datasets:[
                 {
                     label:'Meter Data',
                     data:[],
                     backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                     ]
                 }
             ]
         }
      }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/chartDetails/'+(this.props.match.params.deveui))
            .then(response => {
                this.setState({ chartData: response.data });
               console.log(response.data);
               
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    render() {
        return (
            <div className="chart">
                <Bar
                data={this.state.chartData}
                options={{}}
                />
                
            </div>
        )
    }
}

export default Chart
