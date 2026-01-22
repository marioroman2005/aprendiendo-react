import './App.css'

export function MenuDia({ dia, children }) {
    return (
        <section className="m-menu-dia">
            <h2 className="m-dia-titulo">{dia}</h2>
            <div className="m-dia-contenido">
                {children}
            </div>
        </section>
    )
}
