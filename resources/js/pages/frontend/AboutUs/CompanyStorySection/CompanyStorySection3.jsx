// frontend/AboutUs/CompanyStorySection/CompanyStorySection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

// Icons
import {
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlineArrowRight,
  HiOutlineHeart,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineX,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineSparkles,
} from 'react-icons/hi';
import { MdOutlineHandshake } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";

const CompanyStorySection3 = ({ config }) => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('story');
  const [expandedValues, setExpandedValues] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const videoRef = useRef(null);

  const timeline = config?.timeline || [];
  const stats = config?.stats || [];
  const values = config?.values || [];
  const gallery = config?.gallery || [];
  const leadership = config?.leadership || [];
  const achievements = config?.achievements || [];
  const partners = config?.partners || [];
  const offices = config?.offices || [];

  useEffect(() => {
    let interval;
    if (autoplay && gallery.length > 0 && activeTab === 'story') {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % gallery.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, gallery.length, activeTab]);

  const toggleTimeline = (index) => {
    setActiveTimelineIndex(activeTimelineIndex === index ? null : index);
  };

  const toggleValue = (index) => {
    setExpandedValues(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openGalleryModal = (index) => {
    setActiveGalleryIndex(index);
    setShowGalleryModal(true);
    setAutoplay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const nextModalSlide = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevModalSlide = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setTimeout(() => {
      setContactSubmitted(true);
      setTimeout(() => {
        setShowContactForm(false);
        setContactSubmitted(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 3000);
    }, 500);
  };

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      role="region"
      aria-label="Company Story"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-blue-50/30 to-transparent dark:from-blue-900/10 pointer-events-none" aria-hidden="true"></div>
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

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'story'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
          >
            <HiOutlineSparkles className="inline w-4 h-4 mr-2" />
            Our Story
          </button>
          <button
            onClick={() => setActiveTab('values')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'values'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
          >
            <HiOutlineHeart className="inline w-4 h-4 mr-2" />
            Values & Culture
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'impact'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
              }`}
          >
            <HiOutlineTrophy className="inline w-4 h-4 mr-2" />
            Our Impact
          </button>
        </div>

        {/* Story Tab */}
        {activeTab === 'story' && (
          <>
            {/* Story Video Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                <div className="relative aspect-video">
                  {!activeVideo ? (
                    <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-indigo-900 flex items-center justify-center cursor-pointer group" onClick={() => setActiveVideo(true)}>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all">
                          <HiOutlinePlay className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white text-lg font-semibold">Watch Our Story</p>
                        <p className="text-blue-200 text-sm mt-1">{config?.videoDuration || "3:45 min"}</p>
                      </div>
                    </div>
                  ) : (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      src={config?.videoUrl || "/videos/company-story.mp4"}
                      poster={config?.videoPoster || "/images/video-poster.jpg"}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Story Intro */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-10">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {config?.story?.title || "Our Journey"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {config?.story?.paragraph1 || "Founded in 2020 with a simple mission: to revolutionize inventory management for businesses of all sizes. What started as a small team of passionate engineers and supply chain experts has grown into a global platform trusted by thousands of companies worldwide."}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {config?.story?.paragraph2 || "Today, we're proud to serve customers across 45+ countries, helping them streamline operations, reduce costs, and grow their businesses. Our journey is just beginning, and we're excited to continue innovating for our customers."}
                    </p>
                  </div>
                  <div className="bg-linear-to-br from-blue-500 to-indigo-600 p-8 md:p-10 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl mb-3">✨</div>
                      <p className="text-lg font-semibold mb-2">"Making inventory management simple"</p>
                      <p className="text-sm opacity-90">— Our founding principle</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Our Journey Timeline
              </h3>
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-blue-500 to-indigo-500 hidden md:block" aria-hidden="true"></div>
                <div className="space-y-8">
                  {timeline.map((event, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="hidden md:block w-1/2"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 hidden md:block"></div>
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <div
                          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer"
                          onClick={() => toggleTimeline(index)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                              <HiOutlineCalendar className="w-4 h-4" />
                              {event.year}
                            </div>
                            <div className="text-2xl">{event.icon}</div>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{event.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                          {activeTimelineIndex === index && event.details && (
                            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                              <p className="text-xs text-gray-500">{event.details}</p>
                            </div>
                          )}
                          {event.details && (
                            <button className="mt-2 text-xs text-blue-600 hover:underline flex items-center gap-1">
                              {activeTimelineIndex === index ? 'Show less' : 'Read more'}
                              <HiOutlineChevronDown className={`w-3 h-3 transition-transform ${activeTimelineIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo Gallery Carousel */}
            {gallery.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  Moments That Matter
                </h3>
                <div className="relative max-w-4xl mx-auto">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="relative aspect-video">
                      {gallery.map((item, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-500 cursor-pointer ${currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                          onClick={() => openGalleryModal(index)}
                        >
                          <img
                            src={item.image}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                            <p className="text-white text-sm">{item.caption}</p>
                            <p className="text-white/70 text-xs mt-1">{item.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 hover:bg-white transition-all"
                  >
                    <HiOutlineChevronUp className="w-5 h-5 rotate-270" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 hover:bg-white transition-all"
                  >
                    <HiOutlineChevronUp className="w-5 h-5 rotate-90" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setAutoplay(!autoplay)}
                    className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-all"
                  >
                    {autoplay ? <HiOutlinePause className="w-4 h-4" /> : <HiOutlinePlay className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* Values & Culture Tab */}
        {activeTab === 'values' && (
          <>
            {/* Company Values */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center group cursor-pointer" onClick={() => toggleValue(index)}>
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                    {expandedValues[index] && value.details && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-xs text-gray-500">{value.details}</p>
                      </div>
                    )}
                    {value.details && (
                      <button className="mt-2 text-xs text-blue-600 hover:underline">
                        {expandedValues[index] ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Culture Quote */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-16">
              <div className="text-5xl mb-3">💭</div>
              <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4">
                "{config?.cultureQuote || "We believe that great products come from great teams. Our culture is built on trust, transparency, and a shared passion for solving real problems."}"
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">
                {config?.cultureAuthor || "— People & Culture Team"}
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Meet Our Leadership
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {leadership.map((leader, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden text-center group">
                    <div className="aspect-square bg-linear-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                      {leader.avatar ? (
                        <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-6xl group-hover:scale-110 transition-transform">{leader.icon}</div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 dark:text-white">{leader.name}</h4>
                      <p className="text-xs text-blue-600 mb-2">{leader.title}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{leader.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Offices */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Our Global Presence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <HiOutlineLocationMarker className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{office.city}</h4>
                        <p className="text-xs text-gray-500">{office.country}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{office.address}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <HiOutlineUsers className="w-3 h-3" />
                      <span>{office.teamSize} team members</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Impact Tab */}
        {activeTab === 'impact' && (
          <>
            {/* Achievements */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Our Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-center">
                    <div className="text-5xl mb-3">{achievement.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{achievement.value}</div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Trusted Partners
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center min-w-30">
                    <div className="text-3xl mb-2">{partner.icon}</div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{partner.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center group hover:shadow-xl transition-all">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {config?.mission || "To empower businesses with intelligent inventory management solutions that drive efficiency, reduce waste, and enable growth."}
                </p>
              </div>
              <div className="bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 text-center group hover:shadow-xl transition-all">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">👁️</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {config?.vision || "To become the world's most trusted inventory management platform, helping businesses of all sizes achieve operational excellence."}
                </p>
              </div>
            </div>

            {/* Community Impact */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-16">
              <div className="text-5xl mb-3">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Community Commitment</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {config?.communityText || "We believe in giving back. Through our 1% Pledge initiative, we donate 1% of our time, product, and profit to organizations that support sustainable business practices and education."}
              </p>
              <div className="flex justify-center gap-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-blue-600">$500K+</div>
                  <div className="text-xs text-gray-500">Donated</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-600">2,500+</div>
                  <div className="text-xs text-gray-500">Hours Volunteered</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-500">Nonprofits Supported</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Gallery Modal */}
        {showGalleryModal && activeGalleryIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setShowGalleryModal(false)}>
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowGalleryModal(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
              <img
                src={gallery[activeGalleryIndex].image}
                alt={gallery[activeGalleryIndex].caption}
                className="w-full rounded-2xl"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 p-3 rounded-lg mx-4">
                <p className="text-sm">{gallery[activeGalleryIndex].caption}</p>
                <p className="text-xs text-gray-300 mt-1">{gallery[activeGalleryIndex].year}</p>
              </div>
              <button
                onClick={prevModalSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-all"
              >
                <HiOutlineChevronUp className="w-6 h-6 text-white rotate-270" />
              </button>
              <button
                onClick={nextModalSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-all"
              >
                <HiOutlineChevronUp className="w-6 h-6 text-white rotate-90" />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveGalleryIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${activeGalleryIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowContactForm(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Us</h3>
                <button onClick={() => setShowContactForm(false)} className="text-gray-500 hover:text-gray-700">✕</button>
              </div>
              {!contactSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                    required
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700"
                  />
                  <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="text-5xl mb-3">✅</div>
                  <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                  <p className="text-sm text-gray-500">We'll get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Team Quote */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 text-center mb-12">
          <div className="text-5xl mb-3">💭</div>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4">
            "{config?.quote || "Our team is passionate about solving real-world problems. Every day, we work to make inventory management simpler, smarter, and more accessible for businesses everywhere."}"
          </p>
          <div className="font-semibold text-gray-900 dark:text-white">
            {config?.quoteAuthor || "— Alex Chen, CEO & Co-founder"}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-linear-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl">
            <MdOutlineHandshake className="w-6 h-6 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {config?.contactText || "Want to be part of our story? Join our team or partner with us."}
            </span>
            <div className="flex gap-3">
              <Link
                href={config?.contactLink || "/careers"}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Join Our Team
                <HiOutlineArrowRight aria-hidden="true" />
              </Link>
              <button
                onClick={() => setShowContactForm(true)}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center gap-2"
              >
                <HiOutlineMail className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        .rotate-90 {
          transform: rotate(90deg);
        }
        .rotate-270 {
          transform: rotate(270deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default CompanyStorySection3;
