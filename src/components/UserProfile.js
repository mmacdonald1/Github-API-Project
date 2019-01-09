import React from "react";
import { Card, CardTitle, CardText, Button, CardImg, Row, Col } from 'reactstrap';


const UserProfile = (props) => {
  const {name, email, publicRepos, username, githubProfile, img} = props
   return(
     <div className="profile-container" >
        <Row className="profile-container">
          <Col sm="10" className="profile-container">
            <Card body>
              <CardImg top width="100%" src={img} alt="Card image cap" />
              <br />
              <CardTitle>Name: {name}</CardTitle>
              <CardText>Username: {username}</CardText>
              <CardText>Email: {email}</CardText>
              <CardText>Number of Public Repos: {publicRepos}</CardText>
              <Button href={githubProfile}>Go to {username}'s Github </Button>
            </Card>
           </Col>
         </Row>
     </div>
   )
}

export default UserProfile
