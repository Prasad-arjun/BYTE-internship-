import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { SlClose } from 'react-icons/sl';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { GoLocation } from 'react-icons/go'


const Connections = () => {
    return (
        <div className="h-full w-full mb-[550px] ">
            <h1 className="text-center mb-10 text-3xl font-extrabold">Connect with Others!</h1>
            <div className="w-[80%] h-[20%] m-auto grid gap-10 bg-gray-200 rounded-md p-[3rem] ">
                <form action="">
                    <div className="flex rounded-md gap-[80px] bg-white p-5 shadow-lg shadow-grey-700 justify-center items-center ">
                        <div className="flex w-[32%] gap-4 items-center">
                            <BsSearch className="text-[25px] " />
                            <input type="text" placeholder="Search by Domain..." className="bg-transparent text-blue-700 focus:outline-none w-full" />
                        </div>
                        <div className="border h-[40px] border-gray-300 p-0 m-0 "></div>
                        <div className="flex w-[32%] gap-4 items-center">
                            <HiOutlineBuildingOffice2 className="text-[25px] " />
                            <input type="text" placeholder="Search by company..." className="bg-transparent text-blue-700 focus:outline-none w-full" />
                        </div>
                        <div className="border h-[40px] border-gray-300 "></div>
                        <div className="flex w-[32%] gap-4 items-center">
                            <GoLocation className="text-[25px] " />
                            <input type="text" placeholder="Search by location..." className="bg-transparent text-blue-700 focus:outline-none w-full" />
                        </div>
                        <button className="bg-gradient-to-tl from-blue-900 via-blue-500 to-blue-900 h-10 px-9 rounded-md text-white hover:bg-gradient-to-tr">Search</button>
                    </div>
                </form>

                <div className="flex items-center gap-10 justify-center">
                    <div className="flex items-center gap-2">
                        <label className="font-semibold text-blue-700">Experience:</label>
                        <select name="" className="bg-white rounded-md px-4 py-1 text-gray-700" >
                            <option value="">By years</option>
                            <option value="">0-3 years</option>
                            <option value="">4-8 years</option>
                            <option value="">8+ years </option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="font-semibold text-blue-700">Level:</label>
                        <select name="" className="bg-white rounded-md px-4 py-1 text-gray-700" >
                            <option value="">By work</option>
                            <option value="">Beginner</option>
                            <option value="">Intermediate</option>
                            <option value="">Advanced</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="font-semibold text-blue-700">Status:</label>
                        <select name="" className="bg-white rounded-md px-4 py-1 text-gray-700" >
                            <option value="">By Active</option>
                            <option value="">Online</option>
                            <option value="">Offline</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex w-[70%] h-[20%] mx-auto mt-5">
                <h1 className="text-2xl mt-6 mr-40">Recommended</h1>
                <div className="flex rounded-md gap-[80px] bg-white p-5 justify-center items-center">
                    <div className="flex-col gap-4 items-center">
                        <p className="text-gray-500">Web Development</p>
                        <p className="text-gray-500">App Development</p>
                    </div>
                    <div className="border h-[48px] border-gray-300 p-0 m-0 "></div>
                    <div className="flex-col gap-4 items-center">
                        <p className="text-gray-500">TCS</p>
                        <p className="text-gray-500">Netflix</p>
                    </div>
                    <div className="border h-[48px] border-gray-300 "></div>
                    <div className="flex-col gap-4 items-center">
                        <p className="text-gray-500">Pune</p>
                        <p className="text-gray-500">Bangaluru</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connections