import React from "react";
import Form from "../components/Form";

class UsersContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      username: ''
    }
  }
  //as user inputs username this method is setting it to state
  handleFormChange = (e) =>{
    e.preventDefault()
    let username = e.target.value
    this.setState({username: username})
  }

  //when user presses submit this method uses the value in state to query github API and return the user object
  handleFormSubmit = (e) => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then((resp)=> resp.json())
    .then((data)=> console.log(data))

  }
  render(){
    return(
      <div>
        <h1>Find a Github User!</h1>
        <Form handleSubmit={this.handleFormSubmit} handleChange={this.handleFormChange}/>
      </div>
    )
  }
}

export default UsersContainer
