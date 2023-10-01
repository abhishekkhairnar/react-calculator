// import React, { useContext, useEffect, useReducer, useRef, useState,use, createContext } from 'react'

// export default function Hooks() {
//     // State hook
//     // const[index,setIndex] = useState(0);
//     // Recuder hooks come inside state hooks
//     /* here index is a state variable whose default state is set to 0 using use state function whenever we want to change state of index variable then we have to invoke setIndex method and pass the value to be updated */

//     // Context Hooks
//     /* Context hooks lets component to recieve information from distant parents without passing it as props */
//     // const info = useContext("information");

//     // Reference Hooks
//     /* Refs let a component hold some information that isn't used for rendering, like DOM node */
//     // const inputRef = useRef(null);

//     // Effect Hooks
//     /* Effect lets component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using different UI library, and other non-react code 
    
//         There are two rarely used variations of useEffect with differences in timing:
//         1)useLayoutEffect - fires before browser repaints the screen. You can measure layout here
//         2)useInsertionEffect - fires before react makes changes to DOM. libraries can insert dynamic css here
    
//     */
//     // function chatRoom({roomId}){
//     //     useEffect(()=>{
//     //         const connection = createConnection(roomId);
//     //         connection.connect();
//     //         return ()=> connection.disconnect();
//     //     },[roomId])
//     // }

//     // Performance Hooks
//     /*
//     A way to optimize the re-rendering performance is to skip unnecessary work

//     UseMemo - lets you cache the result of an expensive calculation
//     UseCallback - lets you cache a function defination before passing it down to an optimized component.

//     function TodoList({todos, tab, theme}){
//         const visibleTodos = useMemo(()=> filterTodos(todos, tab),[todos,tab]);
//     }
    
//     Use Transition - lets you mark a state transition as non-blocking and allow other updates to interrupt it.

//     UseDeferredValue - lets you defer updating non-critical part of your UI and lets other parts update first
//     */

//     // Resource Hooks
//     /*
//     Resources can be accessed by components without having them as a part of their state

//     use - lets you read the value of resource like a Promise or context.

//     function MessageComponent({ messagePromise }) {
//         const message = use(messagePromise);
//         const theme = use(ThemeContext);
//     }


//     Other hooks
//     UseDebugValue - lets you customize the label React DevTools displays for your custom hook.

//     useId - lets a component to associate a unique ID with itself. Typically used with accessibility APIs.

//     UseSyncExternalStore - lets a component to suscribe to an external store.
    
//     */

//     const ThemeContext = createContext(null);
    
//     function MessageComponent({messagePromise}){
//         const message = use(messagePromise);
//         const theme = use(ThemeContext);
//     }


//     return (
//         <>

//         </>
//     )
// }
