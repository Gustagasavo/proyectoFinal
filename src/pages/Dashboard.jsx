import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("wineTasks")) || [];
        setTasks(stored);
    }, []);

    if (!user) return navigate("/");

    return (
        <>
            <div>
                <Navbar />
                <div className="dashboard">
                    <h2>🍇 ¡Bienvenido, {user.email.split('@')[0]}!</h2>
                    <p>Resumen de tareas</p>
                    <div className="stats">
                        <p>Total de tareas: {tasks.length}</p>
                        <p>Completadas: {tasks.filter(t => t.completed).length}</p>
                    </div>
                    <button onClick={() => navigate("/tasks")}>
                        Ir al Gestor de Tareas
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
