// page/frontend/HowItWorks/SuccessMetricsSection/SuccessMetricsSection3.jsx

/**
 * Success Metrics Section 3 Component
 * Advanced analytics dashboard featuring:
 * - AI-powered insights banner
 * - Customer segmentation metrics
 * - Predictive analytics with forecasting
 * - Goal tracking with progress bars
 * - Departmental ROI analysis
 * - Efficiency gains tracker
 * - Customer success stories
 * 
 * All icons are from react-icons library (no emojis, no custom icons)
 * Fully responsive and dark mode compatible
 */

// React Core Imports
import { Link } from '@inertiajs/react';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

// React Icons - All from react-icons library (no emojis, no custom icons)
import {
  HiOutlineClock,
  HiArrowRight,
  HiOutlineUsers,
  HiOutlineChartPie,
  HiOutlineFlag,
  HiOutlineGift,
  HiOutlineSparkles,
  HiOutlineChip,
  HiOutlineTrendingUp,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineUserGroup,
  HiOutlineTruck,
  HiOutlineDatabase,
  HiOutlineShieldCheck,
  HiOutlineCalculator,
  HiOutlineDocumentText,
  HiOutlinePlay,
  HiOutlineExternalLink,
  HiOutlinePresentationChartLine,
  HiOutlineCursorClick
} from 'react-icons/hi';

