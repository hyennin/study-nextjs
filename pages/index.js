import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Login from './login';
import SignUp from './signup';

export const ModeContext = React.createContext();

export default function Home() {
  // const [mode, setMode] = useState("");
  const router = useRouter();

  /*
  useEffect(() => {
    axios.get("http://localhost:3001/authcheck")
      .then((res) => {        
        if (res.isLogin === true) setMode("WELCOME");
        else setMode("LOGIN");
      });
  }, []); 
  
  useEffect(() => {
    if(mode==="LOGIN"){
      router.push('/login');
    } else if (mode === "SIGNUP") {
      router.push('/signup');
    } else if (mode === "WELCOME") {
      router.push('/community');;
    }
  }, [mode]); 
  */

  return (
    <div>
      <Login />
      {/* <SignUp /> */}
    </div>
  );
}
