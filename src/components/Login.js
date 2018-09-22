import React from "react";
import Form from "./Form";

class Login extends React.Component{
  constructor(){
    super()
    this.state ={
      username: ''
    }
  }
  handleFormChange = (e) =>{
    e.preventDefault()
    let username = e.target.value
    this.setState({username: username})
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then((resp)=> resp.json())
    .then((data)=> console.log(data))

  }
  render(){
    return(
      <div>
        <h1>Hello World!!</h1>
        <Form handleSubmit={this.handleFormSubmit} handleChange={this.handleFormChange}/>
      </div>
    )
  }
}

export default Login
