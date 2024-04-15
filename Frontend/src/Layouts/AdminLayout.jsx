import {Outlet,Navigate} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useStateContext,setUser } from "../Contexts/ContextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function AdminLayout(){

    const{token}=useStateContext()

    if(!token){
        return <Navigate to="/login"/>
    }

    useEffect(()=>{
        axiosClient.get('/user')
        .then(({data})=>{
            setUser(data)
        })
    },[])


    return( 
        <div className="flex">
            <Sidebar/>

            <div className="w-full">
                <Navbar/>
        
                <main className="p-5">
                    <Outlet/>
                </main>

            </div>
        </div>
    )
}