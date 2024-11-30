'use client';
import React from 'react';

import { useState } from 'react';
import { authTypes } from '@/utilities/constants.js';
import { useDispatch,useSelector } from 'react-redux';
import {login} from '@/redux/reducer'
import Login from '@/components/login-register/Login';
import Register from '@/components/login-register/Register';
const Page = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showloginForm = () => setAuthType(authTypes.LOGIN);
  console.log('Login Button Clicked');
  console.log('Register Button Clicked');
  return (
    <div>
      <div>
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showloginForm={showloginForm} />
        )}
      </div>
    </div>
  );
};

export default Page;
