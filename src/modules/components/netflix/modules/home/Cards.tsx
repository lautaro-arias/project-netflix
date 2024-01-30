import { useMainHandler } from "../../handlers/useMainHandler";
import { BASE_PATH_IMG } from "../../services/config";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Banner from './Banner';
import Footer from './Footer';
import useCarga from "../../utils/Carga";
import 'animate.css/animate.min.css';



const Cards = () => {
  const {handleClickredirectToMovie,movies,loadMoreMovies} = useMainHandler()
  const { isLoading } =useCarga()

  return (
    <>
    <Nav/>
    <Banner/>
    {isLoading ? (
        <span className="loading flex mx-auto text-red-600 loading-spinner loading-lg"></span>
      ) : (
    <>

      <section className="text-white body-font bg-black z-10 bg-[url('/src/modules/assets/SelectAcount1.jpeg')] ">
            <div className="container px-5 py-24 mx-auto">
            <h1 className="text-2xl font-bold sm:text-3xl border-4 border-transparent border-b-red-800 mb-2">Lo mas visto</h1>
                  <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-2 pt-4 pb-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  mx-auto">
                                      { movies.map((movie) => ( 
                                        <div className="group relative block animate__animated animate__backInLeft mx-auto"key={movie.id}>
                                              <Link onClick={() => handleClickredirectToMovie(movie.id) } to={'/trailer'}>
                                                        <img
                                                        alt={`Imagen de la película ${movie.title}`}
                                                        src={`${BASE_PATH_IMG}/w600_and_h900_bestv2${movie.poster_path}`}
                                                        className="saturate-100 absolute h-full  w-full cursor-pointer inset-0  object-cover  transition-opacity group-hover:opacity-50 hover:h-full "
                                                        />
                                                    <div className="relative p-4 text-start sm:p-6 lg:p-8">
                                                        <p className="text-xl text-center font-bold text-white sm:text-2xl">{movie.title}</p>
                                                      <div className="mt-32 sm:mt-48 lg:mt-64">
                                                            <div className="translate-y-8 transform opacity-0 transition duration-3000  group-hover:opacity-100 ">
                                                                      <h2 className="tracking-widest text-xs title-font font-medium  text-rose-900 mb-1">CATEGORY</h2>
                                                                      <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">Misterio</h1>
                                                                      <p className="leading-relaxed mb-5 max-h-[100px] overflow-y-auto text-white">{movie.overview}En una distópica Los Ángeles de 2019, 
                                                                      el agente de policía retirado Rick Deckard es llamado de vuelta para cazar a replicantes rebeldes, androides indistinguibles de humanos. 
                                                                      Mientras persigue a estos seres artificialmente creados, Deckard se sumerge en un viaje moral y existencial que cuestiona la naturaleza de la humanidad y 
                                                                      la realidad. 'Blade Runner', dirigida por Ridley Scott, 
                                                                      fusiona ciencia ficción, noir y filosofía, explorando temas de identidad, ética y el precio de la creación tecnológica</p>
                                                                  <li className="text-red-600 inline-flex items-center mt-8 mb-4 cursor-pointer ">Ver
                                                                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                        <path d="M5 12h14"></path>
                                                                        <path d="M12 5l7 7-7 7"></path>
                                                                      </svg>
                                                                  </li>
                                                                <div className="text-center mt-4 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                                      <span className="mr-3 inline-flex items-center leading-none text-sm pr-3  py-1 text-white">
                                                                          <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                              <circle cx="12" cy="12" r="3"></circle>
                                                                          </svg>1.2K
                                                                      </span>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                              { Math.random() > 0.4 && (
                              <div className="absolute top-0 right-0.5">
                                  <strong
                                    className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 l px-1 py-1.5 text-white"
                                  >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full" viewBox="0,0,256,256" width="35px" height="35px">
                                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style-="mix-blend-mode: normal">
                                      <path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style-="mix-blend-mode: normal">
                                        <g transform="scale(5.33333,5.33333)"><path d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z" fill="#ffffff"></path><path d="M31,12h-5v23.5c2.5,0 4.986,0.512 5,0.5c0.014,-0.012 0,-24 0,-24z" fill="#b71c1c"></path><path d="M17,12h5v23.5c-2.5,0 -4.986,0.512 -5,0.5c-0.014,-0.012 0,-24 0,-24z" fill="#b71c1c">
                                          </path><path d="M22,12h-5l9,23.5c2.5,0 4.986,0.512 5,0.5c0.014,-0.012 -9,-24 -9,-24z" fill="#e53935"></path></g></g></svg>
                                  </strong>
                              </div>
                              )}
                         </Link>
                  </div>
                  ))}
              </div>
              <button id="loadMoreBtn" onClick={loadMoreMovies} className="flex mx-auto mt-16 
               text-white bg-red-800 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg">Ver mas</button>
          </div>
    </section>
    <Footer/>
  </>     
    )}
  
</>     
    
);
};

export default Cards;


