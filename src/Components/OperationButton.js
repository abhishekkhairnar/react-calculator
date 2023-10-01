import { Actions } from "./Calculator";

export default function OperationButton({operation,dispatch}){
    return <button onClick={()=>dispatch({type:Actions.ChooseOperation,payload:{operation}})}>{operation}</button>
}