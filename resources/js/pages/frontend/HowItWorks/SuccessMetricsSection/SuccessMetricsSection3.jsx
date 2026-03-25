// page/frontend/HowItWorks/SuccessMetricsSection/SuccessMetricsSection3.jsx

// React
import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

// Icons
import {
  HiOutlineClock,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineChartPie,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineSparkles,
  HiOutlineChip,
} from 'react-icons/hi';
import { FiTarget } from "react-icons/fi";

const SuccessMetricsSection3 = ({ config }) => {
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [goalProgress, setGoalProgress] = useState({});
  const [selectedPrediction, setSelectedPrediction] = useState('inventory');

  const segments = config?.customerSegments || [];
  const predictions = config?.predictions || {};
  const goals = config?.goals || [];

  useEffect(() => {
    const progress = {};
    goals.forEach(goal => {
      progress[goal.id] = Math.min(100, Math.floor(Math.random() * 30) + 65);
    });
    setGoalProgress(progress);
  }, [goals]);

  const getSegmentData = () => {
    if (selectedSegment === 'all') {
      return config?.overviewMetrics;
    }
    return segments.find(s => s.id === selectedSegment)?.metrics;
  };

  const segmentData = getSegmentData();

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Success Metrics Section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-50/50 to-transparent dark:from-emerald-900/10 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Metrics badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Section Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* AI-Powered Insights Banner */}
        {config?.showAIInsights && (
          <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-6 mb-12 text-white">
            <div className="flex items-start gap-4">
              <HiOutlineChip className="w-8 h-8 shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-1">AI-Powered Insights</h3>
                <p className="text-green-100 text-sm mb-3">{config?.aiInsightText || "Based on your data, we predict you could achieve 32% faster inventory turnover by implementing automated reordering."}</p>
                <Link
                  href={config?.aiInsightLink || "/insights"}
                  className="inline-flex items-center gap-2 text-sm bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-all"
                >
                  Explore Insights
                  <HiArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Customer Segmentation */}
        {config?.showSegmentation && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineUsers className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Customer Success by Segment</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedSegment('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedSegment === 'all'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                  }`}
              >
                All Customers
              </button>
              {segments.map(segment => (
                <button
                  key={segment.id}
                  onClick={() => setSelectedSegment(segment.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedSegment === segment.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                    }`}
                >
                  {segment.icon} {segment.name}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {segmentData?.map((metric, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                  <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                  <div className={`text-xs mt-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.trend === 'up' ? '↑' : '↓'} {metric.change} vs average
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Predictive Analytics Section */}
        {config?.showPredictions && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineSparkles className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Predictive Analytics</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Prediction Cards */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {['inventory', 'demand', 'costs'].map(pred => (
                    <button
                      key={pred}
                      onClick={() => setSelectedPrediction(pred)}
                      className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-all ${selectedPrediction === pred
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                        }`}
                    >
                      {pred === 'inventory' && '📦 Inventory'}
                      {pred === 'demand' && '📈 Demand'}
                      {pred === 'costs' && '💰 Cost Savings'}
                    </button>
                  ))}
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-2">
                    {predictions[selectedPrediction]?.title || "6-Month Forecast"}
                  </div>
                  <div className="relative h-48 mb-4">
                    <div className="absolute inset-0 flex items-end gap-2">
                      {predictions[selectedPrediction]?.data?.map((item, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div
                            className="w-full bg-linear-to-t from-green-500 to-emerald-500 rounded-t-lg transition-all duration-500"
                            style={{ height: `${(item.predicted / 100) * 160}px` }}
                          ></div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-t-lg" style={{ height: `${(item.actual / 100) * 160}px` }}></div>
                          <span className="text-xs text-gray-500">{item.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span>Predicted</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 bg-gray-300 rounded"></div>
                      <span>Current Trend</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      💡 {predictions[selectedPrediction]?.insight || "Based on current trends, we project a 28% improvement in the next quarter."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Calculator */}
              <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
                <FiTarget className="w-8 h-8 mb-3" />
                <h4 className="text-lg font-bold mb-2">Impact Calculator</h4>
                <p className="text-sm text-green-100 mb-4">
                  See how implementing recommended actions could impact your business.
                </p>
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Current Performance</span>
                      <span>{predictions[selectedPrediction]?.current || "78"}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: `${predictions[selectedPrediction]?.current || 78}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Potential with Optimization</span>
                      <span>{predictions[selectedPrediction]?.potential || "95"}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-yellow-300 h-2 rounded-full" style={{ width: `${predictions[selectedPrediction]?.potential || 95}%` }}></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">+{predictions[selectedPrediction]?.improvement || "17"}%</div>
                  <div className="text-xs text-green-200">Potential Improvement</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goal Tracking Dashboard */}
        {config?.showGoals && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineFlag className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Goal Progress Tracking</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <div key={goal.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-2xl mb-1">{goal.icon}</div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{goal.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">Target: {goal.target}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{goalProgress[goal.id] || 0}%</div>
                      <div className="text-xs text-gray-500">Complete</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${goalProgress[goal.id] || 0}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Current: {goal.current}</span>
                    <span className="text-green-600">{goal.remaining} to go</span>
                  </div>
                  <Link
                    href={goal.link}
                    className="inline-flex items-center gap-1 text-sm text-green-600 mt-3 hover:underline"
                  >
                    View details
                    <HiArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ROI & Efficiency Dashboard */}
        {config?.showROI && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* ROI Heatmap */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineChartPie className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">ROI by Department</h3>
              </div>
              <div className="space-y-4">
                {config?.roiByDepartment?.map((dept, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{dept.name}</span>
                      <span className="font-semibold text-green-600">+{dept.roi}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-linear-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                        style={{ width: `${dept.roi}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Efficiency Gains */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <HiOutlineClock className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-gray-900 dark:text-white">Efficiency Gains</h3>
              </div>
              <div className="space-y-4">
                {config?.efficiencyGains?.map((gain, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{gain.area}</div>
                      <div className="text-xs text-gray-500">{gain.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{gain.improvement}</div>
                      <div className="text-xs text-gray-500">improvement</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Success Stories with Metrics */}
        {config?.showStories && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Customer Success Stories</h3>
              <p className="text-gray-600 dark:text-gray-400">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config?.successStories?.map((story, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                  <div className="bg-linear-to-r from-green-600 to-emerald-600 p-4 text-white">
                    <div className="text-2xl mb-1">{story.icon}</div>
                    <div className="font-bold">{story.company}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{story.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600">{story.metric1}</div>
                        <div className="text-xs text-gray-500">{story.label1}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600">{story.metric2}</div>
                        <div className="text-xs text-gray-500">{story.label2}</div>
                      </div>
                    </div>
                    <Link
                      href={story.link}
                      className="inline-flex items-center gap-1 text-sm text-green-600 font-semibold hover:underline"
                    >
                      Read full story
                      <HiArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        {config?.showCta && (
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
              <div className="flex items-center gap-2">
                <HiOutlineGift className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {config?.ctaText || "Ready to achieve these results?"}
                </span>
              </div>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Journey"}
                <HiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Required CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .bg-noise-pattern {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
      `}</style>
    </section>
  );
};

export default SuccessMetricsSection3;