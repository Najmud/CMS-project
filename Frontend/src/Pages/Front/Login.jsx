


import { useRef,useState } from "react";
import axiosClient from "../../axios-client.js";
import { useStateContext } from "../../Contexts/ContextProvider.jsx";
import { Link } from "react-router-dom";

export default function Login ()  {

  const emailRef = useRef()
  const passwordRef = useRef()
  const {setToken} = useStateContext()
  const {setUser} = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit=(ev)=>{
    ev.preventDefault()
    const payload ={
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    setErrors(null)
   console.log(payload)
  axiosClient.post('/login',payload)
  .then(({data}) =>{
    setUser(data.user)
    setToken(data.token )
  })
  .catch(err =>{
    const response = err.response;
    if (response && response.status === 422) {
      if (response.data.errors){
        setErrors(response.data.errors)
      }else{
        setErrors({
          email:[response.data.message]
        })
      }
    }
  })
 

  }
  return (
    <div>
   
      <div className="flex justify-center  items-center h-screen">
        <form className="bg-white border shadow-md w-[400px] rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit} >

      
            <h1 className="block text-gray-700 text-lg font-bold mb-6">Log Into Your Account</h1>
         
                      
            { errors && <div className="p-2 bg-red-200 text-sm rounded-xl text-red-900">
            {Object.keys(errors).map(key=>(
              <p key={key}>{errors[key][0]}</p>
            ))
          }
          </div>
        }



          <div className="mb-4">

            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Email
            </label>

            <input
              ref={emailRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your email" />

          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Password
            </label>

            <input
              ref={passwordRef}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password" />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-buttonColor hover:text-gray-600 text-gray-800 font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" >
              Log In
            </button>
          </div>
          <p className="mt-2 text-gray-400 ">Not Registered?    <Link className="ml-2 text-blue-600 font-bold" to='/signup'>Create an Account</Link>  </p> 
        </form>
      </div>
    </div>
  );
}


