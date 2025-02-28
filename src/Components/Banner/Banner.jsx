import logo from "./images/logo.png";
import firstIcon from "./images/firstIcon.png";
import secondIcon from "./images/secondIcon.png";
import thirdIcon from "./images/thirdIcon.png";
import bannerImg from "./images/bannerImg.png";
import { CiSearch } from "react-icons/ci";
import mailLogo from './images/upperNav/mail.png'
import whatsAppLogo from './images/upperNav/whatsapp.png'
import locationLogo from './images/upperNav/location.png'
import cellLogo from './images/upperNav/cell.png'

export default function Banner() {
  return (
    <div
      className="font-[Roboto] bg-cover h-screen"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
        {/* navbar */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-4 h-11 backdrop-blur-sm shadow-md">
        <div className="text-white flex gap-x-4">
          <div className="flex gap-x-2 border-e-1 border-gray-500 items-center ">
            <img src={mailLogo} alt="" className="w-3.5 h-3.5" />
            <p className="me-3">info@issb-bd.com</p>
          </div>
          <div className="flex gap-x-2 items-center border-e-1 border-gray-500">
            <img src={cellLogo} alt="" className="w-3.5 h-3.5" />
            <p className="me-3">123 456 789</p>
          </div>
          <div className="flex gap-x-2 items-center border-e-1 border-gray-500">
            <img src={whatsAppLogo} alt=""  className="w-3.5 h-3.5"/>
            <p className="me-3">123 456 789</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <img src={locationLogo} alt=""  className="w-3.5 h-3.5"/>
            <p>Find Us</p>
          </div>
        </div>
        <div className="text-white">
          <button className="bg-red-500 py-1 px-3 rounded">Eng</button>
          <button className="bg-black-500 py-1 rounder px-3">Bang</button>
        </div>
      </nav>
      <nav className="flex justify-around items-center max-w-8xl mx-auto py-4">
        <img src={logo} alt="logo" />
        <div className="text-white flex justify-between w-5xl font-bold text-xl">
          <a>Home</a>
          <a>Candidate Info</a>
          <a>Schedule</a>
          <a>Preparatory Guide</a>
          <a>Instructions</a>
          <a>Citizen Charter</a>
          <a>Notice</a>
          <a>FAQ</a>
        </div>

        <div className="relative">
          <input
            type="text"
            name="Search Bar"
            id="search-bar"
            className="border-2 border-[#8E8E8E80] w-40 h-14 text-white bg-black p-2 flex-1 pr-10"
          />
          <CiSearch className="text-white text-2xl absolute right-3 top-1/3 font-bold" />
        </div>
      </nav>

      {/* main section */}
      <section className="font-[Roboto] pt-24 text-white text-center max-w-6xl mx-auto">
        <h1 className="font-[Roboto] py-2 text-2xl">TAKE A PATH WITH PURPOSE</h1>
        <h1 className="font-bold font-[Roboto] text-6xl pt-2 pb-12">BE PART OF SOMETHING BIGGER
            <br />
        THAN YOURSELF</h1>


        {/* three sections of Army */}
        {/* w-390 h-126 */}
        <div className="flex pt-16 pb-32">
            <div className="w-96 h-32 border border-[#5AB1A1] bg-[#1F4941] flex justify-center gap-x-4 items-center">
                <img src={firstIcon} alt="" />
                <h1 className="text-2xl ">ARMY</h1>
            </div>
            <div className="w-96 h-32 border border-[#BBE6F8] bg-[#54BCE8] flex justify-center gap-x-4 items-center">
                <img src={secondIcon} alt="" />
                <h1 className="text-2xl">AIR FORCE</h1>
            </div>
            <div className="w-96 h-32 border border-[#96C5FF] bg-[#2C6BB8] flex justify-center gap-x-4 items-center">
                <img src={thirdIcon} alt="" />
                <h1 className="text-2xl">NAVY</h1>
            </div>
        </div>
      </section>
    </div>
  );
}
