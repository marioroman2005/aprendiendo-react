import './App.css'
import { Plato } from './Plato'
import { MenuDia } from './MenuDia'
import { SeccionComida } from './SeccionComida'

function App() {
  return (
    <main className="m-app-container">
      <h1 className='m-titulo'>MENU CATERGEST RSH</h1>

      <MenuDia dia="LUNES">
        <SeccionComida titulo="ALMUERZO">
          <Plato
            name="ARROZ NEGRO"
            imagen="/arroz-negro.png"
            calorias={450}
          />
          <Plato
            name="SANDWITCH DE COMBATE"
            imagen="/sandwich-combate.png"
            calorias={800}
          />
        </SeccionComida>

        <SeccionComida titulo="CENA">
          <Plato
            name="SOPA DE LLUVIA"
            imagen="/sopa-lluvia.png"
            calorias={250}
          />
          <Plato
            name="CROQUETAS"
            imagen="/croquetas.png"
            calorias={500}
          />
        </SeccionComida>
      </MenuDia>
    </main>
  )
}

export default App
