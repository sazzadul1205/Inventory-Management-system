// resources/js/pages/frontend/Home/Home.jsx

// Layout
import FrontEnd_Layout from '../Layout/FrontEnd_Layout';
import HeroSection1 from './HeroSection/HeroSection1';
import HeroSection2 from './HeroSection/HeroSection2';
import HeroSection3 from './HeroSection/HeroSection3';
import HeroSectionCustom from './HeroSection/HeroSectionCustom';

const Home = () => {
  const myHeroCustomConfig = {
    // Custom light theme colors
    lightTheme: {
      background: '#f0f9ff',     // light blue background
      text: '#0c4a6e',            // dark blue text
      textSecondary: '#0369a1',    // medium blue
      accent: '#0284c7',
      badgeBg: '#bae6fd',
      badgeText: '#0369a1',
      cardBg: '#ffffff',
      border: '#7dd3fc',
      featureIcon: '#f97316',      // orange icons
      primaryBtnBg: '#f97316',
      primaryBtnHover: '#fb923c',
      primaryBtnText: '#ffffff',
      secondaryBtnBorder: '#0c4a6e',
      secondaryBtnText: '#0c4a6e',
    },

    // Custom dark theme colors
    darkTheme: {
      background: '#0f172a',
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      accent: '#38bdf8',
      badgeBg: '#1e293b',
      badgeText: '#7dd3fc',
      cardBg: '#1e293b',
      border: '#334155',
      featureIcon: '#f97316',
      primaryBtnBg: '#f97316',
      primaryBtnHover: '#fb923c',
      primaryBtnText: '#0f172a',
      secondaryBtnBorder: '#f8fafc',
      secondaryBtnText: '#f8fafc',
    },

    title: 'Your Custom Title Here',
    description: 'Your custom description with complete color control',
  };

  return (
    <FrontEnd_Layout>

      <HeroSection1 />
      <HeroSection2 />
      <HeroSection3 />
      <HeroSectionCustom config={myHeroCustomConfig} theme="light" />

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

    </FrontEnd_Layout>
  );
};

export default Home;