import React, { useReducer } from 'react'
import './Calculator.css'
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
export const Actions = {
    AddDigit : 'add-digit',
    ChooseOperation : 'choose-operation',
    Clear : 'clear',
    Evaluate : 'evaluate',
    DeleteDigit : 'delete-digit'
}
function reducer(state,{type,payload}){
    switch (type) {
        case Actions.DeleteDigit:
            if(state.overWrite){
                return {
                    ...state,
                    overWrite:false,
                    currentOperand:null
                }
            }
            if(state.currentOperand == null) return state
            if(state.currentOperand.length === 1) return {...state,currentOperand:null}
            return {
                ...state,
                currentOperand : state.currentOperand.slice(0,-1)
            }
        case Actions.AddDigit:
            if(payload.digit === "0" && state.currentOperand === "0")return state
            if(payload.digit === "." && state.currentOperand.includes("."))return state
            if(state.overWrite){
                return{
                    ...state,
                    currentOperand:payload.digit,
                    overWrite:false,
                }
            }
            return {
                ...state,
                currentOperand : `${state.currentOperand || ""}${payload.digit}`,
            }
        case Actions.Clear:
            return {}
        case Actions.ChooseOperation:
            if(state.currentOperand == null && state.previousOperand == null) return state
            if(state.currentOperand == null){
                return{
                    ...state,
                    operation : payload.operation
                }
            }
            if(state.previousOperand == null){
                return{
                    ...state,
                    operation:payload.operation,
                    previousOperand : state.currentOperand,
                    currentOperand : null,
                }
            }
            return{
                ...state,
                previousOperand : evaluate(state),
                operation : payload.operation,
                currentOperand : null
            }
        case Actions.Evaluate:
            if(state.operation == null || state.currentOperand == null || state.previousOperand == null){
                return state;
            }
            return{
                ...state,
                overWrite:true,
                previousOperand : null,
                operation:null,
                currentOperand : evaluate(state)
            }
        default:
            break;
    }
}

function evaluate({previousOperand,currentOperand,operation}){
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(curr)) return "";
    let computation = ""
    switch (operation) {
        case "+":
            computation = prev + curr
            break;

        case "-":
            computation = prev - curr
            break;

        case "*":
            computation = prev * curr
            break;

        case "/":
            computation = prev / curr
            break;
    
        default:
            break;
    }
    return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us",{
    maximumFractionDigit : 0,
})
function formatOperand(operand){
    if(operand == null) return
    const [integer,decimal] = operand.split('.')
    if(decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}` 
}

export default function Calculator() {
    const[{currentOperand,previousOperand,operation},dispatch] = useReducer(reducer,{});
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{formatOperand(previousOperand)}{operation}</div>
                <div className="current-operand">{formatOperand(currentOperand)}</div>
            </div>
            <button className="span-two" onClick={()=>dispatch({type:Actions.Clear})}>AC</button>
            <button onClick={()=>{dispatch({type:Actions.DeleteDigit})}}>DEL</button>
            <OperationButton operation="/" dispatch={dispatch}/>
            <DigitButton digit="1" dispatch={dispatch}/>
            <DigitButton digit="2" dispatch={dispatch}/>
            <DigitButton digit="3" dispatch={dispatch}/>
            <OperationButton operation="*" dispatch={dispatch}/>
            <DigitButton digit="4" dispatch={dispatch}/>
            <DigitButton digit="5" dispatch={dispatch}/>
            <DigitButton digit="6" dispatch={dispatch}/>
            <OperationButton operation="+" dispatch={dispatch}/>
            <DigitButton digit="7" dispatch={dispatch}/>
            <DigitButton digit="8" dispatch={dispatch}/>
            <DigitButton digit="9" dispatch={dispatch}/>
            <OperationButton operation="-" dispatch={dispatch}/>
            <DigitButton digit="." dispatch={dispatch}/>
            <DigitButton digit="0" dispatch={dispatch}/>
            <button className="span-two" onClick={()=>{dispatch({type:Actions.Evaluate})}}>=</button>
        </div>
    )
}
