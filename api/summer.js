import React, { useEffect, useState } from 'react';

const SummerVibes = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async (page = 1) => {
        try {
            const res = await fetch(`/api/summer?page=${page}`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setProducts(data); // Set the products in state
        } catch (err) {
            setError(err.message); // Set the error message
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false); // Set loading to false regardless of success or failure
        }
    };

    useEffect(() => {
        fetchProducts(); // Call the function to fetch products on component mount
    }, []); // Empty dependency array to run only on mount

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message
    }

    return (
        <div>
            <h1>Summer Vibes Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li> // Display product name
                ))}
            </ul>
        </div>
    );
};

export default SummerVibes;
