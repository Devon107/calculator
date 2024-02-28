import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Button from './components/Button'

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
      setNumberOne('')
      setUserInput(newResult.toString() + ' ' + value + ' ')
    }
  }

  return (
    <main className="app">
      <div className="row">
        <div className="column">
          <div className="display">
            <Display value={userInput}/>
            <Display value={result || numberOne || '0'}/>
          </div>
          <div className="row">
            <Button name="1" onClick={() => handleClick('1')}/>
            <Button name="2" onClick={() => handleClick('2')}/>
            <Button name="3" onClick={() => handleClick('3')}/>
          </div>
          <div className="row">
            <Button name="4" onClick={() => handleClick('4')}/>
            <Button name="5" onClick={() => handleClick('5')}/>
            <Button name="6" onClick={() => handleClick('6')}/>
          </div>
          <div className="row">
            <Button name="7" onClick={() => handleClick('7')}/>
            <Button name="8" onClick={() => handleClick('8')}/>
            <Button name="9" onClick={() => handleClick('9')}/>
          </div>
          <div className="row">
            <Button name="C" onClick={() => handleClick('C')}/>
            <Button name="0" onClick={() => handleClick('0')}/>
            <Button name="." onClick={() => handleClick('.')}/>
          </div>
        </div>
        <aside className="column">
            <Button name="+" onClick={() => handleClick('+')}/>
            <Button name="-" onClick={() => handleClick('-')}/>
            <Button name="x" onClick={() => handleClick('x')}/>
            <Button name="/" onClick={() => handleClick('/')}/>
            <Button name="=" onClick={() => handleClick('=')}/>
        </aside>
      </div>
    </main>
  )
}

export default App
