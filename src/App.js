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
    contact: {},
    aboutUs: {}
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data.home}/>} />
          <Route path="/store" element={<Store />} />
          <Route path="/ourstory" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer data={data.contactInfo}/>
      </div>
    </Router>
  );
}

export default App;
