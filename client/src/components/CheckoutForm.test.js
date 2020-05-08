import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


// --------------- Test 1 successful!! ------------ //
test( "form header renders", () => {
  // arrange
  const { getByText } = render( <CheckoutForm /> );
  // act
  const header = getByText( /checkout form/i );
  // assert
  expect( header ).toBeInTheDocument();
} );


// --------------- Test 2 successful!! ------------ //
test( "form shows success message on submit with form details", () => {
  // arrange
  const { getByText, getByRole } = render( <CheckoutForm /> );
  // act
  const button = getByRole( /button/i );
  fireEvent.click( button );
  const successMessage = getByText( /woo-hoo/i );
  // assert
  expect( successMessage ).toBeInTheDocument();
} );









