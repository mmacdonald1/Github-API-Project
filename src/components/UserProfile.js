import React from "react";


const UserProfile = (props) => {
  const {name, email, publicRepos, username} = props
   return(
     <div>
        <h1>Name: {name}</h1>
        <h2>Username: {username}</h2>
        <h2>Email: {email}</h2>
        <h2>Number of Public Repos: {publicRepos}</h2>
     </div>
   )
}

export default UserProfile
