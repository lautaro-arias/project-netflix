import { BASE_PATH_IMG } from "../../services/config";
import {useMainHandler} from "../../handlers/useMainHandler";
import useCarga from "../../utils/Carga";
import Testimonial from './Testimonial';

const ContentTrailer = () => {
  const {movie,video,trailerId}=useMainHandler()
  const { isLoading } =useCarga()

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
            <span className="loading text-red-600 text-center loading-spinner loading-lg"></span>
        </div>
      ) : (
        <section key={trailerId} className=" bg-[url('/src/modules/assets/bgTrailer.jpg')] bg-hero-pattern bg-cover bg-end bg-no-repeat ">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-10 bg-[url('/src/modules/assets/bgTrailer.jpg')] bg-hero-pattern bg-cover bg-end bg-no-repeat shadow-xl lg:mb-0">
                <div className="flex flex-wrap rounded-xl items-center mx-auto max-w-7xl">
                      <div className="w-full lg:max-w-lg lg:w-1/2 ">
                          <div>
                              <div className="relative w-full max-w-lg  ">
                                <div className="relative ">
                                    <img
                                      className=" object-cover w-full rounded-xl animate__animated animate__bounceInLeft"
                                      src={`${BASE_PATH_IMG}/w500${movie.poster_path}`}
                                      alt={`Imagen de la película ${movie.title}`} />
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0 animate__animated animate__bounceInRight">
                            <span className="mb-8 text-xs font-bold tracking-widest text-red-600 uppercase"> Recomendado </span>
                            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl lg:text-5xl">{movie.title}.</h1>
                              <div className="rating">
                                <input type="radio" name="rating-1" className="text-yellow-200 mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-2" className="text-yellow-200 mask mask-star-2 bg-white"  />
                                <input type="radio" name="rating-3" className="text-yellow-200 mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-4" className="text-yellow-200 mask mask-star-2 bg-white" />
                                <input type="radio" name="rating-5" className="text-yellow-200 mask mask-star-2 bg-white" />
                              </div>
                                <h2 className="mb-8 text-xs font-bold tracking-widest text-red-600 uppercase mt-4">Te gusto? colocale las extrellas que se merece</h2>
                            <div className="mb-4">
                                  <span className="flex items-center text-white">Duracion: {movie.runtime}</span>
                                  <span className="flex items-center text-white">Fecha de estreno: {movie.release_date}</span>
                              </div>
                                <p className="mb-8 mt-3 text-base leading-relaxed text-left text-white">{movie.overview}</p>
                            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3 ">
                                      <a href={`https://www.youtube.com/embed/${video.key}?controls=0&showinfo=0`} target="_blank" rel="noopener noreferrer" className="items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-red-600 ">
                                        Ver!
                                      </a>
                                  </div>
                            </div>
                      </div>
                </div>
          </div>
  </section>
  )}
  <Testimonial/>
    </>
  );
};
export default ContentTrailer;
