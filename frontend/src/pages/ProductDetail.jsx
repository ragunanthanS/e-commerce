import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, Star } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="flex justify-center items-center h-96">Loading...</div>;
    if (!product) return <div className="text-center py-12">Product not found</div>;

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-xl overflow-hidden">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center"
                        />
                    ) : (
                        <div className="w-full h-96 bg-gray-300 flex items-center justify-center text-gray-500">
                            No Image Available
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <div className="mb-4">
                        <span className="text-indigo-600 font-medium">{product.category_name}</span>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                        </div>
                        <span className="ml-2 text-gray-500 text-sm">(4.8/5 based on 120 reviews)</span>
                    </div>

                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {product.description || "Experience premium quality and comfort with this essential piece. Crafted with attention to detail and designed for the modern man."}
                    </p>

                    <div className="flex items-center justify-between mb-8">
                        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                        <span className="text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full text-sm">
                            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200">
                            <ShoppingCart className="w-6 h-6" />
                            Add to Cart
                        </button>
                        <button className="px-4 py-4 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
                            <Star className="w-6 h-6 text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
