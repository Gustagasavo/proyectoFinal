import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-5 mb-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwU5Yx1FwdbTOWNc8bkdXWkil1cdWGiDCP1ezb8gzyqnHZVayBVICKeIAKhBwxrcilA4&usqp=CAU" alt="error en el acceso" />
            <h2>¡Vaya! La copa se ha roto...</h2>
            
            <button onClick={() => navigate("/")}>Volver al Inicio</button>
        </div>
    );
};

export default Error;
