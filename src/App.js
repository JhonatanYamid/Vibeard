import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import About from './Pages/about';
import Contact from './Pages/contact';
import Help from './Pages/help';
import Home from './Pages/home';
import Login from './Pages/login';
import Profile from './Pages/profile';
import Register from './Pages/register';
import Shop from './Components/shop';
function App() {
  return (
    <Router>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <img className="absolute object-cover h-screen w-screen" src="images/background.jpg" alt="background" />
      <div className="w-screen h-screen relative backdrop-filter bg-gradient-to-br from-indigo-300 via-violet-500 to-indigo-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
