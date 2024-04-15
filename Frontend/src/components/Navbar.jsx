
import { useStateContext } from "../Contexts/ContextProvider";


export default function Navbar(){
    const{user}=useStateContext()
    const onLogout = (ev)=>{
        ev.prevenTDefault()
    }
    return (
        <div>
            <nav className="h-14 bg-gray-200 w-full p-3 px-6 flex justify-between">
                Dashboard
                <div>
                {user.name}
                <a href="#" onClick={onLogout} className="p-2">Logout</a>
                </div>
            </nav>
        </div>
    )
}