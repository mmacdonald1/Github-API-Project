import React from "react";

const Form = (props) =>{
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Github Username</label>
        <input type="text" onChange={props.handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
