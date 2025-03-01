import logo from "./images/logo.png";
import qr from "./images/qr.png";
import location from "./images/location.png";
import follow from "./images/follow.png";

export default function Footer() {
  return (
    <div className="bg-[#1B3F38] font-[Poppins]">
      <nav className="flex justify-around items-center max-w-8xl mx-auto pb-22 pt-16">
        <img src={logo} alt="logo" />
        <div className="text-white flex justify-between w-5xl  text-xl">
          <a>Home</a>
          <a>Candidate Info</a>
          <a>Schedule</a>
          <a>Preparatory Guide</a>
          <a>Instructions</a>
          <a>Citizen Charter</a>
          <a>Notice</a>
          <a>FAQ</a>
        </div>

        {/* <div className="relative">
          <input
            type="text"
            name="Search Bar"
            id="search-bar"
            className="border-2 border-[#8E8E8E80] w-40 h-14 text-white bg-black p-2 flex-1 pr-10"
          />
          
        </div> */}
        <img src={qr} alt="" srcset="" />
      </nav>
      <hr className="pb-22 text-gray-500 max-w-[1542px] mx-auto" />

      {/* information section */}
      <section className="max-w-[1542px] flex justify-between items-centre mx-auto pb-22">
        <div>
          <h1 className="pb-7 text-white font-semibold">LOCATIONS</h1>
          <p className="text-[#B5B5B5] pb-4">RCG4+PRP, Dhaka 1206, Bangladesh</p>
          <img src={location} alt="" srcset="" />
        </div>

        <div>
          <h1 className="pb-7 text-white font-semibold">USEFUL LINKS</h1>
          <p className="text-[#B5B5B5] ">Bangladesh Army</p>
          <p className="text-[#B5B5B5] ">Bangladesh Navy</p>
          <p className="text-[#B5B5B5] ">Bangladesh Air Force</p>
        </div>
        <div>
          <h1 className="pb-7 text-white font-semibold">CONTACTS</h1>
          <p className="text-[#B5B5B5] ">info@issb.com</p>
          <p className="text-[#B5B5B5] ">0123 456 789</p>
        </div>
        <div>
          <h1 className="pb-7 text-white font-semibold">12859141</h1>
          <p className="text-[#B5B5B5] ">Total hits till now</p>
        </div>
        <div>
          <img src={follow} alt="" />
        </div>
      </section>
      <hr className="pb-3 text-gray-500 max-w-[1542px] mx-auto" />

      <p className="text-[#99AFAB] text-center py-3 text-xs">ISSB. All Rights Reserved.2025</p>
    </div>
  );
}
