/* eslint-disable no-undef */

import {
  Card,
 
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useRef,useState } from "react";
import axiosClient from "../../axios-client.js";
import { useStateContext } from "../../Contexts/ContextProvider.jsx";

const Signup = () => {
  
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef=useRef();

  const {setToken} = useStateContext();
  const {setUser} = useStateContext();

  const [errors,setErrors] = useState();

  const onSubmit=(ev)=>{
    ev.preventDefault()
    const payload ={
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation:passwordConfirmationRef.current.value
    }
  console.log(payload)

  
  axiosClient.post('/signup', payload)
  .then(({data}) =>{
    setUser(data.user)
    setToken(data.token )
    console.log(data)
    })
  .catch(err =>{
    const response = err.response;
    if (response && response.status === 422){
       setErrors(response.data.errors)
    }  
  })
 

  }
  return (
    <div className="flex justify-center">
      <Card className="border border-2 mt-20 p-8" color="transparent" shadow={false}>
        <Typography color="gray" className="mt-3 font-bold text-center">
          Enter your details to register.
        </Typography>
        
        { errors && <div className="p-2 bg-red-200 text-sm rounded-xl text-red-900">
        {Object.keys(errors).map(key=>(
          <p key={key}>{errors[key][0]}</p>
        ))}
        </div>
        }
        <form onSubmit={onSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1  flex flex-col ">
            <h3>User Name</h3>
            <input ref={nameRef} placeholder="Full Name"
              className=" border focus:border-2 p-1 mt-1"
            />
            
           <h3 className="mt-3">Email address</h3>
            <input ref={emailRef} placeholder="name@mail.com"
              className=" border focus:!border-t-gray-400 p-1"
            />

            <h3 className="mt-3">Password</h3>
            <input ref={passwordRef} type="password"
              placeholder="********"
              className="  border focus:border-blue-400 p-1"
              
            />
            <h3 className="mt-3">Password Confirmation</h3>
            <input ref={passwordConfirmationRef} type="password"
              placeholder="********"
              className=" border focus:!border-t-gray-400 p-1"
              
            />

          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="font-normal ml-2"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-400"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit"  className="mt-4  bg-buttonColor text-gray-900 w-full p-2 hover:text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            {/* <a href="#" className="font-medium text-gray-900">
              Login
            </a> */}
            <Link to="/login" className="font-medium text-gray-900">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
