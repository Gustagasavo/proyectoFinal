import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <h3>🍇 VINOTECA</h3>
            <div>
                <button onClick={() => navigate("/dashboard")}>Home</button>
                <button onClick={() => navigate("/Vinos")}>Catalogo</button>
                <button onClick={() => navigate("/tasks")}>Tareas</button>
                <button onClick={handleLogout}>Salir</button>
            </div>
        </nav>
    );
};

export default Navbar;
