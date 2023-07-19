import React from 'react'

const Register = () => {
  return (
    <div className='registerDiv'>
      <form action="" className='registration-form'>
        <input type="text" placeholder='Enter your first name' className='registration-inputs'/><br />
        <input type="text" placeholder='Enter your last name' className='registration-inputs'/><br />
        <input type="email" placeholder='Enter your email' className='registration-inputs'/><br />
        <input type="text" placeholder='Enter your password' className='registration-inputs'/><br />
        <input type="checkbox" value={'I agree to our license and policies?'}/><br />
        <button className='submit-registration-credentials'>Register</button>
      </form>
    </div>
  )
}

export default Register
