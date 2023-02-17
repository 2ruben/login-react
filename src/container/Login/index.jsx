import React, { useState } from 'react';
import './styles.css'


export const Login = () => {

    const [state, setState] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event)
        setState(true)
    }

    return(
        <div>
            <div className='wrapper-login'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='wrapper-login__input'>
                        <input type="text" placeholder='Username'/>
                    </div>
                    <div className='wrapper-login__input'>
                        <input type="password" placeholder='Password' />
                    </div>
                    <button type='submit'>{state ? 'Welcome' : 'Login or Register'}</button>
                </form>
            </div>
        </div>
    )
}