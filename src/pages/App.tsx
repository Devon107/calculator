import './App.css'
import Panel from '../components/Panel'
import {calculate} from '../hooks/calculate'

function App() {
  const {userInput, result, numberOne, handleClick} = calculate()

  return (
    <main className="app">
      <div className="row">
        <Panel userInput={userInput} result={result} numberOne={numberOne} handleClick={handleClick}/>
      </div>
    </main>
  )
}

export default App
