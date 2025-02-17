import Counter from '../../components/common/counter/counter';
import BannerHome from '../../components/home/BannerHome.jsx';
import ProductCardsList from '../../components/cards/products-list';
import ContactForm from "../../components/forms/contact_form/contact.jsx";
import {CONTACT_BG} from "../../components/constants/constants.jsx";
import VideoPrezentation from "../../components/common/videoPrezentation.jsx";

const Home = () => {
    return (
        <div className="home-page-container">
            <BannerHome/>
            <Counter/>
            <h1 className="px-[5%] font-bold text-gray-950 text-4xl "> Our best sellers...</h1>
            <ProductCardsList displayCount={3}/>

            <VideoPrezentation />

            <div className="" style={{backgroundImage: CONTACT_BG}}>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Home;
