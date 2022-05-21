import {
    BrowserRouter,
    Routes,
    Route,
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

const Login = () => {
    const handleLogin = () => {
        fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: "Michael", password: "123456" })
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    }
    return <button onClick={handleLogin} > Login </button>;

}




function App() {
    return (<BrowserRouter>
        <HeaderBar />
        <Routes>
            <Route path="home"
                element={< Home />} > </Route>
            <Route path="login"
                element={< Login />} ></Route>
            <Route path="about"
                element={< About />} > </Route>
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
                element={< LoginForm />} > </Route>
            <Route path="registerform"
                element={< RegisterForm />} > </Route>
            <Route path="contactus"
                element={< ContactUs />} > </Route>
            <Route path="joinus"
                element={< JoinUs />} > </Route>

        </Routes> </BrowserRouter>
    );
}
export default App;