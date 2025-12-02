import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Filter } from 'lucide-react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // In a real app, you'd use an environment variable for the API URL
                const response = await axios.get('http://127.0.0.1:8000/api/products/');
                setProducts(response.data);

                // Extract unique categories
                const uniqueCategories = ['All', ...new Set(response.data.map(p => p.category_name))];
                setCategories(uniqueCategories);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category_name === selectedCategory);

    if (loading) {
        return <div className="flex justify-center items-center h-96">Loading...</div>;
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Shop Collection</h1>

                <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Filter className="w-5 h-5" />
                        <span className="font-medium">Filter by:</span>
                    </div>
                    <select
                        className="border-gray-300 border rounded-md px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`} className="group">
                        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                ) : (
                                    <div className="h-64 w-full bg-gray-300 flex items-center justify-center text-gray-500">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="mt-1 text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.category_name}</p>
                                <p className="mt-2 text-xl font-bold text-gray-900">${product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Shop;
