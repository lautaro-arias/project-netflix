import { Link } from "react-router-dom";
import 'animate.css/animate.min.css';

const SelectAccount = () => {
return (
    <div className="px-4 py-24 min-h-screen bg-black text-center mx-auto bg-[url('/src/modules/assets/SelectAcount1.jpeg')]">
        <h1 className='text-white pt-5 pb-10 text-3xl sm:text-4xl md:text-5xl'>¿Quién está viendo ahora?</h1>
            <div className="animate__animated animate__fadeInLeft  grid grid-cols-1 gap-2 text-center sm:grid-cols-2 pt-4 pb-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <Link  to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl">
                                <div className=" bg-gray-100 w-64 h-64 rounded-lg bg-[url('/src/modules/assets/user1.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat p-4">
                                    <div className="md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 mx-auto w-64 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4">User 1</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link  to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl">
                                <div className=" bg-gray-100 w-64 h-64 rounded-lg bg-[url('/src/modules/assets/user2.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat p-4">
                                    <div className="md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 mx-auto w-64 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4">User 2</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link  to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl">
                                <div className=" bg-gray-100 w-64 h-64 rounded-lg bg-[url('/src/modules/assets/user3.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat p-4">
                                    <div className="md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 mx-auto w-64 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4">User 3</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link  to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl">
                                <div className=" bg-gray-100 w-64 h-64 rounded-lg bg-[url('/src/modules/assets/user4.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat p-4">
                                    <div className="md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 mx-auto w-64 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4">User 4</h2>
                                    </div>
                                </div>
                            </Link>
                            <Link  to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl">
                                <div className=" bg-gray-100 w-64 h-64 rounded-lg bg-[url('/src/modules/assets/user5.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat p-4">
                                    <div className="md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 mx-auto w-64 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4">User 5</h2>
                                    </div>
                                </div>
                            </Link>
                       {/* <Link to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl">
                                <div className="bg-transparent  w-64 h-64 rounded-lg bg-[url('/src/modules/assets/user2.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat ">
                                    <div className="bg-transparent md:backdrop-blur-sm  backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4 ">User 2</h2>
                                    </div>
                                </div>
                            </Link>
                        <Link to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl">
                                <div className="bg-gray-100 w-64 h-64   rounded-lg bg-[url('/src/modules/assets/user3.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat hover:border-4 hover:border-white p-4">
                                    <div className="md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4">User 3</h2>
                                    </div>
                                </div>
                            </Link>
                        <Link to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:shadow-xl ">
                                <div className="bg-gray-100 w-64 h-64 rounded-lg bg-[url('/src/modules/assets/user4.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat hover:border-4 hover:border-white p-4">
                                    <div className=" md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <h2 className="text-2xl text-white font-medium title-font mb-4">User 4</h2>
                                    </div>
                                </div>
                            </Link>
                        <Link to={'/Home'} className="cards flex items-center justify-center text-center  relative group overflow-hidden transition md:hover:scale-110 hover:text-lg hover:shadow-xl">
                            <div className="bg-gray-100 w-64 h-64   rounded-lg bg-[url('/src/modules/assets/user5.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat hover:border-4 hover:border-white p-4">
                                <div className="md:backdrop-blur-sm backdrop-brightness-100 md:backdrop-brightness-50 hover:backdrop-brightness-50 md:hover:backdrop-brightness-100 md:mb-2 absolute  inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <h2 className="text-2xl text-white font-medium title-font mb-4">User 5</h2>
                                </div>
                            </div>
</Link>*/}
                </div>
            <li className="list-none btn rounded border bg-black border-zinc-400 px-8 py-2 text-xs sm:text-sm font-medium text-zinc-400 hover:bg-black hover:text-white focus:outline-none focus:ring mt-4 sm:mt-8">Administrar perfiles</li>
    </div>


)
}

export default SelectAccount;