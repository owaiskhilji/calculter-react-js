import React, { useState } from 'react'
function Calculater() {
    
    let [display, setdisplay] = useState(0)
    let [waitingnum, setwaitingnum] = useState(false)
    let [firstnum , setfirstnum] = useState(null)
    let [operater , setoperater] = useState(null)

    const handleNumberClick = (num) => {
if (display == 0 || waitingnum) {
    setdisplay(String(num))
    setwaitingnum(false)
}
//limit of digit
else if (display.length < 8){
    setdisplay(display+num)
}
    }

    const handleOperatorClick =(optr)=>{
if (firstnum === null) {
    setfirstnum(parseFloat(display))
}
setoperater(optr)
setwaitingnum(true)
    }
    const calculate_result = () =>{
        let secondnum = parseFloat(display)
        let result;
        switch (operater) {
            case '+':
                result = firstnum + secondnum
                break;
            case '-':
                result = firstnum - secondnum
                break;
            case '*':
                result = firstnum * secondnum
                break;
            case '/':
                result = firstnum / secondnum
                break;
        
            case '%':
                result = (firstnum / secondnum)*100
                break;
        
            default:
                return;
        }
        setdisplay(parseFloat(result))
        setfirstnum(result)
    }

    const handleEqualsClick=()=>{
        calculate_result()
        setoperater(0)
        setwaitingnum(false)
    }
    const handleClearClick = () =>{
        setdisplay(0)
        setfirstnum(null)
        setoperater(null)
        setwaitingnum(false)
    }

    const handleDlteClick = () =>{
        setdisplay(display.slice(0,-1))
    }
    return (
        <div>
            <div>{display}</div>
            <button onClick={() => handleNumberClick(7)}>7</button>
            <button onClick={() => handleNumberClick(8)}>8</button>
            <button onClick={() => handleNumberClick(9)}>9</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <br />
            <button onClick={() => handleNumberClick(4)}>4</button>
            <button onClick={() => handleNumberClick(5)}>5</button>
            <button onClick={() => handleNumberClick(6)}>6</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <br />
            <button onClick={() => handleNumberClick(1)}>1</button>
            <button onClick={() => handleNumberClick(2)}>2</button>
            <button onClick={() => handleNumberClick(3)}>3</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <br />
            <button onClick={() => handleNumberClick(0)}>0</button>
            <button onClick={() => handleOperatorClick('.')}>.</button>
            <button onClick={handleEqualsClick}>=</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <br />
            <button onClick={() => handleOperatorClick('%')}>%</button> 
            <button onClick={handleClearClick}>AC</button>
            <button onClick={handleDlteClick}>DEl</button>
        </div>
    )
}

export default Calculater