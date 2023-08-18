import React from "react";
import { RiSave3Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck, AiFillTrophy } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";

import image2 from "../../../assets/profile(1).jpg";
import image3 from "../../../assets/profile(3).jpg";
import image4 from "../../../assets/profile(4).jpg";
import image5 from "../../../assets/profile(5).jpg";
import image6 from "../../../assets/profile(6).jpg";

const Home = () => {
  return (
    <div className="flex gap-x-60 p-7">
      <div className="w-[40%]">
        <div className="flex items-center gap-x-10">
          <img src={image2} className="w-36 h-36 rounded-full" alt="" />
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2">John Smith</h3>
            <div className="flex items-center gap-x-1 mb-2">
              <RiSave3Line></RiSave3Line>
              <p>Stay update with the latest music news</p>
            </div>

            <div className="flex justify-center items-center gap-x-6 h-24 p-2 text-center border-8 border-gray-200 rounded-3xl">
              <div>
                <h3 className="text-2xl">Beginner</h3>{" "}
                <p className="text-lg">Practice</p>
              </div>
              <div>
                <h3 className="text-2xl">2</h3>{" "}
                <p className="text-lg">Connect With</p>
              </div>
              <div>
                <h3 className="text-2xl">InterMediate</h3>{" "}
                <p className="text-lg">Follow Your</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-10 mb-5">Your Progress</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-200 w-48 p-2 rounded-2xl">
              <div className="w-full bg-white py-5 text-3xl rounded-3xl">
                <AiOutlineCheck className="mx-auto"></AiOutlineCheck>
              </div>
              <p className="font-semibold">Connect Music</p>
              <p className="font-semibold">3</p>
            </div>
            <div className="bg-gray-200 w-48 p-2 rounded-2xl">
              <div className="w-full bg-white py-5 text-3xl rounded-3xl">
                <CgSandClock className="mx-auto"></CgSandClock>
              </div>
              <p className="font-semibold">Hours Spend Practicing</p>
              <p className="font-semibold">37</p>
            </div>
            <div className="bg-gray-200 w-48 p-2 rounded-2xl">
              <div className="w-full bg-white py-5 text-3xl rounded-3xl">
                <AiFillTrophy className="mx-auto"></AiFillTrophy>
              </div>
              <p className="font-semibold">Skills Mastered</p>
              <p className="font-semibold">7</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-10 mb-5">Achievements</h1>
          <div className="flex bg-gray-200 p-[6px] rounded-xl mb-4">
            <div className="bg-white w-20 h-16 rounded-xl flex justify-center items-center mr-5">
              <CgSandClock className="text-2xl"></CgSandClock>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <h1 className="font-semibold">Commited Learner</h1>
                <p>2/3 courses</p>
              </div>
              <div className="flex justify-end">
                <span class="border-[8px] border-t border-gray-300 my-1 w-[90%]"></span>
              </div>
              <p>Maintain a 3 day practice streak</p>
            </div>
          </div>
          <div className="flex bg-gray-200 p-[6px] rounded-xl">
            <div className="bg-white w-20 h-16 rounded-xl flex justify-center items-center mr-5">
              <AiFillTrophy className="text-2xl"></AiFillTrophy>
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <h1 className="font-semibold">Point Collector</h1>
                <p>1200/1300 points</p>
              </div>
              <div className="flex justify-end">
                <span class="border-[8px] border-t border-gray-300 my-1 w-[90%]"></span>
              </div>
              <p>Earn more 1800 points</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <div>
          <h3 className="text-2xl mb-6">Latest News</h3>
          <div className="bg-gray-200 w-full p-3 rounded-2xl">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center">
                  <img
                    src={image3}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                  <p>Learn the basic of music theory</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white flex justify-center items-center w-8 h-8 rounded-full mr-2">
                    <AiOutlinePlus></AiOutlinePlus>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full">
                    <RxCross2></RxCross2>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 my-3"></div>
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center">
                  <img
                    src={image4}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                  <p>Learn the basic of music theory</p>
                </div>
                <div className="flex justify-center items-center">
                  <div className="bg-white flex justify-center items-center w-8 h-8 rounded-full mr-2">
                    <AiOutlinePlus></AiOutlinePlus>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full">
                    <RxCross2></RxCross2>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 mt-3"></div>
            </div>
            <button className="btn btn-sm mt-2 rounded-full">Explore</button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl mt-12 mb-6">Friends</h3>
          <div className="bg-gray-200 w-full p-3 rounded-2xl">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                <img
                  src={image5}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <p>Learn the basic of music theory</p>
                </div>
                <button className="btn btn-sm rounded-full">
                  Profile
                </button>
              </div>
              <div className="border-t border-gray-300 my-3"></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                <img
                  src={image6}
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <p>Learn the basic of music theory</p>
                </div>
                <button className="btn btn-sm rounded-full">
                  Profile
                </button>
              </div>
              <div className="border-t border-gray-300 mt-3"></div>
            </div>
            <button className="btn btn-sm mt-2 rounded-full">Explore</button>
          </div>
        </div>
        <div className="mt-6 flex gap-x-3">
          <button className="btn w-1/2 rounded-full bg-black text-white">
            Find Friends
          </button>
          <button className="btn w-1/2 rounded-full bg-black text-white">
            Invite Friends
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
