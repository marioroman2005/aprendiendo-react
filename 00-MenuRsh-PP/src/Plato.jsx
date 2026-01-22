import { useState } from 'react'


export function Plato({ name, imagen, calorias }) {

    return (

        <article className='m-plato-estructura'>
            <h2 className='m-plato-nombre'>{name}</h2>
            <div className='m-plato-imagen-container'>
                {imagen && <img src={imagen} alt={name} className='m-plato-imagen' />}
            </div>
            {calorias && <span className="m-plato-calorias">{calorias} kcal</span>}
        </article>

    )

}