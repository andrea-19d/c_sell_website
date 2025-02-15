import Counter from '../../components/common/counter/counter';
import Banner from '../../components/home/Banner';

const Home = () => {
    return (
        <div className="home-page-container">
            <Banner />
            <Counter />
        </div>
    );
};

export default Home;
