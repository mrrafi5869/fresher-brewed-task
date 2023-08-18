import React from 'react';
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiFillSound } from "react-icons/ai";

import image from "../../../assets/profile(7).jpg";

const Navbar = () => {
    return (
        <div className='w-[90%] bg-gray-200 py-5 px-1'>
            <div className='flex justify-between items-center'>
            <input type="text" placeholder="Search" className="input input-bordered w-96 rounded-full" />
            <div className='flex justify-around items-center w-96'>
                <button className='btn rounded-full'>Start Learning</button>
                {/* icon */}
                <BsMusicNoteBeamed></BsMusicNoteBeamed>
                {/* icon */}
                <AiFillSound></AiFillSound>
                <img src={image} className='w-12 h-12 rounded-full' alt="" />
            </div>
            </div>
        </div>
    );
};

export default Navbar;