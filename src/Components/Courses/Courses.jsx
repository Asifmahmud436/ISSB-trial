import m1 from "./images/m1.png";
import m2 from "./images/m2.png";
import m3 from "./images/m3.png";
import arrow from "./images/arrow.png";

export default function Courses() {
  return (
    <div className="my-32 max-w-[1500px] mx-auto">
        <nav className="flex justify-between items-center  py-16">
            <div>
                <h1 className="text-[#1F4941] font-bold text-4xl pb-4">Our Intake Courses</h1>
                <p className="text-sm text-[#939293]">Lorem ipsum dolor sit amet consectetur,
                     adipisicing elit. Facere dolore laborum <br />quidem ipsam explicabo rem?</p>
            </div>
            <div className="flex gap-x-4">
                <button className='bg-[#F3EDE8] py-2 px-4'>Army</button>
                <button className='bg-[#F3EDE8] py-2 px-4'>Navy</button>
                <button className='bg-[#F3EDE8] py-2 px-4'>Air Force</button>
                <button className='bg-red-600 text-white py-2 px-4'>All Course</button>
            </div>
        </nav>
      {/* card section */}
      <section className="flex justify-between gap-x-4 mb-32">
        <div className="w-[460px] h-[480px] group transition-all duration-300 ease-in-out">
          {/* <img
          src={m1}
          alt=""
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-120"
        /> */}
          <div className="w-full h-[400px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url(${m1})` }}
            ></div>
          </div>
          <div className="p-9 bg-[#F3EDE8] text-lg group-hover:font-bold">
            <p className="text-green-700 transition-colors duration-300 ease-in-out   py-9">
              REGULAR COURSES IN BANGLADESH
              <br />
              ARMY - RC
            </p>
            <div className="flex items-center gap-x-2">
            <button className="group-hover:text-red-600">Details</button>
            <img src={arrow} alt="" srcset="" className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div className="w-[460px] h-[480px] group transition-all duration-300 ease-in-out">
          {/* <img
          src={m1}
          alt=""
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-120"
        /> */}
          <div className="w-full h-[400px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url(${m2})` }}
            ></div>
          </div>
          <div className="p-9 bg-[#F3EDE8] text-lg group-hover:font-bold">
            <p className="text-green-700 transition-colors duration-300 ease-in-out   py-9">
              REGULAR COURSES IN BANGLADESH
              <br />
              ARMY - RC
            </p>
            <div className="flex items-center gap-x-2">
            <button className="group-hover:text-red-600">Details</button>
            <img src={arrow} alt="" srcset="" className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div className="w-[460px] h-[480px] group transition-all duration-300 ease-in-out">
          {/* <img
          src={m1}
          alt=""
          className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-120"
        /> */}
          <div className="w-full h-[400px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
              style={{ backgroundImage: `url(${m3})` }}
            ></div>
          </div>
          <div className="p-9 bg-[#F3EDE8] text-lg group-hover:font-bold">
            <p className="text-green-700 transition-colors duration-300 ease-in-out   py-9">
              REGULAR COURSES IN BANGLADESH
              <br />
              ARMY - RC
            </p>
            <div className="flex items-center gap-x-2">
            <button className="group-hover:text-red-600">Details</button>
            <img src={arrow} alt="" srcset="" className="h-3 w-3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
