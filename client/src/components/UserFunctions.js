import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:4000/user/signup', {
     name: newUser.name,
     
     username: newUser.username,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:4000/user/login', {
      username: user.username,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
