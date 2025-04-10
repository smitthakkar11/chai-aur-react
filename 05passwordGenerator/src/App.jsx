import React,{ useState, useCallback } from 'react'
import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed,setNumberAllowed] = useState(false)
//   const [charAllowed,setCharAllowed] = useState(false)
//   const [password,setPassword] = useState("")

//   const passwordGenerator = useCallback(()=>{
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if(numberAllowed) str += "0123456789" 
//     if(charAllowed) str += "!@#$%^&*(){}[]§±`~-_+="

//     for (let i = 1; i <= array.length; i++){
//     let char = Math.floor(Math.random() * str.length + 1)
//     pass = str.charAt(char)
//   }
//     setPassword(pass)
//   } ,[length,numberAllowed,charAllowed,setPassword])


//   return (
//     <>
//     <div className='w-full flex max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange bg-white outline'>
//     <input
//     type='text'
//     value={password}
//     className='outline-none w-full py-1 px-3'
//     placeholder='password'
//     readOnly
//     />
    
//     </div>
//     </>
//   )
// }

// export default App
 
// //useCallback(fn, dependencies) => it is used to create function defination between re-renders


function App() {
  const[count,setCount] = useState(0)

  return (
    <>
    <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}