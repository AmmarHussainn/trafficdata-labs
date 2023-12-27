
'use client'
import { authbanner } from '@/assets';
import SvgIcons from '@/assets/SvgIcons';
import Image from 'next/image';
import React, { useState , useEffect} from 'react';
import axios from 'axios'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const page = () => {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailExists, setEmailExists] = useState(false); 
  const [loginScreen ,setLoginScreen] = useState(false);
  let router = useRouter();
  useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log('token',token)
    if(token){
      router.push('/dashboard')
    }

  },[])
 
  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('http://18.227.228.50:3000/users/register', {
        email,
        businessName,
        password : password.toString(),
      });
      console.log('Registration successful:', response.data); 
      localStorage.setItem('token', response.data.token);    
      localStorage.setItem('userId', response.data.data._id);  
      router.push('/dashboard')  
    } catch (error) {
      if (error.response) {
        console.error('Registration failed:', error.response.data.message);
           
            if (error.response.data.message.includes('User with this email already exists.')) {
              setEmailExists(true);
            } else {
              setEmailExists(false);
            }
      } else if (error.request) {
        console.error('No response received from the server.');
      } else {
        console.error('Error in request setup:', error.message);
      }
    }
  };

 const handleSignupClick = () => {

  setLoginScreen(false);
  // Additional logic you want to execute when login is clicked
}
  const handleLoginClick = () => {
    setLoginScreen(true);
    // Additional logic you want to execute when login is clicked
  };
  
  return (
    <>
      <div className='min-h-screen flex flex-wrap-reverse  lg:flex-nowrap items-center justify-center gap-8  md:justify-start '>
        <Image
          src={authbanner}
          alt='imagebanner'
          className='w-full max-w-[100%] lg:max-w-[40%] h-[100vh]'
        />
        {
          !loginScreen ?
          <form
          className='bg-white  rounded px-8  pb-8 mb-4 w-full max-w-[100%] lg:max-w-[50%]'
        >
            <div className='flex justify-end gap-2 pb-20'><p>Already Registered </p> <a className='underline text-primary cursor-pointer'  onClick={handleLoginClick}>Log in</a></div>

          <p>We’re glad to have you! 👋</p>
          <h2 className='text-2xl font-bold mb-6 '>Create your Account</h2>

          <div className='mb-4 mt-7 relative'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            {!emailExists ?  <div className='flex items-center absolute inset-y-0 top-7 right-5 pl-1'>
              <SvgIcons.Correct className='h-6 w-6 text-gray-500' />
            </div> : null
            }
           
            <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            emailExists ? 'border-red-500' : ''
          }`}
          id='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailExists ? <p className='text-red-600 text-sm'>User with this email already exists. </p> : null}
          </div>
          <div className='mb-4 mt-7 relative'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='businessname'
            >
              Business Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='businessname'
              type='text'
              placeholder='Acme Corp'
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>

          <div className='mb-4 relative'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>

            <input
              className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='absolute right-5 top-9'>
              <SvgIcons.Hidden className='h-6  w-6 text-gray-500' />
            </div>
          </div>
          <div className='mb-6 relative'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='ConfirmPassword'
            >
              Confirm Password
            </label>

            <input
              className=' shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='confirmPassword'
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className='absolute right-5 top-9'>
              <SvgIcons.Hidden className='h-6  w-6 text-gray-500' />
            </div>
          </div>

          <button onClick={(e)=>handleSubmitSignUp(e)} className='w-full bg-primary text-white py-3 rounded-md'>
            Create Account
          </button>
        </form> : null
        }
       
        {
          loginScreen ? 
          <form className="bg-white  rounded px-8 6 pb-8 mb-4 w-full max-w-[100%] lg:max-w-[50%]">
              <div className='flex justify-end gap-2 pb-20'><p>Not registered?  </p> <a className='underline text-primary cursor-pointer'  onClick={handleSignupClick}>Create an account</a></div>

          <p>We’re glad to have you! 👋</p>
        <h2 className="text-2xl font-bold mb-6 ">Create your Account</h2>

        <div className="mb-4 mt-7 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="flex items-center absolute inset-y-0 top-7 right-5 pl-1">
            <SvgIcons.Correct className="h-6 w-6 text-gray-500" />
          </div>
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
          <div className="absolute right-5 top-9">
            <SvgIcons.Hidden className="h-6  w-6 text-gray-500" />
          </div>
        </div>
      

         <button className='w-full bg-primary text-white py-3 rounded-md'>Login</button>

      
      </form> : null
        }
      </div>
    </>
  );
};

export default page;

