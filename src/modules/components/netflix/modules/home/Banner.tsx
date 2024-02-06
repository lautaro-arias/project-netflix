import home from '../../../../assets/home.png';
import useCountdownTimer from '../../utils/CountdownTimer';
import useCarga from '../../utils/Carga';
import 'animate.css/animate.min.css';


const Banner = () => {
    const { days,hours,minutes,seconds } =useCountdownTimer()
    const { isLoading } =useCarga()
return (
    <>
    {isLoading ? (
        <div className="grid grid-cols-1 mx-auto gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_120px] lg:gap-8 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px]">
            <div className=" h-full w-full mx-auto  rounded-lg bg-gray-200"></div>
        </div>
    ) : (
    <section className="text-gray-600 body-font bg-[url('/src/modules/assets/bgHome.jpg')] animate__animated animate__backInLeft bg-hero-pattern bg-cover bg-end bg-no-repeat ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
            <img className="contrast-150 border-2 border-black lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={home}/>
                <div className="text-center lg:w-2/3 w-full">
                        <div className="grid grid-flow-col gap-5 text-center justify-center">
                                <div className="flex flex-col p-2 rounded-lg text-neutral-content">
                                    <span className=" font-mono text-5xl">
                                        {days}
                                    </span>
                                        days
                                </div> 
                                <div className="flex flex-col p-2  rounded-lg text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        {hours}
                                    </span>
                                        hours
                                </div> 
                                <div className="flex flex-col p-2  rounded-lg text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        {minutes}
                                    </span>
                                        min
                                </div> 
                                <div className="flex flex-col p-2 rounded-lg text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        {seconds}
                                    </span>
                                        sec
                                </div>
                            </div>
                        <p className="mb-8 leading-relaxed mt-4 text-white">
                            After the supernatural events unleashed in the first film, John Constantine finds himself dealing with the consequences of having disturbed the delicate balance between heaven and hell. As dark creatures and demons attempt to unleash chaos on Earth, 
                            Constantine is forced to confront his own past and seek unexpected alliances.
                        </p>
                    <div className="flex flex-wrap justify-center">
                            <li data-tip="Activa la notificacion" className="tooltip btn btn-outline bg-rose-700 text-white  border-0 py-2 px-6 focus:outline-none hover:bg-transparent hover:border hover:border-red-600 hover:text-red-600 rounded text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                    </svg>
                                </li>
                            <li data-tip="Mas info" className="tooltip ml-4 btn btn-outline  justify-center text-black bg-gray-100  border-0 py-2 px-3 focus:outline-none hover:bg-black hover:text-white rounded text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 me-1 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>
                            </li>
                    </div>
                </div>
            </div>
    </section>
    )}
    </>
)
}
export default Banner;