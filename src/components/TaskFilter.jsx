const TaskFilter = ({ setFilter }) => (
    <div className="task-filter">
        <label>Filtrar por tipo: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
            <option>Todos</option>
            <option>Tinto</option>
            <option>Blanco</option>
            <option>Rosado</option>
            <option>Espumante</option>
        </select>
    </div>
);

export default TaskFilter;
