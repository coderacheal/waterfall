import React from 'react';

const Login = () => (
  <div className='loginDiv'>
    <form action="">
      <input type="text" placeholder='Enter your email' className='login_inputs'/><br />
      <input type="text" placeholder='Enter your password' className='login_inputs'/><br />
      <button className='submit-login-credentials'>Log in</button>
    </form>
  </div>
);

export default Login;
