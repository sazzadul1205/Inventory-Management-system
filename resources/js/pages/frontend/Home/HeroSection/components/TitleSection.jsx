// page/frontend/Home/HeroSection/components/TitleSection.jsx

import React from 'react';
import { motion } from 'framer-motion';

const TITLE_SIZES = {
  xs: "text-lg sm:text-xl md:text-2xl",
  sm: "text-xl sm:text-2xl md:text-3xl",
  md: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  lg: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
  xl: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
  "2xl": "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
};

const TITLE_WEIGHTS = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black"
};

const TITLE_TRACKING = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest"
};

const TITLE_LEADING = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose"
};

// Animation variants (unchanged)
const ANIMATION_VARIANTS = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } }
  },
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity }
    }
  },
  bounce: {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 0.5, repeat: Infinity }
    }
  },
  wave: {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: { duration: 2, repeat: Infinity }
    }
  },
  glow: {
    animate: {
      textShadow: [
        "0 0 5px currentColor",
        "0 0 20px currentColor",
        "0 0 5px currentColor"
      ],
      transition: { duration: 2, repeat: Infinity }
    }
  },
  stagger: {
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }
};

const LETTER_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const WORD_VARIANTS = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const ALIGNMENT = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto"
};

const TitleSection = ({ config }) => {
  // If no config, return null
  if (!config) return null;

  const {
    // Content
    title = '',
    highlightText = '',

    // Highlight Configuration
    highlight = {
      type: "color",
      position: "auto"
    },

    // Style Props
    size = "md",
    weight = "bold",
    tracking = "normal",
    leading = "tight",
    align = "left",
    maxWidth = "",

    // Colors with dark mode support
    colors = {
      text: "text-gray-900",
      textDark: "dark:text-white"
    },

    // Highlight colors with dark mode support
    highlightColors = {
      color: "text-blue-600",
      colorDark: "dark:text-blue-400",
      gradient: "from-blue-600 to-purple-600",
      gradientDark: "dark:from-blue-400 dark:to-purple-400",
      underline: "bg-blue-600",
      underlineDark: "dark:bg-blue-400",
      background: "bg-blue-100",
      backgroundDark: "dark:bg-blue-900",
      stroke: "text-blue-600",
      strokeDark: "dark:text-blue-400",
      strike: "bg-red-500",
      strikeDark: "dark:bg-red-400"
    },

    // Dark mode specific config (can override individual properties)
    darkMode = {},

    // Shadow Props
    shadow = "2px 2px 4px rgba(0,0,0,0.3)",

    // Glow Props
    glow = "0 0 10px currentColor, 0 0 20px currentColor",

    // Animation Props
    animation = {
      type: "none",
      effect: "fade",
      duration: 0.5,
      delay: 0,
      repeat: false
    },

    // Stagger animations
    stagger = {
      enabled: false,
      type: "words",
      delay: 0.1
    },

    // Viewport animations
    viewport = {
      once: true,
      amount: 0.3
    },

    // Force theme
    forceTheme = null, // 'light', 'dark', or null

    // Additional
    as: Component = "h1",
    className = "",
    onClick,
    id,
    ...props
  } = config;

  // Helper function to combine light and dark classes
  const combineClasses = (lightClass, darkClass) => {
    if (!darkClass && !lightClass) return '';
    if (!darkClass) return lightClass;
    if (!lightClass) return darkClass;

    if (forceTheme === 'light') return lightClass;
    if (forceTheme === 'dark') return darkClass.replace('dark:', '');

    return `${lightClass} ${darkClass}`;
  };

  // Helper to get color with dark mode support
  const getColor = (type, property) => {
    const lightColor = highlightColors[property] || highlightColors[type];
    const darkColor = darkMode[property] || highlightColors[`${property}Dark`] || highlightColors[`${type}Dark`];

    return combineClasses(lightColor, darkColor);
  };

  // Highlight types with dark mode support
  const HIGHLIGHT_TYPES = {
    color: (props) => ({
      className: getColor('color', 'color'),
      style: {}
    }),

    // inside TitleSection.jsx — replace the existing `gradient` entry in HIGHLIGHT_TYPES
    gradient: (props) => {
      // If user provided an explicit CSS gradient string, use inline style (most reliable)
      // Example: highlightColors.gradientCss = "linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899)"
      if (highlightColors.gradientCss) {
        return {
          className: "text-transparent bg-clip-text", // needed for clipping the inline background to text
          style: {
            backgroundImage: highlightColors.gradientCss,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
          }
        };
      }

      // Otherwise, build Tailwind classes (single-line) — include dark: stops if provided
      // highlightColors.gradient should be something like:
      // "from-indigo-500 via-purple-500 to-pink-500" 
      // and optionally include dark: classes in the same string:
      // "from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400"
      const twGradient = (highlightColors.gradient || "from-indigo-500 via-purple-500 to-pink-500")
        + (highlightColors.gradientDark ? ` ${highlightColors.gradientDark}` : "");

      return {
        className: `text-transparent bg-clip-text bg-gradient-to-r ${twGradient}`,
        style: {}
      };
    },

    underline: (props) => ({
      className: `relative inline-block`,
      style: {},
      children: (
        <>
          <span className="relative z-10">{props.children}</span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`absolute bottom-0 left-0 h-1 ${getColor('underline', 'underline')}`}
            style={{ transform: 'translateY(4px)' }}
          />
        </>
      )
    }),

    background: (props) => ({
      className: `${getColor('background', 'background')} px-2 py-1 rounded`,
      style: {}
    }),

    outline: (props) => ({
      className: `text-transparent ${getColor('stroke', 'stroke')} stroke-current`,
      style: { WebkitTextStroke: '1px currentColor' }
    }),

    shadow: (props) => ({
      className: getColor('color', 'color'),
      style: { textShadow: shadow }
    }),

    animatedUnderline: (props) => ({
      className: `relative inline-block`,
      style: {},
      children: (
        <>
          <span className="relative z-10">{props.children}</span>
          <motion.span
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            className={`absolute bottom-0 left-0 h-0.5 ${getColor('underline', 'underline')}`}
            style={{ transform: 'translateY(4px)' }}
          />
        </>
      )
    }),

    doubleUnderline: (props) => ({
      className: `relative inline-block`,
      style: {},
      children: (
        <>
          <span className="relative z-10">{props.children}</span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
            className={`absolute bottom-0 left-0 h-0.5 ${getColor('underline', 'underline')}`}
          />
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`absolute bottom-1 left-0 h-0.5 ${getColor('underline', 'underline')} opacity-50`}
          />
        </>
      )
    }),

    glow: (props) => ({
      className: getColor('color', 'color'),
      animate: {
        textShadow: [
          "0 0 5px currentColor",
          "0 0 20px currentColor, 0 0 30px currentColor",
          "0 0 5px currentColor"
        ]
      },
      transition: { duration: 2, repeat: Infinity }
    }),

    strikethrough: (props) => ({
      className: `relative inline-block`,
      style: {},
      children: (
        <>
          <span className="relative z-10">{props.children}</span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
            className={`absolute left-0 h-0.5 ${getColor('strike', 'strike')} top-1/2`}
            style={{ transform: 'translateY(-50%)' }}
          />
        </>
      )
    }),

    rainbow: (props) => ({
      className: `text-transparent bg-clip-text`,
      animate: {
        backgroundImage: [
          "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)",
          "linear-gradient(90deg, #8f00ff, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082)",
          "linear-gradient(90deg, #4b0082, #8f00ff, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff)"
        ]
      },
      transition: { duration: 3, repeat: Infinity }
    }),

    typewriter: (props) => ({
      className: getColor('color', 'color'),
      style: {
        borderRight: '2px solid currentColor',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      },
      animate: {
        width: ['0%', '100%']
      },
      transition: { duration: 2, ease: "linear" }
    })
  };

  // Handle case when no highlight text is provided
  if (!highlightText || highlightText === "") {
    const baseClasses = `
      ${TITLE_SIZES[size] || TITLE_SIZES.md}
      ${TITLE_WEIGHTS[weight] || TITLE_WEIGHTS.bold}
      ${TITLE_TRACKING[tracking] || TITLE_TRACKING.normal}
      ${TITLE_LEADING[leading] || TITLE_LEADING.tight}
      ${ALIGNMENT[align] || ALIGNMENT.left}
      ${combineClasses(colors.text, colors.textDark)}
      ${maxWidth}
      ${forceTheme === 'light' ? 'light' : forceTheme === 'dark' ? 'dark' : ''}
      ${className}
    `;

    // Get animation props
    const getAnimationProps = () => {
      if (animation.type === 'none') return {};

      const props = {};
      const variant = ANIMATION_VARIANTS[animation.effect] || ANIMATION_VARIANTS.fade;

      if (animation.type === 'entrance') {
        props.initial = "hidden";
        props.whileInView = "visible";
        props.viewport = { once: viewport.once, amount: viewport.amount };
        props.variants = variant;
        props.transition = {
          duration: animation.duration,
          delay: animation.delay,
          repeat: animation.repeat ? Infinity : 0
        };
      }

      if (animation.type === 'continuous') {
        props.animate = "animate";
        props.variants = variant;
      }

      return props;
    };

    // Stagger children if enabled
    if (stagger.enabled) {
      const MotionComponent = motion[Component] || motion.div;

      if (stagger.type === 'letters') {
        const letters = title.split('');
        return (
          <MotionComponent
            className={baseClasses}
            variants={ANIMATION_VARIANTS.stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: viewport.once, amount: viewport.amount }}
            onClick={onClick}
            id={id}
            {...props}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                variants={LETTER_VARIANTS}
                transition={{ delay: i * stagger.delay }}
                style={{ display: 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </MotionComponent>
        );
      }

      if (stagger.type === 'words') {
        const words = title.split(' ');
        return (
          <MotionComponent
            className={baseClasses}
            variants={ANIMATION_VARIANTS.stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: viewport.once, amount: viewport.amount }}
            onClick={onClick}
            id={id}
            {...props}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={WORD_VARIANTS}
                transition={{ delay: i * stagger.delay }}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </MotionComponent>
        );
      }
    }

    // Regular animation
    const MotionComponent = motion[Component] || motion.div;
    const animationProps = getAnimationProps();

    return (
      <MotionComponent
        className={baseClasses}
        onClick={onClick}
        id={id}
        {...animationProps}
        {...props}
      >
        {title}
      </MotionComponent>
    );
  }

  // Split title by highlight text
  const parts = title.split(highlightText);

  // Determine which occurrences to highlight
  const shouldHighlight = (index) => {
    if (highlight.position === 'all') return true;
    if (highlight.position === 'first' && index === 0) return true;
    if (highlight.position === 'last' && index === parts.length - 2) return true;
    return false;
  };

  const getHighlightStyles = (text) => {
    const highlightConfig = HIGHLIGHT_TYPES[highlight.type] || HIGHLIGHT_TYPES.color;
    return highlightConfig({
      children: text
    });
  };

  const baseClasses = `
    ${TITLE_SIZES[size] || TITLE_SIZES.md}
    ${TITLE_WEIGHTS[weight] || TITLE_WEIGHTS.bold}
    ${TITLE_TRACKING[tracking] || TITLE_TRACKING.normal}
    ${TITLE_LEADING[leading] || TITLE_LEADING.tight}
    ${ALIGNMENT[align] || ALIGNMENT.left}
    ${maxWidth}
    ${forceTheme === 'light' ? 'light' : forceTheme === 'dark' ? 'dark' : ''}
    ${className}
  `;

  const getAnimationProps = () => {
    if (animation.type === 'none') return {};

    const props = {};
    const variant = ANIMATION_VARIANTS[animation.effect] || ANIMATION_VARIANTS.fade;

    if (animation.type === 'entrance') {
      props.initial = "hidden";
      props.whileInView = "visible";
      props.viewport = { once: viewport.once, amount: viewport.amount };
      props.variants = variant;
      props.transition = {
        duration: animation.duration,
        delay: animation.delay,
        repeat: animation.repeat ? Infinity : 0
      };
    }

    if (animation.type === 'continuous') {
      props.animate = "animate";
      props.variants = variant;
    }

    return props;
  };

  const MotionComponent = motion[Component] || motion.div;
  const animationProps = getAnimationProps();

  return (
    <MotionComponent
      className={baseClasses}
      onClick={onClick}
      id={id}
      {...animationProps}
      {...props}
    >
      {parts.map((part, index) => {
        const isLast = index === parts.length - 1;

        return (
          <React.Fragment key={index}>
            {/* Regular text part */}
            {part && (
              <span className={combineClasses(colors.text, colors.textDark)}>
                {part}
              </span>
            )}

            {/* Highlight part (if not last) */}
            {!isLast && shouldHighlight(index) && (
              <motion.span
                className="relative inline-block group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {renderHighlight(highlightText, getHighlightStyles)}
              </motion.span>
            )}

            {/* Non-highlighted occurrence of the text */}
            {!isLast && !shouldHighlight(index) && (
              <span className={combineClasses(colors.text, colors.textDark)}>
                {highlightText}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </MotionComponent>
  );
};

// Helper function to render highlight based on type
const renderHighlight = (text, styles) => {
  if (styles.children) {
    return styles.children;
  }

  if (styles.animate) {
    return (
      <motion.span
        className={styles.className}
        style={styles.style}
        animate={styles.animate}
        transition={styles.transition}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <span className={styles.className} style={styles.style}>
      {text}
    </span>
  );
};

export default TitleSection;