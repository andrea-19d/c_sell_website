import './home.styles.scss';
import Counter from '../../components/common/counter/counter';

const Home = () => {
    return (
        <div className='home-page-container'>
            <div className='main-banner'>
                <h1 className='logo'>SESELL</h1>
                <div className='text-banner'>
                    <h2>BUILD YOUR DREAM</h2>
                    <span>AND STAND OUT FROM THE CROWD</span>
                    <button >EXPLORE</button>
                </div>
            </div>
                    <Counter/>
        </div>
    )
};

export default Home;