import {Outlet,Navigate} from "react-router-dom"
import Header from "../components/Header"

import { useStateContext } from "../Contexts/ContextProvider"

export default function GuestLayouts(){

    const{token} = useStateContext()
    if(token){
        return <Navigate to='/'/>
    }
    return(
        <div className="dark:bg-gray-700">
            <Header/>

            <main>
             <Outlet/>
            </main>
        </div>
    )
}