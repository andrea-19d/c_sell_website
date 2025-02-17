import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Navigation from './components/navigation/Navbar';
import Footer from "./components/common/footer.jsx";

const Home = lazy(() => import('./pages/home/home'));
const About = lazy(() => import('./pages/about/about'));
const Contact = lazy(() => import('./pages/contact/contact'));
const Order = lazy(() => import('./pages/order/order'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='order' element={<Order />} />
                </Route>
            </Routes>
            <Footer/>
        </Suspense>
    );
};

export default App;
