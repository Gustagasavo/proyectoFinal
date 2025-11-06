import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Tinto");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        const newTask = {
            id: Date.now(),
            title,
            type,
            completed: false,
        };

        addTask(newTask);
        setTitle("");
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ej: Cata de vinos Malbec"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Tinto</option>
                <option>Blanco</option>
                <option>Rosado</option>
                <option>Espumante</option>
            </select>
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TaskForm;
