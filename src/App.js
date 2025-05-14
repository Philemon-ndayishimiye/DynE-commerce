
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Layout/Nav";
import LandingPage from './Components/Pages/landing/LandingPage'
import ContactPage from './Components/Pages/contact/ContactPage'
import AboutPage from './Components/Pages/about/AboutPage'
import Login from './Components/Regisration/Login'
import SignUp from './Components/Regisration/SignUp'
import SellerSidebar from "./Components/Seller/sellerSidebar";

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
       <Route path="/seller" element={<SellerSidebar/>}></Route>
  
       

       
    </Routes>
    </>
  );
}

export default App;
