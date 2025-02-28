import historyImg from './images/history.png'

export default function History(){
    return(
        <div className="flex">
            <img src={historyImg} alt="" />
            <section className="p-32 bg-[#F3EDE8] ">
                <h1 className="text-[#ED1C24]">HISTORY OF</h1>
                <h1 className="text-[#1F4941] pt-3 pb-9 text-4xl font-bold">INTER SERVICE SELECTION
                <br /> 
                BOARD (ISSB)</h1>
                <p className="pb-3 text-[#495855]">After the independence of Bangladesh, necessity was felt about setting up of a selection board for selecting officer for the Armed Forces. Firstly army took the initiative and accordingly Army Selection Board was formed in 1974. Similarly candidates for Bangladesh Navy and Bangladesh Air Force also used to be selected by respective services headquarters by different boards. Subsequently, combining all the selection boards, Inter Services selection Board (ISSB) came into being in 1976. Since its inception, ISSB's main task is to select candidates for the Armed Forces of Bangladesh.</p>
                <button className="bg-[#ED1C24] text-white font-bold py-2 px-4 mt-4">More About Us</button>
            </section>
        </div>
    )
}