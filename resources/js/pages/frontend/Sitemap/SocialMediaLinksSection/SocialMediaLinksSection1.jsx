// page/frontend/Sitemap/SocialMediaLinksSection/SocialMediaLinksSection1.jsx

// React
import { useState } from 'react';

// Icons
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaMedium,
  FaDev,
  FaStackOverflow,
  FaReddit,
  FaDiscord,
  FaSlack,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
  FaPinterest,
  FaTwitch,
} from 'react-icons/fa';
import {
  HiOutlineShare,
  HiOutlineExternalLink,
  HiOutlineSearch,
  HiOutlineCalendar,
  HiOutlinePrinter,
  HiOutlineGlobe,
} from 'react-icons/hi';
import { SiHashnode, SiProducthunt, SiIndiehackers } from 'react-icons/si';

const SocialMediaLinksSection1 = ({ config }) => {
  const [expandedPlatform, setExpandedPlatform] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [lastUpdated] = useState(config?.lastUpdated || "April 8, 2026");

  // Social media categories and links
  const socialCategories = config?.socialCategories || [
    {
      id: 'main',
      name: 'Main Social Platforms',
      icon: 'globe',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Our primary social media presence',
      linkCount: 6,
      links: [
        { name: 'Twitter', path: 'https://twitter.com/supplychainpro', username: '@supplychainpro', followers: '25.5K', icon: 'twitter', color: '#1DA1F2' },
        { name: 'LinkedIn', path: 'https://linkedin.com/company/supplychainpro', username: 'SupplyChainPro', followers: '42.1K', icon: 'linkedin', color: '#0077B5' },
        { name: 'GitHub', path: 'https://github.com/supplychainpro', username: 'supplychainpro', followers: '3.2K', icon: 'github', color: '#181717' },
        { name: 'YouTube', path: 'https://youtube.com/@supplychainpro', username: '@supplychainpro', subscribers: '12.8K', icon: 'youtube', color: '#FF0000' },
        { name: 'Instagram', path: 'https://instagram.com/supplychainpro', username: '@supplychainpro', followers: '8.5K', icon: 'instagram', color: '#E4405F' },
        { name: 'Facebook', path: 'https://facebook.com/supplychainpro', username: '@supplychainpro', followers: '15.2K', icon: 'facebook', color: '#1877F2' },
      ],
    },
    {
      id: 'developer',
      name: 'Developer Communities',
      icon: 'code',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      description: 'Where our developers engage with the community',
      linkCount: 6,
      links: [
        { name: 'Stack Overflow', path: 'https://stackoverflow.com/companies/supplychainpro', username: 'supplychainpro', reputation: '2.5K', icon: 'stackoverflow', color: '#F58025' },
        { name: 'Dev.to', path: 'https://dev.to/supplychainpro', username: '@supplychainpro', followers: '1.8K', icon: 'dev', color: '#0A0A0A' },
        { name: 'Hashnode', path: 'https://hashnode.com/@supplychainpro', username: '@supplychainpro', followers: '950', icon: 'hashnode', color: '#2962FF' },
        { name: 'Medium', path: 'https://medium.com/@supplychainpro', username: '@supplychainpro', followers: '3.2K', icon: 'medium', color: '#000000' },
        { name: 'Product Hunt', path: 'https://www.producthunt.com/@supplychainpro', username: '@supplychainpro', followers: '1.2K', icon: 'producthunt', color: '#DA552F' },
        { name: 'Indie Hackers', path: 'https://www.indiehackers.com/supplychainpro', username: 'supplychainpro', followers: '780', icon: 'indiehackers', color: '#4A4A4A' },
      ],
    },
    {
      id: 'community',
      name: 'Community & Chat',
      icon: 'chat',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'Join our community discussions',
      linkCount: 4,
      links: [
        { name: 'Discord', path: 'https://discord.gg/supplychainpro', username: 'SupplyChainPro', members: '4.5K', icon: 'discord', color: '#5865F2' },
        { name: 'Slack', path: 'https://slack.supplychainpro.com', username: 'supplychainpro.slack.com', members: '2.8K', icon: 'slack', color: '#4A154B' },
        { name: 'Reddit', path: 'https://reddit.com/r/supplychainpro', username: 'r/supplychainpro', members: '3.1K', icon: 'reddit', color: '#FF4500' },
        { name: 'Telegram', path: 'https://t.me/supplychainpro', username: '@supplychainpro', members: '1.5K', icon: 'telegram', color: '#26A5E4' },
      ],
    },
    {
      id: 'messaging',
      name: 'Messaging Apps',
      icon: 'message',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      description: 'Get updates via messaging apps',
      linkCount: 2,
      links: [
        { name: 'WhatsApp', path: 'https://whatsapp.com/channel/supplychainpro', username: 'SupplyChainPro', subscribers: '2.1K', icon: 'whatsapp', color: '#25D366' },
        { name: 'Telegram Channel', path: 'https://t.me/supplychainpro_news', username: '@supplychainpro_news', subscribers: '1.2K', icon: 'telegram', color: '#26A5E4' },
      ],
    },
    {
      id: 'content',
      name: 'Content Platforms',
      icon: 'video',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'Video and streaming content',
      linkCount: 3,
      links: [
        { name: 'Twitch', path: 'https://twitch.tv/supplychainpro', username: 'supplychainpro', followers: '1.2K', icon: 'twitch', color: '#9146FF' },
        { name: 'TikTok', path: 'https://tiktok.com/@supplychainpro', username: '@supplychainpro', followers: '5.2K', icon: 'tiktok', color: '#000000' },
        { name: 'Pinterest', path: 'https://pinterest.com/supplychainpro', username: 'supplychainpro', followers: '890', icon: 'pinterest', color: '#BD081C' },
      ],
    },
  ];

  // Filter categories based on search
  const filteredCategories = socialCategories.filter(category => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.links.some(link =>
        link.name.toLowerCase().includes(query) ||
        link.username.toLowerCase().includes(query)
      )
    );
  });

  // Get total link count
  const totalLinks = socialCategories.reduce((acc, cat) => acc + cat.links.length, 0);

  // Helper function to render social media icons
  const getSocialIcon = (iconName, className = "w-6 h-6") => {
    const icons = {
      twitter: <FaTwitter className={className} />,
      linkedin: <FaLinkedin className={className} />,
      github: <FaGithub className={className} />,
      youtube: <FaYoutube className={className} />,
      instagram: <FaInstagram className={className} />,
      facebook: <FaFacebook className={className} />,
      medium: <FaMedium className={className} />,
      dev: <FaDev className={className} />,
      stackoverflow: <FaStackOverflow className={className} />,
      reddit: <FaReddit className={className} />,
      discord: <FaDiscord className={className} />,
      slack: <FaSlack className={className} />,
      whatsapp: <FaWhatsapp className={className} />,
      telegram: <FaTelegram className={className} />,
      tiktok: <FaTiktok className={className} />,
      pinterest: <FaPinterest className={className} />,
      twitch: <FaTwitch className={className} />,
      hashnode: <SiHashnode className={className} />,
      producthunt: <SiProducthunt className={className} />,
      indiehackers: <SiIndiehackers className={className} />,
    };
    return icons[iconName] || <FaTwitter className={className} />;
  };

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Social Media Links Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" aria-hidden="true" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-blue-50 dark:bg-gray-800 rounded-full px-4 py-2 mb-6 border border-blue-100 dark:border-gray-700">
            <HiOutlineShare className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {config?.badge || "Social Media"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix || "Connect With"} <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{config?.title?.highlight || "Us"}</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400">
            {config?.description || "Follow us on social media to stay updated with the latest news, product updates, and community discussions."}
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineGlobe className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Platforms:</strong> {totalLinks}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineShare className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Categories:</strong> {socialCategories.length}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <HiOutlineCalendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Last Updated:</strong> {lastUpdated}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <HiOutlinePrinter className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HiOutlineSearch className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search social platforms..."
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Social Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {/* Category Header */}
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${category.color} flex items-center justify-center`}>
                    {category.icon === 'globe' ? <HiOutlineGlobe className="w-6 h-6 text-white" /> :
                      category.icon === 'code' ? <FaGithub className="w-6 h-6 text-white" /> :
                        category.icon === 'chat' ? <FaDiscord className="w-6 h-6 text-white" /> :
                          category.icon === 'message' ? <FaWhatsapp className="w-6 h-6 text-white" /> :
                            <FaYoutube className="w-6 h-6 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500">{category.linkCount} platforms</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {category.description}
                </p>
              </div>

              {/* Category Links */}
              <div className="p-5">
                <ul className="space-y-3">
                  {category.links.slice(0, 4).map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: link.color, color: 'white' }}
                          >
                            {getSocialIcon(link.icon, "w-5 h-5")}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white text-sm">
                              {link.name}
                            </p>
                            <p className="text-xs text-gray-500">{link.username}</p>
                            {link.followers && (
                              <p className="text-xs text-gray-400 mt-0.5">{link.followers} followers</p>
                            )}
                            {link.subscribers && (
                              <p className="text-xs text-gray-400 mt-0.5">{link.subscribers} subscribers</p>
                            )}
                            {link.members && (
                              <p className="text-xs text-gray-400 mt-0.5">{link.members} members</p>
                            )}
                          </div>
                        </div>
                        <HiOutlineExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
                {category.links.length > 4 && (
                  <button
                    onClick={() => setExpandedPlatform(expandedPlatform === category.id ? null : category.id)}
                    className="mt-3 w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    {expandedPlatform === category.id ? 'Show less ↑' : `View all ${category.linkCount} platforms →`}
                  </button>
                )}
                {expandedPlatform === category.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <ul className="space-y-3">
                      {category.links.slice(4).map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{ backgroundColor: link.color, color: 'white' }}
                              >
                                {getSocialIcon(link.icon, "w-5 h-5")}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white text-sm">
                                  {link.name}
                                </p>
                                <p className="text-xs text-gray-500">{link.username}</p>
                                {link.followers && (
                                  <p className="text-xs text-gray-400 mt-0.5">{link.followers} followers</p>
                                )}
                                {link.subscribers && (
                                  <p className="text-xs text-gray-400 mt-0.5">{link.subscribers} subscribers</p>
                                )}
                                {link.members && (
                                  <p className="text-xs text-gray-400 mt-0.5">{link.members} members</p>
                                )}
                              </div>
                            </div>
                            <HiOutlineExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl">
            <HiOutlineSearch className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <p className="text-gray-500">No social platforms match your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-blue-600 hover:underline text-sm"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Follow us for the latest updates, tips, and community news!</p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .dark .bg-grid-pattern {
          background-image: linear-gradient(to right, #374151 1px, transparent 1px),
                            linear-gradient(to bottom, #374151 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default SocialMediaLinksSection1;