
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Layout/Nav";
import LandingPage from './Components/Pages/LandingPage'
import ContactPage from './Components/Pages/ContactPage'
import AboutPage from './Components/Pages/AboutPage'
import Login from './Components/Regisration/Login'
import SignUp from './Components/Regisration/SignUp'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
       <Route path="/" element={<LandingPage/>}></Route>
       <Route path="/contact" element={<ContactPage/>}></Route>
       <Route path="/about" element={<AboutPage/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/register" element={<SignUp/>}></Route>
       
    </Routes>
    </>
  );
}

export default App;
