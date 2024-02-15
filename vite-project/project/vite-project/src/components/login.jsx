import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({
      email: '',
      password: '',
    });

    // Simple email validation
    if (!formData.email || !formData.email.includes('@')) {
      const errorMessage = 'Please enter a valid email address ❌.';
      setErrors((prevErrors) => ({ ...prevErrors, email: errorMessage }));
      window.alert(errorMessage);
      return;
    }

    // Simple password validation
    if (!formData.password || formData.password.length < 6) {
      const errorMessage = 'Password must be at least 6 characters ❌.';
      setErrors((prevErrors) => ({ ...prevErrors, password: errorMessage }));
      window.alert(errorMessage);
      return;
    }

    // If both email and password are valid, you can proceed with further actions
    window.alert('Login successful! ✅');
  };

  return (
    <div id="div1" className="max-w-md relative flex flex-col p-4 rounded-md text-black ">
      <div id="div2" className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Welcome back to <span className="text-[#7747ff]">App</span>
      </div>
      <div id="div3" className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Log in to your account
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleLoginSubmit}>
        <div id='div4' className="block relative">
          <label
            htmlFor="email" id='label'
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <input
            type="text" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="block relative">
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2" id='label'
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <button
          type="submit" id='btn'
          className=" w-max m-auto px-6 py-2 rounded text-white text-sm font-normal mt-3 mb-3"
        >
          Submit
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Don’t have an account yet?{' '}
        <Link to='/signup'>
          <a >
          Sign up for free!
        </a>
        </Link>

      </div>
    </div>
  );
};

export default Login;
