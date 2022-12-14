import reactLogo from './assets/react.svg'
import './App.css'
import Comp from './calculadora/Comp'
import { CompUsers } from './usuarios/CompUsers'
import { CompUtilerias } from './utileriasTS/CompUtilerias'
import { CompFilter } from './compFilter/CompFilter'
import CompUseState from './hooks/useStateHook/CompUseState'
import FormElement from './hooks/useStateHook/FormElement'
import CompUseEffect from './hooks/useEffect/CompUseEffect'
import CompComments from './hooks/useEffect/CompComments'
import ChangeDocumentTitle from './hooks/useEffect/homework/ChangeDocumentTitle'
import BounceEffect from './hooks/useEffect/homework/BounceEffect'
import CompUseRef from './hooks/useRefHook/CompUseRef'
import FocusElement from './hooks/useRefHook/homework/FocusElement'
import Coordenadas from './hooks/useRefHook/homework/Coordenadas'
import ComUseMemo from './hooks/useMemoHook/ComUseMemo'
import CountersBox from './hooks/useMemoHook/homework/CountersBox'
import ToDoContextReducer from './hooks/toDoListContextReducer/ToDoContextReducer'

function App() {

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
      {/* Para la calculadora  */}
      {/* <Comp /> */}
      {/* Para los usuarios */}
      {/* <CompUsers /> */}
                                      {/* Para las utilerías  */}
      {/* <CompUtilerias /> */}
      {/* Para los filtros  */}
      {/* <CompFilter /> */}
      {/* <CompUseState /> */}
      {/* Formulario con useState  */}
      {/* <FormElement /> */}
      {/* <CompUseEffect /> */}
      {/* <CompComments /> */}
      {/* <ChangeDocumentTitle /> */}
      {/* <BounceEffect /> */}
      {/* <CompUseRef /> */}
      {/* <FocusElement /> */}
      {/* <Coordenadas /> */}
      {/* <ComUseMemo /> */}
      {/* <CountersBox /> */}
      <ToDoContextReducer />
    </div>
  )
}

export default App
