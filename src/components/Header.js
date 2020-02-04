import React, { useState, useReducer } from 'react';

import { connect } from 'react-redux'; // HOC
// Bridge piece from store to our components

import { initialState, headerReducer } from '../reducers/headerReducer';

// 3. Connect the component
// use the connect function to map our state from the Redux store to the component props

const Header = (props) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

// Step 3a - wrap the component in the second connect function call
// Step 3b - first function call takes in a function and an object
// Step 2bi - the function we pass in is usually named mapStateToProps

export default connect(
  (state) => {
    return {
      headerOnProps: state.header
    }
  }, 
  {}
)(Header); // function currying - called twice!
