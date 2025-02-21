import { lazy, Suspense } from 'react';
import {Routes, Route, useLocation} from 'react-router';
import Navigation from './components/navigation/navbar.js';
import Footer from "./components/common/footer.tsx";
import Signup from "./pages/sign-up/signup.tsx";
import SignIn from "./pages/signIn/signIn.tsx";

const Home = lazy(() => import('./pages/home/home.js'));
const About = lazy(() => import('./pages/about/about.js'));
const Contact = lazy(() => import('./pages/contact/contact.js'));
const Order = lazy(() => import('./pages/order/order.js'));

const App = () => {

    const location = useLocation();

    const hiddenFooterPaths = ['/SignIn', '/SignUp'];

    const shouldShowFooter = !hiddenFooterPaths.includes(location.pathname);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='order' element={<Order />} />
                    <Route path='signin' element={<SignIn />} />
                    <Route path='signup' element={<Signup />} />
                </Route>
            </Routes>
            { shouldShowFooter && <Footer/>}
        </Suspense>
    );
};

export default App;
