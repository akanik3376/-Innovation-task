import React, { useEffect, useState } from 'react';
import Card from '../ProductCart/Card';

const AllProduct = () => {
    const [selectedPrice, setSelectedPrice] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

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

    // filteredProducts based on price and title
    const filteredProducts = data?.products?.filter(product => {
        // Filter by price
        const isPriceMatch = selectedPrice === '' || (
            (selectedPrice !== '1000+' && selectedPrice.split('-').map(Number)[0] <= Number(product.price) &&
                Number(product.price) <= selectedPrice.split('-').map(Number)[1]) ||
            (selectedPrice === '1000+' && Number(product.price) > 1000)
        );

        // Filter by product title
        const isNameMatch = product?.title.toLowerCase().includes(searchQuery.toLowerCase());

        // Return true if both conditions are match
        return isPriceMatch && isNameMatch;
    });


    // Handle search input change
    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.elements.search.value);
    };

    // Add to cart function
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Calculate total amount in the cart
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className='mt-16'>
            <h3 className="text-center font-semibold text-3xl mb-7">FIND THE PERFECT PRODUCT FOR YOU</h3>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col mr-4 my-4 space-y-4 ">
                    {/* Filter by product title */}
                    <div className="flex ">
                        <form onSubmit={handleSearchChange} className="flex">
                            <input
                                type="text"
                                className="text-base focus:border-blue-500 md:text-lg"
                                placeholder=" Search..."
                                name='search'
                            />
                            <button
                                type="submit"
                                className='ml-2 bg-blue-500 py-2 px-4 rounded-md text-white font-semibold'>
                                Search
                            </button>
                        </form>
                    </div>
                    {/* Filter by price */}
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
                            <option value="1000+">1000+</option>
                        </select>
                    </div>
                </div>
                <div className='py-4 text-white font-semibold my-4 bg-slate-400 p-6  mx-auto md:mx-0'>
                    <h1 className='text-2xl'>Your Cart</h1>
                    <p className='text-center'>{cartTotal}</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5'>
                {filteredProducts?.map(product => (
                    <Card key={product.id} product={product} addToCart={() => addToCart(product)} />
                ))}
            </div>

        </div>
    );
};

export default AllProduct;
