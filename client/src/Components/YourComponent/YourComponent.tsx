import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { login, register, logoutUser } from '../../Features/Auth/authActions';

const YourComponent: React.FC = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        dispatch(login({ username, password }));
    };

    const handleRegister = () => {
        dispatch(register({ username, email, password }));
    };

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div>
            <h1>{auth.isAuthenticated ? 'Logged In' : 'Not Logged In'}</h1>
            {auth.isAuthenticated ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleRegister}>Register</button>
                </div>
            )}
            {auth.loading && <p>Loading...</p>}
            {auth.error && <p>{auth.error}</p>}
        </div>
    );
};

export default YourComponent;
