import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import TaskCard from "../components/TaskCard";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("Todos");

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("wineTasks")) || [];
        setTasks(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("wineTasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => setTasks([...tasks, task]);
    const toggleComplete = (id) =>
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    const removeTask = (id) => setTasks(tasks.filter(t => t.id !== id));

    const filtered = filter === "Todos" ? tasks : tasks.filter(t => t.type === filter);

    return (
        <div>
            <Navbar />
            <div className="task-manager">
                <h2> Gestor de Tareas Enológicas 🍷</h2>
                <TaskForm addTask={addTask} />
                <TaskFilter setFilter={setFilter} />
                <div className="task-list">
                    {filtered.map(task => (
                        <TaskCard key={task.id} task={task} toggleComplete={toggleComplete} removeTask={removeTask} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskManager;
