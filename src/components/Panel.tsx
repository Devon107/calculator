import Display from  './Display'
import Button from './Button'
type Props = {
    userInput: string
    result: string
    numberOne: string
    handleClick: (value: string) => void
}

export default function Panel({userInput, result, numberOne, handleClick}:Props){
    return(
        <>
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
        </>
    )
}