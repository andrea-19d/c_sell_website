import Counter from '../../components/common/counter/counter';
import Banner from '../../components/home/Banner';
import ProductCardsList from '../../components/cards/products-list';

const Home = () => {
    return (
        <div className="home-page-container">
            <Banner />
            <Counter />
            <ProductCardsList />
        </div>
    );
};

export default Home;
