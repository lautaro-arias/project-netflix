import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cards from '../components/netflix/modules/home/Cards';
import ContentTrailer from '../components/netflix/modules/home/ContentTrailer';
import { MainProvider } from '../components/netflix/handlers/useMainHandler';
import Login from '../components/netflix/modules/login/Login';
import SelectAccount from '../components/netflix/modules/login/SelectAccount';

const Urls = () => {
    
return (
   
    <Router>
        <MainProvider>
                <Routes>
                    <Route path="/"  element={   <Login /> }  />
                      
                    <Route path="/SelectAccount"  element={  <SelectAccount/> } />
 
                
                    <Route path="/home"  element={ <Cards/>  } />

                    <Route path="/trailer"  element={   <ContentTrailer/>  } />
                </Routes>
        </MainProvider> 
</Router>
)
}
export default Urls;