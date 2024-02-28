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
                <Display value={userInput === '' ? '0': userInput}/>
                </div>
                <div className="row">
                <Button className="gray-blue" name="1" onClick={() => handleClick('1')}/>
                <Button className="gray-blue" name="2" onClick={() => handleClick('2')}/>
                <Button className="gray-blue" name="3" onClick={() => handleClick('3')}/>
                </div>
                <div className="row">
                <Button className="gray-blue" name="4" onClick={() => handleClick('4')}/>
                <Button className="gray-blue" name="5" onClick={() => handleClick('5')}/>
                <Button className="gray-blue" name="6" onClick={() => handleClick('6')}/>
                </div>
                <div className="row">
                <Button className="gray-blue" name="7" onClick={() => handleClick('7')}/>
                <Button className="gray-blue" name="8" onClick={() => handleClick('8')}/>
                <Button className="gray-blue" name="9" onClick={() => handleClick('9')}/>
                </div>
                <div className="row">
                <Button className="yellow" name="C" onClick={() => handleClick('C')}/>
                <Button className="gray-blue" name="0" onClick={() => handleClick('0')}/>
                <Button className="gray-blue" name="." onClick={() => handleClick('.')}/>
                </div>
            </div>
            <aside className="column">
                <Button className="yellow" name="+" onClick={() => handleClick('+')}/>
                <Button className="yellow" name="-" onClick={() => handleClick('-')}/>
                <Button className="yellow" name="x" onClick={() => handleClick('x')}/>
                <Button className="yellow" name="/" onClick={() => handleClick('/')}/>
                <Button className="yellow" name="=" onClick={() => handleClick('=')}/>
            </aside>
        </>
    )
}