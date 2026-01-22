import './App.css'

export function SeccionComida({ titulo, children }) {
    return (
        <div className="m-seccion-comida">
            <div className="m-platos-container">
                {children}
            </div>
            <div className="m-seccion-titulo">
                <h3>{titulo}</h3>
            </div>
        </div>
    )
}
