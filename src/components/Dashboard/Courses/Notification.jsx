import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";

import image2 from "../../../assets/profile(1).jpg";
import image3 from "../../../assets/profile(3).jpg";
const Notification = () => {
  return (
    <div className="p-7 flex gap-x-16">
      <div className="bg-gray-200 w-[60%] h-[700px] p-4 rounded-3xl">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">New Updates</p>
          <select className="select select-bordered border-black rounded-full w-40">
            <option disabled selected>
              Filter by date
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex gap-x-4">
            <img src={image2} className="w-14 h-14 rounded-full" alt="" />
            <div>
              <h6 className="font-semibold">John Doe</h6>
              <p>On lessons-basics</p>
              <p className="my-2">Great explanation, thanks</p>
              <span className="flex gap-x-6 mt-2">
                <p className="font-bold">Like</p>
                <p className="font-bold">Reply</p>
              </span>
            </div>
          </div>
          <p>2h ago</p>
        </div>
        <div className="border-t border-gray-400 my-5"></div>
        
        <div className="flex justify-between">
          <div className="flex gap-x-4">
            <img src={image3} className="w-14 h-14 rounded-full" alt="" />
            <div>
              <h6 className="font-semibold">John Doe</h6>
              <p>On lessons-Chords</p>
              <p className="my-2">Awesome Progress, keep it up</p>
              <span className="flex gap-x-6 mt-2">
                <p className="font-bold">Like</p>
                <p className="font-bold">Reply</p>
              </span>
            </div>
          </div>
          <p>2h ago</p>
        </div>
        <div className="border-t border-gray-400 my-5"></div>
        
      </div>
      {/* part 2 */}
      <div className="bg-gray-200 h-[400px] p-5 rounded-3xl">
        <h1 className="text-xl font-semibold mb-10">Filter Options</h1>        
        <div className="flex justify-between font-semibold mt-2">
            <p>Comments</p>
            <BsFillCheckSquareFill></BsFillCheckSquareFill>
        </div>
        <div className="flex justify-between font-semibold mt-2">
            <p>Likes</p>
            <BsFillCheckSquareFill></BsFillCheckSquareFill>
        </div>
        <div className="flex justify-between font-semibold mt-2">
            <p>Review</p>
            <BsFillCheckSquareFill></BsFillCheckSquareFill>
        </div>
        <div className="flex justify-between font-semibold mt-2">
            <p>Mentions</p>
            <BsFillCheckSquareFill></BsFillCheckSquareFill>
        </div>
        <div className="flex justify-between font-semibold mt-2">
            <p>Purchases</p>
            <BsFillCheckSquareFill></BsFillCheckSquareFill>
        </div>
        <div className="flex justify-between font-semibold mt-2">
            <p>Message</p>
            <BsFillCheckSquareFill></BsFillCheckSquareFill>
        </div>
        <button className="btn btn-sm rounded-full mr-3 mt-4">Select All</button>
        <button className="btn btn-sm rounded-full mr-3">Unselect All</button>
      </div>
    </div>
  );
};

export default Notification;
