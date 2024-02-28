import { useState } from 'react'
import './App.css'
import Panel from '../components/Panel'

const REGEX = /[0-9]+/

function App() {
  const [result, setResult] = useState('')
  const [numberOne, setNumberOne] = useState('')
  const [operator, setOperator] = useState('')
  const [userInput, setUserInput] = useState('')

  const handleClick = (value: string) => {
    if(value === 'C'){
      setResult('')
      setNumberOne('')
      setOperator('')
      setUserInput('')
      return
    }
    if(isNumber(value)){
      if(value === '0' && numberOne === '0') return
      if(operator === ''){
        if(numberOne === '0'){
          setNumberOne(value)
          setUserInput(userInput + value)
          return
        }
        const newNumber = numberOne + value
        setNumberOne(newNumber)
        setUserInput(userInput + value)
        return
      }
      else if(operator !== '' && numberOne === ''){
        setNumberOne(value)
        setUserInput(userInput + value)
        return
      }
      else if(operator !== '' && numberOne !== ''){
        const newNumber = numberOne + value
        setNumberOne(newNumber)
        setUserInput(userInput + value)
        return
      }
    }
    if(!isNumber(value)){
      if(value === '+' || value === '-' || value === 'x' || value === '/'){
        if(operator !== ''){
          solve(value)
          return
        }
        else{
          setOperator(value)
          setUserInput(userInput + ' ' + value + ' ')
          setResult(numberOne)
          setNumberOne('')
          return
        }
      }else if(value === '='){
        solve('')
        return
      }
      else if(value === '.' && numberOne !== ''){
        if(!numberOne.includes('.')){
          setNumberOne(numberOne + '.')
          setUserInput(userInput + '.')
          return
        }
        return
      }
    }
  }
    

  const isNumber = (value: string) => {
    return REGEX.test(value)
  }

  function solve(value = ''): void {
    if(result !== '' || operator !== ''){
      let newResult = 0
      switch(operator){
        case '+':
          newResult = parseFloat(result) + parseFloat(numberOne)
          break
        case '-':
          newResult = parseFloat(result) - parseFloat(numberOne)
          break
        case 'x':
          newResult = parseFloat(result) * parseFloat(numberOne)
          break
        case '/':
          newResult = parseFloat(result) / parseFloat(numberOne)
          break
      }
      setResult(newResult.toString())
      setOperator(value)
      setNumberOne(newResult.toString())
      setUserInput(newResult.toString() + ' ' + value + ' ')
    }
  }

  return (
    <main className="app">
      <div className="row">
        <Panel userInput={userInput} result={result} numberOne={numberOne} handleClick={handleClick}/>
      </div>
    </main>
  )
}

export default App
