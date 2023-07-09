import React from "react";
import * as Components from './Components';
import { FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdWavingHand } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { MdLockOutline } from 'react-icons/md';

function App() {
    const [signIn, toggle] = React.useState(true);
    return (
        <main className="relative bg-white overflow-hidden w-[80%] max-w-full min-h-[400px] h-[600px] shadow-2xl mx-auto mt-10 mb-10">
            <Components.SignUpContainer signIn={signIn} className="absolute top-0 left-0 h-full w-1/2 opacity-0 transition-all duration-500 ease-in-out">
                <div className="text-left font-bold ml-3">
                    BYTE
                </div>
                <div className="flex bg-white justify-center items-center flex-col h-full text-center px-[50px]">
                    <div className="m-0 mb-8 text-3xl">Create Account</div>
                    <div className="flex flex-col items-center ">
                        <div className="bg-gray-100 w-96 p-2 flex items-center mb-2 rounded-sm">
                            <BsPerson className="text-gray-400 m-2 text-lg " />
                            <input type="name" placeholder="Enter your full name" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-96 p-2 flex items-center mb-2 rounded-sm">
                            <FiMail className="text-gray-400 m-2 text-lg " />
                            <input type="email" placeholder="Enter your email" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-96 p-2 flex items-center mb-2 rounded-sm">
                            <MdLockOutline className="text-gray-400 m-2 text-lg" />
                            <input type="password" placeholder="Create Password" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-gray-100 w-96 p-2 flex items-center mb-8 rounded-sm">
                            <MdLockOutline className="text-gray-400 m-2 text-lg " />
                            <input type="password" placeholder="Confirm Password" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <button className="border-[#1535c1] text-white bg-gradient-to-bl from-blue-900 via-blue-500 to-blue-900 text-1xl font-bold px-11 py-2 uppercase hover:bg-gradient-to-tl rounded-3xl active:scale-95 focus:outline-none mt-3">Sign Up</button>
                </div>
            </Components.SignUpContainer>

            <Components.SignInContainer signIn={signIn} className="absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ease-in-out">
                <div className="text-left font-bold ml-3">
                    BYTE
                </div>
                <div className="flex bg-white justify-center items-center flex-col h-full text-center px-[50px]">
                    <div className="m-0 mb-6 text-3xl">Login to Account </div>
                <div className="flex justify-center my-2 text-gray-400">
                    <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                        <FaFacebookF className="text-md" />
                    </a>
                    <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                        <FaGoogle className="text-md" />
                    </a>
                    <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                        <FaLinkedinIn className="text-md" />
                    </a>
                    <a href="#" className="border-2 border-gray-400 rounded-full p-3 mx-1 hover:border-gray-700 hover:text-gray-700">
                        <FaTwitter className="text-md" />
                    </a>
                </div>
                    <p className="text-gray-400">OR</p>
                    <p className="text-gray-400 my-4"> Use your Email instead.</p>
                    <div className="w-96 flex flex-col items-center">
                        <div className="w-96 bg-gray-100 p-2 flex mb-3 rounded-sm">
                            <FiMail className="text-gray-400 m-2 text-md " />
                            <input type="email" placeholder="Enter your Email" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <div className="w-96 flex flex-col items-center">
                        <div className="w-96 bg-gray-100 p-2 flex mb-3 rounded-sm">
                            <MdLockOutline className="text-gray-400 m-2 text-lg" />
                            <input type="password" placeholder="Enter your Password" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <div className="flex justify-center mb-6 mt-2 gap-28">
                    <label className="flex items-center text-sm cursor-pointer"><input type="checkbox" name="remember" className="mr-1 cursor-pointer" />
                        Remember Me
                    </label>
                    <a href='#' className="text-[#333] text-sm">Forgot your password?</a>
                    </div>
                    <button className="border-[#1535c1] text-white bg-gradient-to-bl from-blue-900 via-blue-500 to-blue-900 text-1xl font-bold px-11 py-2 uppercase hover:bg-gradient-to-tl rounded-3xl active:scale-95 focus:outline-none mt-3">Log In</button>
                </div>
            </Components.SignInContainer>

            <Components.OverlayContainer signIn={signIn} className="absolute top-0 left-1/2 h-full w-1/2 overflow-hidden transition-all duration-500 ease-in-out">
                <Components.Overlay signIn={signIn} className="relative text-white h-full transition-transform duration-500 ease-in-out bg-cover bg-no-repeat translate-x-0 -left-full w-[200%]">

                    <Components.LeftOverlayPanel signIn={signIn} className="bg-gradient-to-tr from-blue-900 via-blue-500 to-blue-900">
                        <div className="m-0 font-bold text-3xl">Welcome Back!</div>
                        <div className="border-2 w-full border-white inline-block mb-2 mt-2 "></div>
                        <p className="text-md font-normal mt-5 text-gray-100">Account already exists ?</p>
                        <p className="text-md font-normal mb-10 text-gray-100">Get yourself logged in and keep exploring.</p>
                        <button onClick={() => toggle(true)} className="bg-transparent text-1xl border border-white hover:bg-white hover:text-blue-600 px-11 py-2 rounded-3xl font-bold uppercase">
                            Log In
                        </button>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signIn={signIn} className="right-0 bg-gradient-to-tl from-blue-900 via-blue-500 to-blue-900">
                        <div className="text-center text-3xl animate-shake"><MdWavingHand /></div>
                        <div className="m-0 font-bold text-3xl">Hello, User!</div>
                        <div className="border-2 w-full border-white inline-block mb-2 mt-2 "></div>
                        <p className="text-md font-normal mt-5 text-gray-100">Don't have an account yet ?</p>
                        <p className=" text-md font-normal mb-10 text-gray-100">Enter Your personal details and start your journey with us.</p>
                        <button onClick={() => toggle(false)} className="bg-transparent text-1xl border border-white hover:bg-white hover:text-blue-600 px-11 py-2 rounded-3xl font-bold uppercase">
                            Sign Up
                        </button>
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </main>
    )
}

export default App;