// src/routes/Routes.tsx
import { lazy } from 'react';
import SignIn from "../../pages/signIn/signIn";
import Signup from "../../pages/sign-up/signup";

const Home = lazy(() => import('../../pages/home/home'));
const About = lazy(() => import('../../pages/about/about'));
const Contact = lazy(() => import('../../pages/contact/contact'));
const Order = lazy(() => import('../../pages/order/order'));

export const ROUTES_CONFIG = [
    {path:"/", element: <Home />},
    {path:"/signin", element: <SignIn />},
    {path:"/signup", element: <Signup />},
    {path:"/about", element: <About />},
    {path:"/contact", element: <Contact />},
    {path:"/order", element: <Order />},
];

