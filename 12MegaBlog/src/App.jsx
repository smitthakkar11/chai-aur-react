import './App.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from "./store/authSlice";
import { Footer, Header } from './coponents';
import { Outlet } from 'react-router-dom';

function App() {
  // // console.log(process.env.REACT_APP_APPWRITE_URL);   // for react-create
  // console.log(import.meta.env.VITE_APPWRITE_URL);   // for vite

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(fn,deprencies)

  useEffect(() => {
      authService.getCurrentUser()

      .then((userData) => {
        if(userData) {
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })

      .catch((error) => {
          console.log(error)
      })

      .finally(() => {
          setLoading(false)
      })

  },[])

  return !loading ? (
    <div className='min h-screen flex flex-wrap content-between bg-gray-400 '>
          <div className='w-full block'>
            <Header />
            <main>
            TODO:  {/* <Outlet /> */}
            </main>
            <Footer />
          </div>
    </div>
  ) : null
}

export default App
