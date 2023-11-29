import React, { useState } from 'react';

import sty from "./reg.module.css";

const RegistrationForm = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.onRegister({ username, password });
    };

    return (
        <form onSubmit={handleSubmit} className={sty.registration}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label> 
            <p></p>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <p></p>
            <input type="submit" value="Register" />
        </form>
    );
};

export default RegistrationForm;