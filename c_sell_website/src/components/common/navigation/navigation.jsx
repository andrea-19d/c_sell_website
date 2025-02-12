import { Outlet, Link } from 'react-router';
import { Fragment } from 'react';
import './navigation-styles.scss';
//import { ReactContainer as ReactSVG } from '../../../assets/react.svg';
import  { useState } from 'react';
import ReactSVG from '../../../assets/svg-components/reactSvg';
import { FaBars } from 'react-icons/fa';


const Navigation = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Fragment>
                <button className="hamburger" onClick={toggleSidebar}>
                    <FaBars size={20} />
                </button>
            <div className={`navigation ${isOpen ? 'open' : 'closed'}`}>
                <div className='nav-link-container'>
                    <Link className='nav-link' to='/home'>Home</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    <Link className='nav-link' to='/order'>Order</Link>
                </div>
            </div>
                <Outlet />
        </Fragment>
    );
};

export default Navigation;