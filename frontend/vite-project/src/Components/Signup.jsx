import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userCredentials = {
      name: data.name,
      password: data.password,
      email: data.email,
    };
    try {
      const signingUp = await axios.post("http://localhost:3000/auth/signup", userCredentials);
      console.log(signingUp.data.message);
      toast.success(signingUp.data.message);
      setTimeout(() => {
        window.location.assign('/login');
      }, 1000);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
        console.log('Error response data:', error.response.data.error);
        console.log('Error response status:', error.response.status);
        console.log('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.log('Error request data:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
      console.log('Error config:', error.config);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
    window.location.assign("/")
  };

  return (
    <div>
      {isModalOpen && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 '>
          <div className='relative bg-white w-full max-w-md rounded-lg shadow-lg p-8 max-sm:w-4/5'>
            <RxCross1
              className='absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-800'
              onClick={closeModal}
              size={24}
            />
            <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type="text"
                  placeholder='Enter your name'
                  id='name'
                  className='w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
                  {...register("name", { required: true })}
                />
                {errors.name && <span className='text-red-600 text-sm'>Name is required</span>}
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input
                  type="email"
                  placeholder='Enter your email'
                  id='email'
                  className='w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
                  {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-600 text-sm'>Email is required</span>}
              </div>
              <div>
                <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                <input
                  type="password"
                  placeholder='Enter your password'
                  id='password'
                  className='w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none'
                  {...register("password", { required: true })}
                />
                {errors.password && <span className='text-red-600 text-sm'>Password is required</span>}
              </div>
              <button
                type='submit'
                className='w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300'
              >
                Sign Up
              </button>
            </form>
            <p className='text-center text-sm mt-4'>
              Already have an account?{' '}
              <NavLink to="/login" className='text-blue-600 hover:underline'>
                Log in
              </NavLink>
            </p>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Signup;
