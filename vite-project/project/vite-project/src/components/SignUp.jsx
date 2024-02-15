import React, { useState } from 'react';
import './SignUp.css'; // Assuming you have a signup.css file
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({
      name: '',
      username: '',
      email: '',
      password: '',
    });

    // Simple name validation
    if (!formData.name.trim()) {
      const errorMessage = 'Please enter your name ❌.';
      setErrors((prevErrors) => ({ ...prevErrors, name: errorMessage }));
      window.alert(errorMessage);
      return;
    }

    // Simple username validation
    if (!formData.username.trim()) {
      const errorMessage = 'Please enter a username ❌.';
      setErrors((prevErrors) => ({ ...prevErrors, username: errorMessage }));
      window.alert(errorMessage);
      return;
    }

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

    // If all fields are valid, you can proceed with sign-up actions
    // You can add your sign-up logic here
    window.alert('Sign up successful! ✅');
  };

  return (
    <div id="div1" className="max-w-md relative flex flex-col p-4 rounded-md text-black ">
      <div id="div2" className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Create an Account on <span className="text-[#7747ff]">App</span>
      </div>
      <form className="flex flex-col gap-3" onSubmit={handleSignUpSubmit}>
        <div className="block relative">
          <label htmlFor="name" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="block relative">
          <label htmlFor="username" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>
        <div className="block relative">
          <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
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
          <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
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
        <button type="submit" id='btn' className=" w-max m-auto px-6 py-2 rounded text-white text-sm font-normal mt-3 mb-3">
          Sign Up
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Already have an account?{' '}
        <Link to='/login'>
          <a className="text-sm text-[#7747ff]">
          Log in here
        </a>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
