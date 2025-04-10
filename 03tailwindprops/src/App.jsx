import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "Smit",
    age: 19
  }
  let newArr = [1,2,3,4,5]
  return (
    <>
    <Card username="smit  " />
  <Card username="chaiaurcode " someobj = {myobj} arr = {newArr}/>
  </>
  )
}

export default App
