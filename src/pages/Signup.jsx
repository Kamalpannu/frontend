import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup({ onAuth, setMessage }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const api = import.meta.env.VITE_API_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${api}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            onAuth(data.token);
            setMessage('Signup successful!');
            navigate('/');
        } else {
            alert(data.error);
        }
};
return (
     <form onSubmit={handleSubmit}>
     <h2>Signup</h2>
     <input placeholder="Username" value={username} onChange={e =>setUsername(e.target.value)} />
     <input placeholder="Email" value={email} onChange={e =>setEmail(e.target.value)} />
     <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
     <button type="submit">Signup</button>
     </form>
);
}

export default Signup;