import React from "react";
import { Card, CardTitle, CardText, Button, CardImg } from 'reactstrap';


const UserProfile = (props) => {
  const {name, email, publicRepos, username, githubProfile, img} = props
   return(
     <div>
        <Card body>
          <CardImg top width="100%" src={img} alt="Card image cap" />
          <br />
          <CardTitle>Name: {name}</CardTitle>
          <CardText>Username: {username}</CardText>
          <CardText>Email: {email}</CardText>
          <CardText>Number of Public Repos: {publicRepos}</CardText>
          <Button href={githubProfile}>Go to {username}'s Github </Button>
        </Card>
     </div>
   )
}

export default UserProfile
