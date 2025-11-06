import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Por favor ingresa todos los campos.");
            return;
        }
        login(email);
        navigate("/dashboard");
    };

    return (
        <div className="login-container d-flex flex-column justify-content-center align-items-center vh-100 p-4 border rounded">
            <h1>🍷 VINOTECA </h1>            
            <form onSubmit={handleSubmit} className="login-container">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button 
                    type="submit">Entrar
                </button>
            </form>
        </div>
    );
};

export default Login;