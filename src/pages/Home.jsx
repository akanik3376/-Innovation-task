import React from 'react';
import AllProduct from '../components/home/AllProduct';
import Banner from '../components/home/Banner';

const Home = () => {
    return (
        <div className='container mx-auto mb-12'>

            {/* Banner Section */}
            <section>
                <Banner></Banner>
            </section>
            {/* all product section */}
            <section>
                < AllProduct />
            </section>
        </div>

    );
};

export default Home;
