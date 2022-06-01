import {
    BrowserRouter,
    Routes,
    Route,
    useSearchParams,
} from "react-router-dom";
import HeaderBar from './views/NavBar/NavBar';
import About from "./views/Routes/About/About";
import Home from "./views/Routes/Home/Home";
import Services from "./views/Routes/Services/Services"
import Antiaging from "./views/Routes/Services/AntiAging/AntiAging"
import Pigmentation from "./views/Routes/Services/Pigmentation/Pigmentation"
import Sensitiveskin from "./views/Routes/Services/SensetiveSkin/SensitiveSkin"
import Pimple from "./views/Routes/Services/Pimple/Pimple"
import Tips from "./views/Routes/Tips/Tips"
import Products from "./views/Routes/Products/Products"
import Profile from "./views/Routes/Profile/Profile"
import LoginForm from "./views/Routes/Profile/LoginForm"
import RegisterForm from "./views/Routes/Profile/RegisterForm"
import JoinUs from "./views/Routes/JoinUs/JoinUs";
import ContactUs from "./views/Routes/ContactUs/ContactUs";
import Secret from "./views/Routes/Profile/Secret"
import Loggedin from "./views/Routes/Profile/Loggedin"
import {useState} from 'react';
import Appointment from "./views/Routes/Profile/Appointment/Appointment";
import ResetPassword from "./views/Routes/Profile/ResetPassword";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const setLogin = (arg) => {
        setIsLoggedIn(arg)
    }

    return (<BrowserRouter>
        <HeaderBar isLoggedIn={isLoggedIn} setLogin={setLogin}/>
        <Routes>
            <Route path="/"
                element={< Home />} > </Route>
            {/* <Route path="login"
                element={< Login />} ></Route> */}
            <Route path="about"
                element={< About isLoggedIn={isLoggedIn}/>} > </Route>
            <Route path="secret"
                element={< Secret />} > </Route>
            <Route path="services"
                element={< Services />} > </Route>
            <Route path="antiaging"
                element={< Antiaging />} > </Route>
            <Route path="pigmentation"
                element={< Pigmentation />} > </Route>
            <Route path="sensitiveskin"
                element={< Sensitiveskin />} > </Route>
            <Route path="pimple"
                element={< Pimple />} > </Route>
            <Route path="beautytips"
                element={< Tips />} > </Route>
            <Route path="products"
                element={< Products />} > </Route>
            <Route path="profile"
                element={< Profile />} > </Route>
            <Route path="loginform"
                element={< LoginForm setLogin={setLogin}/>} > </Route>
            <Route path="registerform"
                element={< RegisterForm />} > </Route>
            <Route path="loggedin"
                element={< Loggedin isLoggedIn={isLoggedIn}/>} > </Route>
                {/* <Route path="resetPassword" */}
                <Route path = "resetPassword/:id/:resetString"
                /*{redirectURL + "/" + _id + "/" + resetString}*/
                element={< ResetPassword />} > </Route>
            <Route path="appointment"
                element={< Appointment />} > </Route>
            <Route path="contactus"
                element={< ContactUs />} > </Route>
            <Route path="joinus"
                element={< JoinUs />} > </Route>

        </Routes>
    
        </BrowserRouter>
    );
}
export default App;