import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Store } from './pages/store/Store';
import { AboutUs } from './pages/about_us/AboutUs';
import { Contact } from './pages/contact/Contact';
import { Header } from './components/header/Header';
import { Footer } from "./components/footer/Footer";

function App() {

  const data = {
    contactInfo: {
      number: "+65 91234567",
      email: "bakery@cafe.com"
    },
    home: {
      tagline: "freshly baked with love",
      subTagline: "Sweetest treats made with the world's finest, simplest ingredients",
      display1:
      {
        name: "Rainbow Macaroons",
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Ac tortor vitae purus faucibus."
      },
      display2:
      {
        name: "Rose Cupcakes",
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Ac tortor vitae purus faucibus."
      },
      product1:
      {
        name: "Chocolate Cupcakes",
        price: 2.5
      },
      product2:
      {
        name: "Cream Puffs",
        price: 1.7
      },      
      product3:
      {
        name: "Butter Cakes",
        price: 3.0
      },      
      product4:
      {
        name: "Cranberry Cheesecakes",
        price: 4.5
      }
    },
    store: {},
    contact: {
      weekdaysHours: "10am - 530pm", 
      weekendHours: "10am - 2pm", 
      number: "+65 91234567",
      email: "bakery@cafe.com",
      address: "Bakery Cafe Avenue 3",
      postalCode: "Singapore 812345"
    },
    aboutUs: {
      header: "THE TASTE OF HOME-BAKED GOODNESS",
      introductionSubtext: "Eget nulla facilisi etiam dignissim diam quis enim. At in tellus integer feugiat scelerisque varius morbi enim nunc. Ultricies lacus sed turpis tincidunt id aliquet risus. Convallis aenean et tortor at risus. Odio morbi quis commodo odio aenean sed adipiscing. Ut porttitor leo a diam sollicitudin tempor. Mattis molestie a iaculis at erat pellentesque. Pretium viverra suspendisse potenti nullam ac tortor vitae. Sem nulla pharetra diam sit.",
      name: "MELISSA",
      profileDescription: "Eget nulla facilisi etiam dignissim diam quis enim. At in tellus integer feugiat scelerisque varius morbi enim nunc. Ultricies lacus sed turpis tincidunt id aliquet risus."
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data.home}/>} />
          <Route path="/stop" element={<Store />} />
          <Route path="/ourstory" element={<AboutUs data={data.aboutUs} />} />
          <Route path="/contact" element={<Contact data={data.contact} />} />
        </Routes>
        <Footer data={data.contactInfo}/>
      </div>
    </Router>
  );
}

export default App;
