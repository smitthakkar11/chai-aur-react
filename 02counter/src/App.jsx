import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  let [counter,setCounter] = useState(15)
//  let counter = 15;

 const addValue = ()=>{
  console.log("value added",counter)
  // counter = counter+1        //by using directly,problem in UI updation  ==> handled by react hooks
  setCounter(counter+1)    //by the help of react hooks we can easily update the value in UI
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)
  // setCounter(counter+1)      this means updating the same counter, so only one time incremented
  setCounter(prevCounter => prevCounter+1)  
  setCounter(prevCounter => prevCounter+1)  
  setCounter(prevCounter => prevCounter+1)  
  setCounter(prevCounter => prevCounter+1)  // now ans will print as 19

 }
 const removeValue = ()=>{
  console.log("value removed",counter)
  setCounter(counter-1)
 }
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>Counter value : {counter}</h2>
   <button
    onClick={addValue}    //not addValue() as we want to execute it when button is clicked (pass by reference)
   >Add value {counter}</button>
   <br></br>
  <button
  onClick={removeValue}>Remove value {counter}</button>
   </>
  )
}

export default App
