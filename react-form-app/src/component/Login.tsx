import React, { useState } from "react";
import {useForm} from '../hooks/useForm'

// defining the initial state for the form
const initialState = {
    email: "",
    password: ""
};

export const Login=()=>{

   // getting the event handlers from our custom hook
    const { onChange, onSubmit, values } = useForm(
        loginUserCallback,
        initialState
    );

    // a submit function that will execute upon form submission
    async function loginUserCallback() {
        console.log(values)
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <div>
                <h4>Login Form</h4>
                    <input
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email'
                        onChange={onChange}
                        required
                        />
                    <br/>
                    <input
                        name='password'
                        id='password'
                        type='password'
                        placeholder='Password'
                        onChange={onChange}
                        required
                        />
                    <br/>

                    <button type='submit'>Login</button>
                </div>
            </form>
        </>
    )

}