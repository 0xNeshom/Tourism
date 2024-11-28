'use client';
import React from 'react';

import { useState } from 'react';
import { authTypes } from '@/utilities/constants.js';
import Login from '@/components/templates/login-register/Login.js';
import Register from '@/components/templates/login-register/Register';
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
