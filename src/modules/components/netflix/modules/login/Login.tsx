import FooterLogin from './FooterLogin';
import AnimationLogin from './animationLogin';
const Login = () => {
  
  return (
    <> 
      <AnimationLogin/>
        <div className="bg-[url('/src/modules/assets/bgLoginNetflix2.jpg')] flex items-center justify-center min-h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat ">
              <form className=" bg-black  flex flex-col gap-6  rounded-lg p-10 justify-center w-96 ">
                  <h1 className="text-white text-2xl brightness-100 shadow-lg shadow-white-500/50">Inicio de sesion</h1>
                    <div className="mb-2 block bg-zinc-700 rounded-md ">
                          <label htmlFor="UserEmail"className=" relative block overflow-hidden rounded-md px-3 pt-3 shadow-sm">
                              <input
                                id="email"
                                type="email"
                                name="email" 
                                className=" text-white peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                minLength={11}
                                maxLength={30}
                                required 
                                />
                              <span
                                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-zinc-400 transition-all 
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Email
                              </span>
                          </label>
                      </div>
                    <div className="mb-2 block  bg-zinc-700 rounded-md">
                          <label htmlFor="UserEmail"className="relative block overflow-hidden rounded-md px-3 pt-3 shadow-sm">
                              <input
                                id="password"
                                type="password" 
                                name="password"
                                className=" text-white peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                minLength={8}
                                maxLength={15}
                                required 
                                />
                              <span
                                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-zinc-400 transition-all 
                                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                                Password
                              </span>
                          </label>
                    </div>
                      <button  className="text-white border-none btn rounded-md bg-red-600 outline-none hover:bg-red-600 " type="submit">Iniciar sesion</button>
                          <div className="flex items-center justify-between gap-2">
                              <input className="text-black  h-5 w-5 rounded-md border-none
                                bg-zinc-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-0" 
                                type='checkbox' 
                                id="remember"
                                />
                                <label className="text-xs me-20 text-zinc-400">Remember me</label>
                                <label className="text-xs  text-zinc-400">¿Nesecitas ayuda?</label>
                          </div>
                        <div className="pt-5 pb-5 container w-80 h-40  mx-auto m-4    bg-black">
                          <h1 className="text-zinc-600 mb-2"> ¿Primera vez en Netflix?<span className="text-white">  Suscribite ahora.</span></h1>
                          <small className="text-zinc-400">Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.</small>
                        </div>
              </form>
        </div>
  <FooterLogin/>
    </>
  )
}
export default Login ;