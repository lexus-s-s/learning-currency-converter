
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Header />

        <main className="page-shell">
          <Routes>
            <Route path='/' element={<Rate />} />
            <Route path='/about' element={<About />} />
          </Routes>

          <p className="cookie-notice">
            На нашем сайте мы используем cookie для сбора информации технического характера.
            <br />
            В частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего местоположения. OK
          </p>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
