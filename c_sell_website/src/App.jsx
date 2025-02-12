import { useState } from 'react'
import { Routes, Route } from 'react-router';
import viteLogo from '/vite.svg'
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Navigation from './components/common/navigation/navigation';
import Order from './pages/order/order';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />} >
                <Route index path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='order' element={<Order />} />
            </Route>
        </Routes>
  )
};

export default App;
