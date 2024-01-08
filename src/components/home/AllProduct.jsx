import React, { useEffect, useState } from 'react';
import Card from '../ProductCart/Card';

const AllProduct = () => {
    const [selectedPrice, setSelectedPrice] = useState('');
    const [data, setData] = useState([]);

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

    const filteredProducts = data?.products?.filter(product => {
        if (selectedPrice === '') {
            // If no price range is selected, include all products
            return true;
        } else {
            // Extracting the minimum and maximum values from the selected range
            const [minRange, maxRange] = selectedPrice.split('-').map(Number);

            // Convert product.price to a number if it's stored as a string in your data
            const productPrice = Number(product.price);

            // Filter based on the selected price range
            return productPrice >= minRange && productPrice <= maxRange;
        }
    });

    return (
        <div className='mt-16'>
            <h3 className="text-center font-semibold text-3xl mb-7">FIND THE PERFECT PRODUCT FOR YOU</h3>
            <div className="px-6 mb-5 fob">
                <label className="text-lg font-medium" htmlFor="priceFilter">Filter by Price: </label>
                <select
                    className="text-base md:text-lg"
                    id="priceFilter"
                    onChange={(e) => setSelectedPrice(e.target.value)}
                    value={selectedPrice}
                >
                    <option value="">All</option>
                    <option value="10-150">10-150</option>
                    <option value="151-250">151-250</option>
                    <option value="251-400">251-400</option>
                    <option value="401-550">401-550</option>
                    <option value="551-700">551-700</option>
                    <option value="701-900">701-900</option>
                    <option value="901-1000">901-1000</option>

                    {/* Add other price options as needed */}
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5'>
                {filteredProducts?.map(product => <Card key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default AllProduct;
