import React from "react";
import { Button, Alert, Jumbotron, Form, Label, Input } from 'reactstrap';

const UsernameForm = (props) =>{
  const {handleChange, handleSubmit, error} = props
  let errorMessage
  if(error !== false){
    errorMessage= <Alert color="warning">{error}</Alert>
  }
  return(
    <div>
      <Jumbotron>
        <h1>Find a Github User!</h1>
        <br />
        <Form onSubmit={handleSubmit}>
        {errorMessage}
          <Label>Enter Github Username:</Label>
          <Input type="text" onChange={handleChange}/>
          <br />
          <Button color="info">Submit</Button>
        </Form>
      </Jumbotron>
    </div>
  )
}

export default UsernameForm
