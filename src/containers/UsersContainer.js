import React from "react";
import UsernameForm from "../components/UsernameForm";
import UserProfile from "../components/UserProfile"

class UsersContainer extends React.Component{
  constructor(){
    super()
    this.state ={
      username: '',
      name:'',
      email:'',
      publicRepos:'',
      displayProfile: false,
      error:false

    }
  }
  //as user inputs username this method is setting it to state
  handleFormChange = (e) =>{
    e.preventDefault()
    let username = e.target.value
    this.setState({username: username})
  }

  //when user presses submit this method uses the value in state to query github API, return the user object, filter for null, then set values to state
  handleFormSubmit = (e) => {
    e.preventDefault()

    //take username from state and cut out spaces
    let username = this.state.username
    username = username.replace(/\s+/g,'')

    //if username is not an empty string then fetch data
    if(username !== ""){
      fetch(`https://api.github.com/users/${this.state.username}`)
      .then((resp)=> resp.json())
      .then((data)=> {
        console.log(data)
        //if 404 then display Username not found
        if(data.message === "Not Found"){
          this.setState({displayProfile:false, error:"Username not found."})
        }
        else{
          //if not 404 create state obj from returned data
          let userObj = {name: data.name, email: data.email, publicRepos: data.public_repos, displayProfile:true, error:false}
          //Take the keys of the user object and for each key check if the value is null. If it is then replace it with "none".
          Object.keys(userObj).forEach(function(key) {
            if(userObj[key] === null) {
              userObj[key] = 'none'
            }
          })
          //set state values to the filtered data
          this.setState(userObj);
        }
      })
    }
    else{
      //If username is and empty string tell user to enter a username
      this.setState({error:"Please enter a valid username"})
    }
  }
  render(){
    //only render profile if fetch has brought back a user and we have assigned state
    let profile
    if(this.state.displayProfile === true){
      profile = <UserProfile name={this.state.name} email={this.state.email} publicRepos={this.state.publicRepos} username={this.state.username} />
    }
    else{
      profile=""
    }

    return(
      <div>
        <h1>Find a Github User!</h1>
        <UsernameForm handleSubmit={this.handleFormSubmit} handleChange={this.handleFormChange} error={this.state.error}/>
        {profile}
      </div>
    )
  }
}

export default UsersContainer
