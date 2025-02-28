import logo from "./images/logo.png";
import bannerImg from "./images/bannerImg.png";
import { CiSearch } from "react-icons/ci";

export default function BNavLinknner() {
  return (
    <div
      className="font-[Roboto]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <nav className="flex justify-around items-center max-w-8xl mx-auto py-4">
        <img src={logo} alt="logo" />
        <div className="text-white flex justify-between w-5xl ">
          <a>Home</a>
          <a>Candidate Info</a>
          <a>Schedule</a>
          <a>Preparatory Guide</a>
          <a>Instruction</a>
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
    </div>
  );
}
