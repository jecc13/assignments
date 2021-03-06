/*
The input fields should NOT directly update the badge fields (meaning when you type in the input box you should NOT see the badge field update - only after the Submit button is pressed will the fields populate.
    Write code to make sure each field is not empty and has at least 3 characters each
    If any of the input fields are empty the Submit button should be disabled
    Write validation code to make sure the phone number field only has numbers (no dashes or special characters, must look like this 9757653323
*/

import React from 'react';
import Form from "./Form";

function App(props) {
    return (
        <div className="wrapper">
            <header></header>
            <Form />
        </div>
    )
}

export default App;
