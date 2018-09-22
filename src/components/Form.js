import React from "react";

const Form = (props) =>{
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Enter Github Username:</label>
        <br />
        <input type="text" onChange={props.handleChange}/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
