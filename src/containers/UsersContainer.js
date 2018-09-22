import React from "react";
import UsernameForm from "../components/UsernameForm";

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
    let username = this.state.username
    username = username.replace(/\s+/g,'')
    if(username !== ""){
      fetch(`https://api.github.com/users/${this.state.username}`)
      .then((resp)=> resp.json())
      .then((data)=> {console.log(data)})
    }
    else{
      console.log("Please enter a valid username")
    }
  }
  render(){
    return(
      <div>
        <h1>Find a Github User!</h1>
        <UsernameForm handleSubmit={this.handleFormSubmit} handleChange={this.handleFormChange}/>
      </div>
    )
  }
}

export default UsersContainer
