import { useEffect, useState } from "react";
import { wines } from "../data/wines";
import { useNavigate } from "react-router-dom";

function Vinos() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setData(wines);
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h1 className="text-center mb-3">Catálogo de Vinos</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
                {data.map(wine => (
                    <div key={wine.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
                        <img src={wine.image} alt={wine.name} style={{ width: "100%", borderRadius: "8px" }} />
                        <h3>{wine.name}</h3>
                        <p><strong>{wine.winery}</strong> ({wine.year})</p>
                        <p>{wine.country}</p>
                        <p>{wine.description}</p>
                        <p><b>${wine.price}</b></p>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate("/dashboard")}>Volver al Inicio</button>
        </div>
    );
}

export default Vinos;

