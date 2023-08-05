import { Routes, Route } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';

import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Booking from './components/Booking.jsx';
import ConfirmedBooking from './components/confirmedBooking.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='home' element={<Footer />} />
        <Route path='booking-a-table' element={<Booking />} />
        <Route path='confirmed-booking' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
