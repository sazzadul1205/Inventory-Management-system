// frontend/AboutUs/LeadershipTeamSection/LeadershipTeamSection1.jsx

// React
import { Link } from '@inertiajs/react';
import { useState } from 'react';

// Icons
import {
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineSearch,
    HiOutlineMail,
    HiOutlineArrowRight,
    HiOutlineBriefcase,
    HiOutlineAcademicCap,
    HiOutlineGlobeAlt,
} from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const LeadershipTeamSection1 = ({ config }) => {
    const [openFaq, setOpenFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDepartment, setActiveDepartment] = useState('all');
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const faqs = config?.faqs || [];
    const departments = config?.departments || [];
    const leaders = config?.leaders || [];
    const stats = config?.stats || [];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesSearch;
    });

    const filteredLeaders = leaders.filter(leader => {
        return activeDepartment === 'all' || leader.department === activeDepartment;
    });

    return (
        <section
            className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
            role="region"
            aria-label="Leadership Team"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
            <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full filter blur-3xl" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div
                        className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
                    >
                        {config?.badge?.showPulse && (
                            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        )}
                        <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
                            {config?.badge?.text}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {config?.title?.prefix}{' '}
                        <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
                            {config?.title?.highlightedText}
                        </span>{' '}
                        {config?.title?.suffix}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        {config?.description}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Department Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveDepartment('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeDepartment === 'all'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                            }`}
                    >
                        All Leaders
                    </button>
                    {departments.map((dept) => (
                        <span role="button" tabIndex={0}
                            key={dept.id}
                            onClick={() => setActiveDepartment(dept.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${activeDepartment === dept.id
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                }`}
                        >
                            <span>{dept.icon}</span>
                            {dept.name}
                        </button>
                    ))}
                </div>

                {/* Leadership Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredLeaders.map((leader, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
                            onClick={() => {
                                setSelectedLeader(leader);
                                setShowModal(true);
                            }}
                        >
                            <div className="relative h-64 bg-linear-to-br from-blue-500 to-indigo-600">
                                {leader.avatar ? (
                                    <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-8xl">{leader.icon}</div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-bold">{leader.name}</h3>
                                    <p className="text-sm opacity-90">{leader.title}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                                    {leader.bio}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <HiOutlineBriefcase className="w-3 h-3" />
                                        <span>{leader.experience} years exp.</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {leader.linkedin && (
                                            <a
                                                href={leader.linkedin}
                                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.currentTarget.click(); } }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <AiOutlineLinkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {leader.twitter && (
                                            <a
                                                href={leader.twitter}
                                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <AiOutlineTwitter className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="relative">
                        <HiOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search leadership FAQs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Results Count */}
                {searchQuery && (
                    <div className="text-center mb-4 text-sm text-gray-500">
                        Found {filteredFaqs.length} results for "{searchQuery}"
                    </div>
                )}

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4 mb-12">
                    {filteredFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                            >
                                <div className="flex items-start gap-3 pr-4">
                                    <div className="text-xl mt-0.5">{faq.icon}</div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {faq.question}
                                        </div>
                                        {faq.tags && (
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {faq.tags.slice(0, 2).map((tag, idx) => (
                                                    <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 rounded-full">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-blue-500">
                                    {openFaq === index ? (
                                        <HiOutlineChevronUp className="w-5 h-5" />
                                    ) : (
                                        <HiOutlineChevronDown className="w-5 h-5" />
                                    )}
                                </div>
                            </span>
                            {openFaq === index && (
                                <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                    {faq.link && (
                                        <Link
                                            href={faq.link}
                                            className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-3 hover:gap-2 transition-all"
                                        >
                                            Learn more
                                            <HiOutlineArrowRight className="w-3 h-3" />
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredFaqs.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">👥</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No questions found</h3>
                        <p className="text-gray-500">Try adjusting your search to find what you're looking for.</p>
                    </div>
                )}

                {/* Leadership Modal */}
                {showModal && selectedLeader && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowModal(false)}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-48 bg-linear-to-r from-blue-500 to-indigo-600 rounded-t-3xl">
                                <div className="absolute inset-0 bg-black/20 rounded-t-3xl"></div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-4 right-4 text-white hover:text-gray-200"
                                >
                                    <HiOutlineChevronUp className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="relative px-6 pb-6">
                                <div className="absolute -top-16 left-6 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-6xl border-4 border-white dark:border-gray-800">
                                    {selectedLeader.avatar ? (
                                        <img src={selectedLeader.avatar} alt={selectedLeader.name} className="w-full h-full object-cover rounded-2xl" />
                                    ) : (
                                        selectedLeader.icon
                                    )}
                                </div>
                                <div className="mt-20">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedLeader.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-2">{selectedLeader.title}</p>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <HiOutlineBriefcase className="w-4 h-4" />
                                            <span>{selectedLeader.experience}+ years experience</span>
                                        </div>
                                        {selectedLeader.education && (
                                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                                <HiOutlineAcademicCap className="w-4 h-4" />
                                                <span>{selectedLeader.education}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedLeader.fullBio || selectedLeader.bio}</p>
                                    {selectedLeader.previousRoles && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Previous Experience</h4>
                                            <ul className="space-y-1">
                                                {selectedLeader.previousRoles.map((role, idx) => (
                                                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                                        <HiOutlineBriefcase className="w-3 h-3" />
                                                        {role}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                                        {selectedLeader.linkedin && (
                                            <a href={selectedLeader.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                                                <AiOutlineLinkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {selectedLeader.twitter && (
                                            <a href={selectedLeader.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                                                <AiOutlineTwitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {selectedLeader.email && (
                                            <a href={`mailto:${selectedLeader.email}`} className="text-gray-500 hover:text-blue-600 transition-colors">
                                                <HiOutlineMail className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
                        <HiOutlineGlobeAlt className="w-6 h-6 text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {config?.contactText || "Want to meet our leadership team? Contact us to schedule a conversation."}
                        </span>
                        <Link
                            href={config?.contactLink || "/contact"}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                        >
                            {config?.contactButtonText || "Contact Us"}
                            <HiOutlineArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>

            <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
};

export default LeadershipTeamSection1;

