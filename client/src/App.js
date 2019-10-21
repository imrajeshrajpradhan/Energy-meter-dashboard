import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import DeviceDetails from './components/DeviceDetails'
import Helmet from 'react-helmet'
class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
        <Helmet>
                <style>{'body { background-color: #B2C2E1 ; }'}</style>
            </Helmet>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/deviceDetails/:deveui" component={DeviceDetails} />

            {/* <Profile droplets={ this.state.droplets } /> */}
          </div>
        </div>
      </Router>
    )
  }
}

export default App