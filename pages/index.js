import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Login from './login';
import SignUp from './signup';

export const ModeContext = React.createContext();

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Login />
    </div>
  );
}
