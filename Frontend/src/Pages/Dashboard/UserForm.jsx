import { useStateContext } from "../../Contexts/ContextProvider";
import axiosClient from "../../axios-client"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

  export default function UserForm(){
    let {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading]=useState(false)
    const [errors, setErrors] = useState(null)
    const {setNotification} = useStateContext()
    const [user, setUser] = useState({
      id:null,
      name:'',
      email:'',
      
      password:'',
      password_confirmation:''
    })   

    if(id){
       // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(()=>{
        setLoading(true)
        axiosClient.get(`/users/${id}`)
        .then(({data})=>{
          setLoading(false)
          setUser(data)
        })
        .catch(()=>{
          setLoading(false)
        })
      },[id])
    }

    const onSubmit = ev=>{
      ev.preventDefault();
      if(user.id){
        axiosClient.put(`/users/${user.id}`, user)
        .then(()=>{
          setNotification('User was successfully updated')
          console.log(user);

          navigate('/users')
        })
        .catch(err =>{
          const response = err.response;
          if(response && response === 422){
            setErrors(response.data.errors)
          }

        })
      }else{
        axiosClient.post('/users', user)
        .then(()=>{
          setNotification('User was successfully created')

          navigate('/users')
        })
        .catch(err =>{
          const response = err.response;
          if(response && response === 422){
            setErrors(response.data.errors)

          }
  
        })
      }
    }
    return(
       <>
        <div className="m-8 text-2xl font-semibold">
          {user.id && <h1>Update User: {user.name}</h1>}
          {!user.id && <h1>New User</h1>}
        </div>
        <div className="">
        {loading &&(
          <div>Loading...</div>
        )}
        {errors && <div className="alert">
          {Object.keys(errors).map(key =>(
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>}
<div className="flex justify-center ">
        {!loading &&
          <form onSubmit={onSubmit} className="flex w-[70%]  flex-col m-3 rounded shadow-lg p-10 border space-y-4">

            <input className="p-2  border rounded" value={user.name} onChange={ev =>setUser({...user, name: ev.target.value})} placeholder="name"/>
            <input className="p-2  border rounded" value={user.email} onChange={ev =>setUser({...user, email: ev.target.value})} placeholder="email"/>
           
           
            <input type="password" className="p-2  border rounded" onChange={ev =>setUser({...user, password: ev.target.value})} placeholder="password"/>
            <input type="password" className="p-2  border rounded" onChange={ev =>setUser({...user, password_confirmation: ev.target.value})} placeholder="password Confirmation"/>
            <button className="p-2 rounded bg-green-600">Update</button>
            </form>
        }

        </div>    
        </div>
       </>
    )
  }