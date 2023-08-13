import React,{Component} from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { Navigate,Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import AboutUs from "./components/AboutUs"
import DetailsPage from './components/DetailsPage';
import NotFound from './components/NotFound';
import Programmers from './components/Programmers';




class App extends Component{
  render(){
    return(
      <div>
       <Navbar/> 
       <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/Products' element={<Products/>}/>
       <Route path='/Products/:id' element={<DetailsPage/>}/>

       <Route path='/aboutus/*' element={<AboutUs/>}>
            <Route path='programmers' element={<Programmers/>}/>
            <Route path='drivers' element={<h1>Drivers</h1>}/>
        </Route>
        
        <Route path='/notfound' element={<NotFound/>}/>
       <Route path='/*' element={<Navigate to="/notfound" />}/>
      

       </Routes >
      
       <Footer/> 
       
      </div>
    )
  }
}

export default App;
