import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({
    children,
    authentication = true,
}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)
    useEffect(() => {
        //Easy step 1
        // useEffect(() => {
        //     if (authentication) {
        //         navigate("/");
        //     } else {
        //         navigate("/login");
        //     }
        //     setLoader(false);
        // }, [authStatus, authentication, navigate]);

        //easy step 2
        // useEffect(() => {
        //     if (authStatus === true) {
        //        navigate("/");
        //     } else if(authStatus === false){ {
        //         navigate("/login");
        //     }
        //     setLoader(false);
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,authentication,navigate])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

// This is the layout for the authenticated pages
//protcted container


/*
First Condition (If):
if (authentication && authStatus !== authentication) {
    navigate("/login");
}
When authentication is true
AND authStatus is different from authentication
→ Redirects to /login


Second Condition (Else If):
else if (!authentication && authStatus !== authentication) {
    navigate("/");
}
When authentication is false
AND authStatus is different from authentication
→ Redirects to / (home page)


Final Line:
setLoader(false);
Stops loading state after navigation.
*/