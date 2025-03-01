import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'

export default function Gallery(){
    return(
        <div className="max-w-7xl m-auto mt-22 pt-22">
            <nav className="flex justify-between items-center">
                <div>
                    <h1 className="text-[#1F4941] pb-3 text-3xl font-semibold">Explore Our Gallery</h1>
                    <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <button type="button" className="bg-[#ED1C24] py-3 px-6 font-semibold text-white">See All</button>
            </nav>

            {/* image section */}
            <section className='mx-auto mt-9 mb-7'>
                <div className='flex pb-7'>
                    <img src={img1} alt="" className='h-80 pe-7'/>
                    <img src={img2} alt="" className='h-80 pe-7'/>
                    <img src={img5} alt="" className='h-80'/>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className='flex '>
                    <img src={img4} alt="" className='h-80 pe-7'/>
                    <img src={img3} alt="" className='h-80 pe-7'/>
                    <img src={img6} alt="" className='h-80'/>
                </div>
                
            </section>
        </div>
    )
}