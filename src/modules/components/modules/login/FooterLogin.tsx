import  './Log.css';

const FooterLogin = () => {
return (
    <footer className="text-gray-600 body-font bg-black pt-10 h-40  ">
            <div className=" bg-black container  w-full  mx-auto  flex flex-col md:items-center md:relative lg:items-start md:flex-row md:flex-nowrap flex-wrap ">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <li className="list-none   text-zinc-400 tracking-widest text-sm mt-2  ">¿Preguntas? Llama al 0800 345 1593</li>
                    </div>
                <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <nav className="list-none ">
                                    <li>
                                        <small className="text-gray-600 hover:border-b border-zinc-400 mb-2">Preguntas frecuentes</small>
                                    </li>
                                    <li>
                                        <small className="text-gray-600 hover:border-b border-zinc-400 mb-2">Preferencias de cookis</small>
                                    </li>
                                </nav>
                            </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <nav className="list-none ">
                                    <li>
                                        <small className="text-gray-600  hover:border-b border-zinc-400 mb-2">Centro de ayuda</small>
                                    </li>
                                    <li>
                                        <small className="text-gray-600  hover:border-b border-zinc-400 mb-2">Informacion corporativa</small>
                                    </li>
                                </nav>
                            </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <nav className="list-none ">
                                    <li>
                                        <small className="text-gray-600 hover:border-b border-zinc-400 mb-2">Terminos de uso</small>
                                    </li>
                                </nav>
                            </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <nav className="list-none ">
                                <li>
                                    <small className="text-gray-600 hover:border-b border-zinc-400 mb-2">Privacidad</small>
                                </li>
                            </nav>
                        </div>
                </div>
            </div>
    </footer>
)
}
export default FooterLogin;