const SuccessMetricsSection3 = ({ config }) => {
  // ==================== STATE MANAGEMENT ====================
  const [goalProgress, setGoalProgress] = useState({});                                                   // Progress percentages for goals
  const [animatedPredictions, setAnimatedPredictions] = useState(false);                                  // Chart animation trigger
  const [selectedSegment, setSelectedSegment] = useState(config?.initialSegment || 'all');                // Current customer segment filter
  const [selectedPrediction, setSelectedPrediction] = useState(config?.initialPrediction || 'inventory'); // Active prediction type

  // Ref for intersection observer
  const predictionsRef = useRef(null);

  // ==================== MEMOIZED DATA ====================
  // Memoize customer segments for performance
  const segments = useMemo(() => config?.customerSegments || [], [config]);

  // Memoize goals data
  const goals = useMemo(() => config?.goals || [], [config]);

  // Memoize predictions data
  const predictions = useMemo(() => config?.predictions || {}, [config]);

  // ==================== INTERSECTION OBSERVER ====================
  // Trigger chart animation when predictions section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedPredictions(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (predictionsRef.current) {
      observer.observe(predictionsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ==================== INITIALIZATION EFFECTS ====================
  // Initialize goal progress with random realistic values
  useEffect(() => {
    const progress = {};
    goals.forEach(goal => {
      // Calculate realistic progress based on current vs target
      const currentNum = parseFloat(goal.current) || 0;
      const targetNum = parseFloat(goal.target) || 100;
      const calculatedProgress = Math.min(100, Math.round((currentNum / targetNum) * 100));
      progress[goal.id] = calculatedProgress;
    });
    setGoalProgress(progress);
  }, [goals]);

  // ==================== HELPER FUNCTIONS ====================
  /**
   * Get data for selected customer segment
   * @returns {Array} Segment metrics data
   */
  const getSegmentData = useCallback(() => {
    if (selectedSegment === 'all') {
      return config?.overviewMetrics;
    }
    const segment = segments.find(s => s.id === selectedSegment);
    return segment?.metrics || [];
  }, [selectedSegment, segments, config?.overviewMetrics]);

  /**
   * Get icon component by name
   * @param {string} iconName - Name of the icon
   * @param {string} className - CSS classes for the icon
   * @returns {JSX.Element} Icon component
   */
  const getIcon = useCallback((iconName, className = "w-5 h-5") => {
    const icons = {
      'clock': HiOutlineClock,
      'arrow': HiArrowRight,
      'users': HiOutlineUsers,
      'pie': HiOutlineChartPie,
      'flag': HiOutlineFlag,
      'gift': HiOutlineGift,
      'sparkles': HiOutlineSparkles,
      'chip': HiOutlineChip,
      'trending': HiOutlineTrendingUp,
      'chart': HiOutlineChartBar,
      'dollar': HiOutlineCurrencyDollar,
      'check': HiOutlineCheckCircle,
      'bulb': HiOutlineLightBulb,
      'star': HiOutlineStar,
      'group': HiOutlineUserGroup,
      'truck': HiOutlineTruck,
      'database': HiOutlineDatabase,
      'shield': HiOutlineShieldCheck,
      'calculator': HiOutlineCalculator,
      'document': HiOutlineDocumentText,
      'play': HiOutlinePlay,
      'external': HiOutlineExternalLink,
      'target': HiOutlineCursorClick,
      'presentation': HiOutlinePresentationChartLine
    };

    const IconComponent = icons[iconName] || HiOutlineChartBar;
    return <IconComponent className={className} />;
  }, []);

  /**
   * Get trend indicator symbol
   * @param {string} trend - 'up' or 'down'
   * @returns {string} Arrow symbol
   */
  const getTrendSymbol = useCallback((trend) => {
    return trend === 'up' ? '↑' : '↓';
  }, []);

  // Get current segment data
  const segmentData = getSegmentData();

  // Get current prediction data
  const currentPrediction = predictions[selectedPrediction] || predictions.inventory || {};

  return (
    <section
      className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden"
      role="region"
      aria-label="Advanced Success Metrics Dashboard"
    >
      {/* ==================== BACKGROUND DECORATIONS ==================== */}
      <div className="absolute inset-0 bg-noise-pattern opacity-5 dark:opacity-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-green-50/50 to-transparent dark:from-green-900/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-r from-emerald-50/50 to-transparent dark:from-emerald-900/10 pointer-events-none" aria-hidden="true" />

      {/* Floating decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-green-300/5 dark:bg-green-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-emerald-300/5 dark:bg-emerald-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==================== SECTION HEADER ==================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div
            className={`inline-flex items-center ${config?.badge?.backgroundColor} rounded-full px-4 py-2 mb-6 border ${config?.badge?.borderColor}`}
            aria-label="Metrics badge"
          >
            {config?.badge?.showPulse && (
              <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            )}
            <span className={`text-sm font-medium ${config?.badge?.textColor}`}>
              {config?.badge?.text}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {config?.title?.prefix}{' '}
            <span className={`bg-linear-to-r ${config?.title?.highlightGradient} bg-clip-text text-transparent`}>
              {config?.title?.highlightedText}
            </span>{' '}
            {config?.title?.suffix}
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {config?.description}
          </p>
        </div>

        {/* ==================== AI-POWERED INSIGHTS BANNER ==================== */}
        {config?.showAIInsights && (
          <div className="bg-linear-to-r from-green-600 to-emerald-600 rounded-2xl p-6 mb-12 text-white shadow-xl hover:shadow-2xl transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                {getIcon("chip", "w-6 h-6 text-white")}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">AI-Powered Insights</h3>
                <p className="text-green-100 text-sm mb-3 leading-relaxed">
                  {config?.aiInsightText || "Based on your data, we predict you could achieve 32% faster inventory turnover by implementing automated reordering."}
                </p>
                <Link
                  href={config?.aiInsightLink || "/insights"}
                  className="inline-flex items-center gap-2 text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-all"
                >
                  Explore Insights
                  {getIcon("arrow", "w-3 h-3")}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== CUSTOMER SEGMENTATION SECTION ==================== */}
        {config?.showSegmentation && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                {getIcon("users", "w-5 h-5 text-green-600")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Customer Success by Segment</h3>
                <p className="text-sm text-gray-500">Compare performance across different customer types</p>
              </div>
            </div>

            {/* Segment Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedSegment('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedSegment === 'all'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                aria-label="Show all customers"
              >
                All Customers
              </button>
              {segments.map(segment => (
                <button
                  key={segment.id}
                  onClick={() => setSelectedSegment(segment.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedSegment === segment.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  aria-label={`Show ${segment.name} segment`}
                >
                  {getIcon(segment.icon, "w-4 h-4")}
                  {segment.name}
                </button>
              ))}
            </div>

            {/* Segment Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {segmentData?.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {getIcon(metric.icon, "w-4 h-4 text-green-600")}
                    <div className="text-sm text-gray-500">{metric.label}</div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                    {metric.value}
                  </div>
                  <div className={`flex items-center gap-1 text-xs ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    <span>{getTrendSymbol(metric.trend)}</span>
                    <span>{metric.change} vs average</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== PREDICTIVE ANALYTICS SECTION ==================== */}
        {config?.showPredictions && (
          <div ref={predictionsRef} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                {getIcon("sparkles", "w-5 h-5 text-green-600")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Predictive Analytics</h3>
                <p className="text-sm text-gray-500">AI-powered forecasts and what-if scenarios</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Prediction Chart Card */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                {/* Prediction Type Selector */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                  {config?.predictionTypes?.map(pred => (
                    <button
                      key={pred.value}
                      onClick={() => setSelectedPrediction(pred.value)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${selectedPrediction === pred.value
                        ? 'bg-green-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      aria-label={`Show ${pred.label} forecast`}
                    >
                      {getIcon(pred.icon, "w-4 h-4")}
                      {pred.label}
                    </button>
                  ))}
                </div>

                {/* Chart */}
                <div>
                  <div className="text-sm text-gray-500 mb-3">
                    {currentPrediction.title || "6-Month Forecast"}
                  </div>
                  <div className="relative h-56 mb-5">
                    <div className="absolute inset-0 flex items-end gap-2">
                      {currentPrediction.data?.map((item, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                          {/* Predicted Bar */}
                          <div
                            className="w-full bg-linear-to-t from-green-500 to-emerald-500 rounded-t-lg transition-all duration-700 cursor-pointer relative group"
                            style={{
                              height: animatedPredictions ? `${(item.predicted / 100) * 180}px` : '0px',
                              transitionDelay: `${idx * 50}ms`
                            }}
                          >
                            {/* Tooltip */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                              Predicted: {item.predicted}{item.suffix || ''}
                            </div>
                          </div>
                          {/* Actual Bar */}
                          <div
                            className="w-full bg-gray-300 dark:bg-gray-600 rounded-t-lg transition-all duration-700"
                            style={{
                              height: animatedPredictions ? `${(item.actual / 100) * 180}px` : '0px',
                              transitionDelay: `${idx * 50}ms`
                            }}
                          />
                          {/* Month Label */}
                          <span className="text-xs text-gray-500">{item.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chart Legend */}
                  <div className="flex justify-center gap-6 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 bg-linear-to-t from-green-500 to-emerald-500 rounded" />
                      <span className="text-gray-600 dark:text-gray-400">Predicted</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded" />
                      <span className="text-gray-600 dark:text-gray-400">Current Trend</span>
                    </div>
                  </div>

                  {/* Insight Box */}
                  <div className="mt-5 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
                    <div className="flex items-start gap-2">
                      {getIcon("bulb", "w-4 h-4 text-green-600 mt-0.5 shrink-0")}
                      <p className="text-sm text-green-800 dark:text-green-300">
                        {currentPrediction.insight || "Based on current trends, we project a 28% improvement in the next quarter."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Calculator Card */}
              <div className="bg-linear-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  {getIcon("target", "w-6 h-6 text-white")}
                </div>
                <h4 className="text-xl font-bold mb-2">Impact Calculator</h4>
                <p className="text-sm text-green-100 mb-5 leading-relaxed">
                  See how implementing recommended actions could impact your business.
                </p>

                {/* Current Performance */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>Current Performance</span>
                    <span className="font-semibold">{currentPrediction.current || 78}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-white h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${currentPrediction.current || 78}%` }}
                    />
                  </div>
                </div>

                {/* Potential Performance */}
                <div className="mb-5">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>Potential with Optimization</span>
                    <span className="font-semibold">{currentPrediction.potential || 95}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div
                      className="bg-yellow-300 h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${currentPrediction.potential || 95}%` }}
                    />
                  </div>
                </div>

                {/* Improvement Stat */}
                <div className="text-center pt-3 border-t border-white/20">
                  <div className="text-3xl font-bold">+{currentPrediction.improvement || 17}%</div>
                  <div className="text-xs text-green-100 mt-1">Potential Improvement</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== GOAL TRACKING DASHBOARD ==================== */}
        {config?.showGoals && goals.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                {getIcon("flag", "w-5 h-5 text-green-600")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Goal Progress Tracking</h3>
                <p className="text-sm text-gray-500">Monitor your progress towards key business objectives</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                        {getIcon(goal.icon, "w-6 h-6 text-green-600")}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{goal.title}</h4>
                        <p className="text-xs text-gray-500">Target: {goal.target}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{goalProgress[goal.id] || 0}%</div>
                      <div className="text-xs text-gray-500">Complete</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-3">
                    <div
                      className="bg-linear-to-r from-green-500 to-emerald-500 h-2.5 rounded-full transition-all duration-700"
                      style={{ width: `${goalProgress[goal.id] || 0}%` }}
                    />
                  </div>

                  {/* Current vs Remaining */}
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-600 dark:text-gray-400">Current: {goal.current}</span>
                    <span className="text-green-600 font-medium">{goal.remaining} to go</span>
                  </div>

                  <Link
                    href={goal.link}
                    className="inline-flex items-center gap-1 text-sm text-green-600 font-semibold hover:gap-2 transition-all"
                  >
                    View details
                    {getIcon("arrow", "w-3 h-3")}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== ROI & EFFICIENCY DASHBOARD ==================== */}
        {config?.showROI && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* ROI by Department */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  {getIcon("pie", "w-5 h-5 text-green-600")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">ROI by Department</h3>
                  <p className="text-xs text-gray-500">Return on investment across business units</p>
                </div>
              </div>

              <div className="space-y-4">
                {config?.roiByDepartment?.map((dept, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-600 dark:text-gray-400">{dept.name}</span>
                      <span className="font-semibold text-green-600">+{dept.roi}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-linear-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-700"
                        style={{ width: `${Math.min(dept.roi, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Efficiency Gains */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  {getIcon("clock", "w-5 h-5 text-green-600")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">Efficiency Gains</h3>
                  <p className="text-xs text-gray-500">Measurable improvements across operations</p>
                </div>
              </div>

              <div className="space-y-3">
                {config?.efficiencyGains?.map((gain, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                  >
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

        {/* ==================== CUSTOMER SUCCESS STORIES ==================== */}
        {config?.showStories && config?.successStories?.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {config?.storiesTitle || "Customer Success Stories"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {config?.storiesDescription || "Real results from real businesses"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Story Header */}
                  <div className="bg-linear-to-r from-green-600 to-emerald-600 p-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      {getIcon(story.icon, "w-6 h-6")}
                      <div className="font-bold">{story.company}</div>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="p-5">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {story.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">{story.metric1}</div>
                        <div className="text-xs text-gray-500">{story.label1}</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">{story.metric2}</div>
                        <div className="text-xs text-gray-500">{story.label2}</div>
                      </div>
                    </div>

                    <Link
                      href={story.link}
                      className="inline-flex items-center gap-1 text-sm text-green-600 font-semibold hover:gap-2 transition-all group-hover:text-green-700"
                    >
                      Read full story
                      {getIcon("arrow", "w-3 h-3")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== CALL TO ACTION ==================== */}
        {config?.showCta && (
          <div className="mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-5 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                {getIcon("gift", "w-6 h-6 text-green-600")}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                {config?.ctaText || "Ready to achieve these results?"}
              </span>
              <Link
                href={config?.ctaLink || "/demo"}
                className="px-6 py-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                {config?.ctaButtonText || "Start Your Journey"}
                {getIcon("arrow", "w-4 h-4")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ==================== STYLES ==================== */}
      <style>{`
        /* Noise Pattern Background */
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