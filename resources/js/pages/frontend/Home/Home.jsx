// resources/js/pages/frontend/Home/Home.jsx
import Footer from '../../../shared/Footer';
import Navbar from '../../../shared/navbar';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8 bg-indigo-50 dark:bg-gray-800 transition-colors duration-300">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Welcome to Sazzad Inventory & Logistics
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
          Fast, reliable, and efficient logistics and inventory solutions for your business.
        </p>
      </section>

      {/* Example Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-semibold mb-2">Inventory Management</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Keep track of your stock efficiently with our smart inventory solutions.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-semibold mb-2">Logistics & Delivery</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Reliable logistics services ensuring timely deliveries.
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our support team is here to assist you 24/7.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;