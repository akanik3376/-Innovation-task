import React, { useEffect, useState } from 'react';
import Card from '../ProductCart/Card'

const AllProduct = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h3 className="text-center font-semibold text-3xl mb-7">FIND THE PERFECT PRODUCT FOR YOU</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5'>

                {
                    data?.products?.map(product => <Card key={product.id} product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default AllProduct;