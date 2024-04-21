import {Outlet,Navigate} from "react-router-dom";
import Sidebar from "../components/Sidebar";

import { useStateContext } from "../Contexts/ContextProvider";
import axiosClient from "../axios-client";
import {useEffect} from "react";



export default function AdminLayout(){

    const {user, token, setUser ,setToken, notification} = useStateContext();
    
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
      

    
   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect( () =>  {
     axiosClient.get('/user')
      .then(({data}) => {
        setUser(data)
        console.log(data)
    })
    },[setUser]) 

    

    

    return( 
        <div id="AdminLayout" className="flex">
            <Sidebar/>

            <div className="w-full">
            <div>
            <nav className="h-14 bg-gray-200 w-full p-3 px-6 flex justify-between">
            Dashboard
                <div>
               {user.name}
               <button onClick={onLogout} className="p-2">Logout</button>
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