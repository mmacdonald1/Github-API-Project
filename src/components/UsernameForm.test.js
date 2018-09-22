import React from "react";
import UsernameForm from "./UsernameForm";
import renderer from "react-test-renderer";


describe('UsernameForm', () =>{
  it('renders correctly', () =>{
    const tree = renderer
      .create(<UsernameForm />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})
