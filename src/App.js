import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home.jsx';
import Navbar from './Components/navbar/Navbar.jsx';
import About from './Components/Pages/About.jsx';
import Career from './Components/Pages/Career.jsx';
import Admin from './Components/Pages/Admin.jsx';
import Register from './Components/Pages/Register.jsx';
import Studentdata from './Components/Pages/Studentdata.jsx';
import Update from './Components/Pages/Update.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Delete from './Components/Pages/Delete.jsx';
import Studentlogin from './Components/Pages/Studentlogin.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/admin'  element={<Admin/>}/>
        <Route path='/register' element={<Register/>}/>      
        <Route path='/update/student/:StudentID' element={<Update/>}/>
        <Route path='/Student' element={<Studentdata/>}/>
        <Route path='/delete/student/:id' element={<Delete/>}/>
        <Route path='/Studentlogin' element={<Studentlogin/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
export default App;
