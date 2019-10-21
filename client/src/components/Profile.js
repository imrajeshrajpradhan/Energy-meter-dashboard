
import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
import './Profile.css'

export default class Profile extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/receiveDevUi')
        .then(response => {
          this.setState({ business: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.business.map(function(object, i){
          return <Table obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Energy Utility Meter Reading</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Device ID</th>
                <th>Meter data</th>
                <th>Frame Count</th>
                <th colSpan="2">time</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }
// import React from 'react';
// // import '../components/Table.css'



// const Profile = ({ droplets }) => {
//   return (
//     <div className="container">
//       <div className="jumbotron mt-5">
//         <div className="col-sm-8 mx-auto">
//           <h1 className="text-center">Lora Data</h1>
//         </div>
//         <table className="table col-md-10 mx-auto">
//           <thead>
//             <tr>
//               {/* <th>sl no</th> */}
//               <th>Device ID</th>
//               <th>Meter Data</th>
//               <th>Frame Count</th>
//               <th>Time_Of_Mof</th>

//             </tr>
//           </thead>
//           <tbody>
//             {(droplets.length > 0) ? droplets.map((droplet, index) => {
//               const time = droplet.time.replace('T', '  |  ').substring(0, 23);
//               return (
//                 <tr key={index}>
//                   {/* <td>{ droplet.id }</td> */}
//                   <td><a href="/devDetails">{droplet.deveui}</a></td>
//                   <td>{droplet.meterdata}</td>
//                   <td>{droplet.frame_cnt}</td>
//                   <td>{time}</td>
//                 </tr>
//               )
//             }) : <tr><td colSpan="4">Loading...</td></tr>}
//           </tbody>
//         </table>
//         <Profile droplets={ this.state.droplets } />

//       </div>
//     </div>
//   );
// }

// export default Profile
