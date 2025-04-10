import { useCallback, useState, useEffect,useRef} from 'react'
import './App.css'

function App() {
const [length,setLength] = useState(8);
const [numberAllowed,setNumberAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password,setPassword] = useState("")

//useRef hook
const passwordRef = useRef(null);

//useCallback(fn,dependencies)   === cashe a function between re-renders

const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*(){}[]|±§=+-_?/<>,."

  for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    
  }
  setPassword(pass)

}, [length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard = useCallback(() =>{
  passwordRef.current?.select()
  // passwordRef.current?.setSelectionRange(0, 3)
  window.navigator.clipboard.writeText(password)
},[password])

//useEffect hook 
useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-32 py-32 text-white bg-gray-700 text-center'>PASSWORD GENERATOR
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4 my-3 px-2 bg-white text-gray-600 "'>
        <input 
        type="text"
        value={password}
        className = 'outline-none w-full py-3 px-2'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none w-full max-w-md mx-auto shadow-md rounded-lg bg-blue-700  text-white px-3'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'> 
        <div className='flex items-center gap-x-1'>
          <input type="range" 
            min = {6}
            max ={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label> Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked = {charAllowed}
        id='charecterInput'
        onChange={()=>{
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>

      </div>
    </div>
    </>
  )

}
export default App


/* 
NOTES:
 usecallback - array is containing dependencies("method optimization")
 setpassword is useful in memoisation not running the code(store in cache)
DO NOT COMPARE THE ARRAY OF USECALLBACK AND USEEFFECT ARRAY
useeffect - array contains ("if any change then re-run it") 
useref - reference hook used in copy  (when we wan to take a reference of an entity)
it is used to highlight
for copying in react we use window.navigator.clipboard.writeText(password)
*/