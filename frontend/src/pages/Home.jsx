import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative bg-indigo-900 text-white rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Elevate Your Style <br /> with Modern Classics
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
                        Discover the latest trends in men's fashion. Premium quality, sustainable materials, and timeless designs.
                    </p>
                    <Link
                        to="/shop"
                        className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                        Shop Now <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Featured Categories */}
            <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['Shirts', 'Pants', 'Accessories'].map((category) => (
                        <div key={category} className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                            <div className="aspect-w-3 aspect-h-4 bg-gray-200 h-64">
                                {/* Placeholder for category image */}
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                    {category} Image
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-bold group-hover:text-indigo-300 transition-colors">
                                    {category}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
