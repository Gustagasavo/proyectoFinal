export default function WineCard({ wine }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                background: "#fafafa"
            }}
        >
            <img
                src={wine.image}
                alt={wine.name}
                style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{wine.name}</h3>
            <p><strong>{wine.winery}</strong> ({wine.year})</p>
            <p>{wine.country}</p>
            <p style={{ fontSize: "0.9rem" }}>{wine.description}</p>
            <p style={{ fontWeight: "bold" }}>${wine.price}</p>
        </div>
    );
} 
