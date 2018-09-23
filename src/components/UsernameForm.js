import React from "react";
import { Button, Alert } from 'reactstrap';

const UsernameForm = (props) =>{
  const {handleChange, handleSubmit, error} = props
  let errorMessage
  if(error !== false){
    errorMessage= <Alert color="primary">{error}</Alert>
  }
  return(
    <div>
    {errorMessage}
      <form onSubmit={handleSubmit}>
        <label>Enter Github Username:</label>
        <br />
        <input type="text" onChange={handleChange}/>
        <br />
        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default UsernameForm
