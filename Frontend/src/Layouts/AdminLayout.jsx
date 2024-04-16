import {Outlet,Navigate} from "react-router-dom";
import Sidebar from "../components/Sidebar";

import { useStateContext } from "../Contexts/ContextProvider";
import axiosClient from "../axios-client";

import { useEffect } from "react";


export default function AdminLayout(){

    const {user, token,setUser,setToken, notification} = useStateContext();

    if(!token){
        return <Navigate to="/login"/>
    }
    const onLogout = ev => {
        ev.preventDefault()
    
        axiosClient.post('/logout')
          .then(() => {
            setUser({})
            setToken(null)
          })
      }
   useEffect( ()=>  {
    axiosClient.get('/user')
    .then(({data}) => {
    setUser(data)
    })
    }, [])

    

    return( 
        <div className="flex">
            <Sidebar/>

            <div className="w-full">
            <div>
            <nav className="h-14 bg-gray-200 w-full p-3 px-6 flex justify-between">
                Dashboard
                <div>
                {user.name}
                <a href="#" onClick={onLogout} className="p-2">Logout</a>
                </div>
            </nav>
        </div>
                <main className="p-5">
                    <Outlet/>
                </main>
                {notification &&
                    <div className="notification">
                      {notification}
                    </div>
                  }
            </div>
        </div>
    )
}