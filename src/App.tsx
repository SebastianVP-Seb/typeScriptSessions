import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Comp from './calculadora/Comp'
import { CompUsers } from './usuarios/CompUsers'
import { CompUtilerias } from './utileriasTS/CompUtilerias'
import { CompFilter } from './compFilter/CompFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/* Para la calculadora  */}
      {/* <Comp /> */}
      {/* Para los usuarios */}
      {/* <CompUsers /> */}
      {/* Para las utilerías  */}
      {/* <CompUtilerias /> */}
      {/* Para los filtros  */}
      <CompFilter />
    </div>
  )
}

export default App
