const TaskCard = ({ task, toggleComplete, removeTask }) => (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
        <h4>{task.title}</h4>
        <p>Tipo: {task.type}</p>
        <div>
            <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Reabrir" : "Completar"}
            </button>
            <button onClick={() => removeTask(task.id)}>Eliminar</button>
        </div>
    </div>
);

export default TaskCard;
