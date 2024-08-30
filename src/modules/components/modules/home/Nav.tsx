import hopenNav from '../../../assets/hopenNav.jpg'

import './Home.css'
const Nav = () => {
  return (
    <nav className="navbar z-50 bg-black fixed top-0 w-full p-0 m-0">
            <div className="navbar-start">
                  <a  href="1" className="mx-4">
                      <svg height="70" viewBox=".238 .034 919.406 248.488" width="65" 
                        xmlns="http://www.w3.org/2000/svg"><path d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89-45.309-116.732h41.937l25.362 65.22 27.185-65.22h42.442zm-120.864-118.28h-38.052v225.71c12.425.779 
                        25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177v-217.94h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zm-146.252-134.847v38.822h-53.06v88.263h-38.3v-215.356h108.713v38.822h-70.405v49.45h53.06zm-156.597-49.449v178.605c-12.946 
                        0-26.14 0-38.83.514v-179.119h-40.122v-38.822h119.322v38.822zm-120.88 90.334c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548v-229.338h107.405v38.822h-68.584v52.29c15.017 0 38.052-.778 51.768-.778v38.83zm-215.109-21.743v135.633c-13.965 1.557-26.398 3.371-39.593 5.442v-248.488h37.017l50.469 
                        141.076v-141.076h38.83v232.436c-13.717 2.336-27.698 3.114-42.45 5.177z" fill="#e50914"/>
                    </svg>
                  </a>
                  <div className="dropdown ">
                          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                          </div>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white bg-black rounded-md w-52">
                                  <li className="mb-2 cursor-pointer  hover:text-red-600">Inicio</li> 
                                  <li className="mb-2 cursor-pointer  hover:text-red-600">Series</li>
                                  <li className="mb-2 cursor-pointer  hover:text-red-600">Peliculas</li>
                                  <li className="mb-2 cursor-pointer  hover:text-red-600">Novedades</li>
                                  <li className="mb-2 cursor-pointer  hover:text-red-600">Explorar idiomas</li>
                                  <li className="mb-2 cursor-pointer  hover:text-red-600">Mi lista </li>
                              </ul>
                          </div>
                        <ul className="menu menu-horizontal hidden lg:flex px-1 text-white cursor-pointer">
                          <li className="me-4 focus:ring transition hover:scale-110">Inicio</li> 
                          <li className="me-4 focus:ring transition hover:scale-110">Series</li>
                          <li className="me-4 focus:ring transition hover:scale-110">Peliculas</li>
                          <li className="me-4 focus:ring transition hover:scale-110">Novedades</li>
                          <li className="me-4 focus:ring transition hover:scale-110">Mi lista </li>
                      </ul>
                </div>
              <div className="navbar-end bg-black ">
                    <div className="box relative me-4 hidden sm:flex">
                          <label className="sr-only" for-="search"> Search </label>
                            <input
                              className="input  rounded-full text-white ps-4 text-sm shadow-sm sm:w-56"
                              id="search"
                              type="search"
                              placeholder="Titulos,personas,generos"
                            />
                          <button type="button"className="  absolute end-2 top-1/2 -translate-y-1/2 rounded-full bg-black  text-white">
                            <span className="sr-only">Search</span>
                              <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none"viewBox="0 0 24 24"stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                              </svg>
                          </button>
                        </div>
                    <div className="dropdown dropdown-end dropdown-hover me-4">
                              <div tabIndex={0} role="button" className="mb-0 btn btn-ghost btn-circle">
                                    <div className="indicator text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span className="badge badge-xs bg-red-600 border border-red-600 indicator-item"></span>
                                    </div>
                                </div>
                              <div tabIndex={0} className=" z-[1] card card-compact dropdown-content w-52 max-h-[320px] overflow-y-auto ">
                                    <div className="card-body ">
                                              <div className="card card-side  text-white  border-b-2 border-red-600 bg-black">
                                                      <figure>
                                                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="h-25 w-25 " alt="Movie"/>
                                                      </figure>
                                                    <div className="card-body ">
                                                          <p className="card-title text-sm ">New movie is released!</p>
                                                          <div className="card-actions justify-end">
                                                              <small>Hace 3 minutos</small>
                                                          </div>
                                                    </div>
                                              </div>
                                            <div className="card card-side  text-white border-b-2 border-red-600  bg-black">
                                                    <figure>
                                                        <img src={hopenNav} className=" h-25 w-25" alt="Movie"/>
                                                    </figure>
                                                  <div className="card-body">
                                                        <p className="card-title text-sm">New movie is released!</p>
                                                        <div className="card-actions justify-end">
                                                            <small>Hace 3 minutos</small>
                                                        </div>
                                                  </div>
                                            </div>
                                          <div className="card card-side  text-white border-b-2 border-red-600  bg-black">
                                                  <figure>
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                                                      </svg>
                                                  </figure>
                                                <div className="card-body">
                                                      <p className="card-title text-sm">Actualiza tus datos </p>
                                                      <div className="card-actions justify-end">
                                                          <small>Hace 1 hora</small>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                          </div>
                            <details className="dropdown dropdown-left  ">
                                  <summary className="btn border border-none hover:bg-black rounded-full bg-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                                        </svg>
                                  </summary>
                              <ul className="p-2 shadow menu dropdown-content z-[1] bg-transparent backdrop-blur-lg rounded-box w-52">
                                  <li className='mb-2 transition hover:scale-110'>
                                        <div className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform  rounded-lg text-neutral-200 hover:border  hover:border-white  hover:bg-red-700 ">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                              </svg>
                                            <span className="ml-4">Mas vistos</span>
                                        </div>
                                    </li>
                                  <li className='mb-2 transition hover:scale-110'>
                                        <div className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-neutral-200 hover:border  hover:border-white  hover:bg-red-700">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                </svg>
                                              <span className="ml-4">Usuario</span>
                                          </div>
                                      </li>
                                    <li className='mb-2 transition hover:scale-110'>
                                          <div className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform  rounded-lg text-neutral-200 hover:border  hover:border-white  hover:bg-red-700" >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                              <span className="ml-4">Configuracion</span>
                                          </div>
                                      </li>
                                    <li className='mb-2 transition hover:scale-110'>
                                          <div className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-neutral-200 hover:border  hover:border-white  hover:bg-red-700" >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                                </svg>
                                              <span className="ml-4">Seguridad</span>
                                          </div>
                                      </li>
                                    <li className='mb-2 transition hover:scale-110'>
                                          <div className="inline-flex items-center w-full px-4 py-2 mt-1 text-base transition duration-500 ease-in-out transform rounded-lg text-neutral-200 hover:border  hover:border-white  hover:bg-red-700" >
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                                                  </svg>
                                                <span className="ml-4">Historial</span>
                                            </div>
                                        </li>
                                    <li className='mb-2 transition hover:scale-110'>
                                        <div className="inline-flex items-center w-full px-4 py-2 mt-1 text-base rounded-lg text-neutral-200 hover:border  hover:border-white  hover:bg-red-700" >
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                              </svg>
                                            <span className="ml-4">Guardado</span>
                                        </div>
                                    </li>
                                </ul>
                          </details>
                        <ul className="menu menu-horizontal  text-white">
                              <li className="tooltip  tooltip-left"data-tip="Cambiar de usuario">
                                <details>
                                  <summary>
                                  <div className=" w-10 ring ring-white h-10 
                                  rounded-full bg-[url('/src/modules/assets/user1.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat" ></div>
                                  </summary>
                                  <ul className="p-2 bg-black border border-white rounded-lg">
                                      <summary>
                                              <div className=" w-10 mb-2 ring ring-white h-10 tooltip  tooltip-left cursor-pointer
                                              rounded-full bg-[url('/src/modules/assets/user2.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat"data-tip="User 2"></div>
                                          </summary>
                                      <summary>
                                              <div className=" w-10 mb-2 ring ring-white h-10 tooltip  tooltip-left cursor-pointer
                                              rounded-full bg-[url('/src/modules/assets/user3.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat"data-tip="User 3"></div>
                                          </summary>
                                      <summary>
                                              <div className=" w-10 mb-2 ring ring-white h-10 tooltip  tooltip-left cursor-pointer
                                              rounded-full bg-[url('/src/modules/assets/user4.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat"data-tip="User 4"></div>
                                          </summary>
                                      <summary>
                                          <div className=" w-10 mb-2 ring ring-white h-10 tooltip  tooltip-left cursor-pointer
                                          rounded-full bg-[url('/src/modules/assets/user5.png')] bg-hero-pattern bg-cover bg-center bg-no-repeat"data-tip="User 5"></div>
                                      </summary>
                                  </ul>
                                </details>
                              </li>
                          </ul>
                </div>
          </nav>
  )
}
export default Nav;