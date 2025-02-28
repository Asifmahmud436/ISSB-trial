import imp from './images/imp.png'
import int from './images/int.png'
import insight from './images/insight.png'
import integration from './images/integration.png'

export default function FourPrinciples(){
    return(
        <div className="text-center mb-34">
            <h1 className="text-[#1F4941] text-5xl pt-38 font-bold pb-3">We believe in Four I</h1>
            <p className="text-[#939293] pb-22  ">Lorem ipsum dolor sit amet consectetur. Eget enim at turpis netus vel in enim sit sed.</p>

            {/* box-img section */}
            <div className='flex justify-center gap-x-8'>
                <div className="w-80 border border-[#D3D3D3] flex flex-col items-center p-8">
                    <img className='w-20' src={imp} alt="" />
                    <h1 className='font-semibold pt-3'>IMPARTIALITY</h1>
                </div>
                <div className="w-80 border border-[#D3D3D3] flex flex-col items-center p-8">
                    <img className='w-20' src={int} alt="" />
                    <h1 className='font-semibold pt-3'>INTEGRITY</h1>
                </div>
                <div className="w-80 border border-[#D3D3D3] flex flex-col items-center p-8">
                    <img className='w-20' src={insight} alt="" />
                    <h1 className='font-semibold pt-3'>INSIGHT</h1>
                </div>
                <div className="w-80 border border-[#D3D3D3] flex flex-col items-center p-8">
                    <img className='w-20' src={integration} alt="" />
                    <h1 className='font-semibold pt-3'>INTEGRATION</h1>
                </div>
            </div>
        </div>
    )
}