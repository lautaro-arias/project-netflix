import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cards from '../components/netflix/modules/home/Cards';
import ContentTrailer from '../components/netflix/modules/home/ContentTrailer';
import { MainProvider } from '../components/netflix/handlers/useMainHandler';
import Login from '../components/netflix/modules/login/Login';
import SelectAccount from '../components/netflix/modules/login/SelectAccount';
import { useEffect, useState } from 'react';
import Auth from '../../libs/auth';

const Urls = () => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect( () => {
        const auth = new Auth();
        const checkAuthentication = () => {
            const token             =  auth.getTokenFromLocalStorage();

            if (token != null)
            {
                const expirationTime    = token.exp;
                const currentTime       = Math.floor(Date.now() / 1000);

                if (expirationTime > currentTime)
                    return setAuthenticated(true);
            }
            //console.log("error")
            return setAuthenticated(false);
        };

       //console.log("error")
        checkAuthentication();

    }, []);
return (
   
    <Router>
        <MainProvider>
                <Routes>
                    <Route path="/"  element={ authenticated ? <Navigate to="/SelectAccount" /> : <Login /> }  />
                      
                </Routes>  
                <Routes>
                    <Route path="/SelectAccount"  element={  authenticated ? <SelectAccount/> : ''} />
                </Routes>
 
                
                <Routes>
                    <Route path="/home"  element={  authenticated ? <Cards/> : ''} />
                </Routes>

                <Routes>
                    <Route path="/trailer"  element={  authenticated ? <ContentTrailer/> : ''} />
                </Routes>
        </MainProvider> 
</Router>
)
}
export default Urls;