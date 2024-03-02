import React, { useState } from 'react'
import './Calculater.css'
import { Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Calculater() {

    let [display, setdisplay] = useState(0)
    let [waitingnum, setwaitingnum] = useState(false)
    let [firstnum, setfirstnum] = useState(null)
    let [operater, setoperater] = useState(null)

    const handleNumberClick = (num) => {
        if (display == 0 || waitingnum) {
            setdisplay(String(num))
            setwaitingnum(false)
        }
        //limit of digit
        else if (display.length < 15) {
            setdisplay(display + num)
        }
    }

    const handleOperatorClick = (optr) => {
        if (firstnum === null) {
            setfirstnum(parseFloat(display))
        }
        setoperater(optr)
        setwaitingnum(true)
    }
    const calculate_result = () => {
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

            // case '%':
            //     result = (firstnum / secondnum)*100
            //     break;
            default:
                return;
        }
        setdisplay(parseFloat(result))
        setfirstnum(result)
    }

    const handleEqualsClick = () => {
        calculate_result()
        setoperater(0)
        setwaitingnum(false)
    }
    const handleClearClick = () => {
        setdisplay(0)
        setfirstnum(null)
        setoperater(null)
        setwaitingnum(false)
    }

    const handleDlteClick = () => {
        if (display.length === 1) {
            setdisplay('0');
        } else {
            setdisplay(display.slice(0, -1));
        }
    }
    return (
        <div className='container-md div'>
            <Container className="div-container">
                <div className='dis-div row-space '>{display}</div>
                <Row className="justify-content-between ">
                    <Col xs={6} sm={6} md={6} lg={6}><Button variant="outline-danger btn-AC " onClick={handleClearClick}>AC</Button>{' '}</Col>
                    <Col xs={6} sm={6} md={6} lg={6}><Button variant="outline-warning btn-DEl" onClick={handleDlteClick}>DEl</Button>{' '}</Col>
                </Row>
                <Row className="justify-content-between row-space">
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(7)}>7</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(8)}>8</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(9)}>9</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleOperatorClick('/')}>/</Button>{' '}</Col>
                </Row>
                <Row className="justify-content-between row-space">
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(4)}>4</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(5)}>5</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(6)}>6</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleOperatorClick('*')}>X</Button>{' '}</Col>
                </Row>
                <Row className="justify-content-between row-space">
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(1)}>1</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(2)}>2</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(3)}>3</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleOperatorClick('-')}>-</Button>{' '}</Col>
                </Row>
                <Row className="justify-content-between row-space">
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick(0)}>0</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleNumberClick('.')}>.</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-success btn-circle" onClick={handleEqualsClick}>=</Button>{' '}</Col>
                    <Col xs={3} sm={3} md={3} lg={3}><Button variant="outline-light btn-circle" onClick={() => handleOperatorClick('+')}>+</Button>{' '}</Col>
                </Row>
            </Container>
        </div>

    )
}

export default Calculater
{/* <div className='row-space'></div> */ }
