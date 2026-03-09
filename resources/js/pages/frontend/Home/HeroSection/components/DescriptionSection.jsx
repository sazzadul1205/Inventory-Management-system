// page/frontend/Home/HeroSection/components/DescriptionSection.jsx

// DescriptionSection

import { motion } from 'framer-motion';
import React from 'react';

const DESCRIPTION_SIZES = {
  xs: "text-xs sm:text-sm",
  sm: "text-sm sm:text-base",
  md: "text-base sm:text-lg",
  lg: "text-lg sm:text-xl",
  xl: "text-xl sm:text-2xl",
  "2xl": "text-2xl sm:text-3xl"
};

const DESCRIPTION_WEIGHTS = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold"
};

const DESCRIPTION_LEADING = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose"
};

const ALIGNMENT = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
  justify: "text-justify"
};

// Animation variants
const ANIMATION_VARIANTS = {
  // Entrance animations
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  },

  // Continuous animations
  pulse: {
    animate: {
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  wave: {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  glow: {
    animate: {
      textShadow: [
        '0 0 0px currentColor',
        '0 0 5px currentColor',
        '0 0 0px currentColor'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },

  // Reveal animations
  reveal: {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Typewriter effect (for short text)
  typewriter: {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "linear"
      }
    }
  }
};

// Letter animation variants
const LETTER_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const WORD_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

const LINE_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const DescriptionSection = ({
  // Content
  description,

  // Styling Props
  size = "md",
  weight = "normal",
  leading = "normal",
  align = "left",
  maxWidth = "",

  // Colors
  textColor = "text-gray-600",
  textColorDark = "dark:text-gray-400",

  // Animation Props
  animation = "none",
  animationType = "entrance", // entrance, continuous, hover, reveal
  delay = 0,
  duration = 0.5,

  // Stagger animations
  staggerChildren = false,
  staggerType = "words", // letters, words, lines
  staggerDelay = 0.05,

  // Interactive
  hoverEffect = false,
  hoverScale = 1.02,

  // Truncation
  truncate = false,
  truncateLines = 0, // 0 = no truncation, 1+ = number of lines

  // Additional
  className = "",
  onClick,
  id,
  as: Component = "p",
  ...props
}) => {

  const MotionComponent = motion[Component] || motion.div;

  // Handle line breaks in description
  const lines = description.split('\n');

  // Animation props
  const getAnimationProps = () => {
    if (animation === 'none') return {};

    // Entrance animation
    if (animationType === 'entrance' || animationType === 'reveal') {
      return {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
        variants: ANIMATION_VARIANTS[animation] || ANIMATION_VARIANTS.fade,
        transition: { duration, delay }
      };
    }

    // Continuous animation
    if (animationType === 'continuous') {
      return {
        animate: "animate",
        variants: ANIMATION_VARIANTS[animation] || ANIMATION_VARIANTS.pulse
      };
    }

    return {};
  };

  // Hover effect
  const hoverProps = hoverEffect ? {
    whileHover: {
      scale: hoverScale,
      transition: { duration: 0.2 }
    }
  } : {};

  // Truncation classes
  const truncationClasses = truncate
    ? 'truncate'
    : truncateLines > 0
      ? `line-clamp-${truncateLines}`
      : '';

  const baseClasses = `
    ${DESCRIPTION_SIZES[size] || DESCRIPTION_SIZES.md}
    ${DESCRIPTION_WEIGHTS[weight] || DESCRIPTION_WEIGHTS.normal}
    ${DESCRIPTION_LEADING[leading] || DESCRIPTION_LEADING.normal}
    ${ALIGNMENT[align] || ALIGNMENT.left}
    ${textColor} ${textColorDark}
    ${maxWidth}
    ${truncationClasses}
    ${className}
  `;

  // Stagger children animations
  if (staggerChildren) {
    if (staggerType === 'letters') {
      const letters = description.split('');
      return (
        <MotionComponent
          className={baseClasses}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: staggerDelay }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={onClick}
          id={id}
          {...hoverProps}
          {...props}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={LETTER_VARIANTS}
              style={{ display: 'inline-block' }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </MotionComponent>
      );
    }

    if (staggerType === 'words') {
      const words = description.split(' ');
      return (
        <MotionComponent
          className={baseClasses}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: staggerDelay }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={onClick}
          id={id}
          {...hoverProps}
          {...props}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={WORD_VARIANTS}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </MotionComponent>
      );
    }

    if (staggerType === 'lines') {
      return (
        <MotionComponent
          className={baseClasses}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: staggerDelay * 2 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onClick={onClick}
          id={id}
          {...hoverProps}
          {...props}
        >
          {lines.map((line, i) => (
            <motion.div
              key={i}
              variants={LINE_VARIANTS}
              className="mb-2 last:mb-0"
            >
              {line || <br />}
            </motion.div>
          ))}
        </MotionComponent>
      );
    }
  }

  // Handle typewriter effect (special case)
  if (animation === 'typewriter') {
    return (
      <MotionComponent
        className={`
          ${baseClasses}
          overflow-hidden whitespace-nowrap
          border-r-2 border-current
        `}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { width: 0 },
          visible: {
            width: "100%",
            transition: {
              duration: duration * 2,
              ease: "linear"
            }
          }
        }}
        onClick={onClick}
        id={id}
        {...props}
      >
        {description}
      </MotionComponent>
    );
  }

  // Handle multi-line text with line breaks
  if (lines.length > 1) {
    return (
      <MotionComponent
        className={baseClasses}
        {...getAnimationProps()}
        {...hoverProps}
        onClick={onClick}
        id={id}
        {...props}
      >
        {lines.map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </MotionComponent>
    );
  }

  // Default single line
  return (
    <MotionComponent
      className={baseClasses}
      {...getAnimationProps()}
      {...hoverProps}
      onClick={onClick}
      id={id}
      {...props}
    >
      {description}
    </MotionComponent>
  );
};

// Preset configurations for common use cases
DescriptionSection.presets = {
  // Hero section description
  hero: {
    size: "lg",
    weight: "normal",
    leading: "relaxed",
    maxWidth: "max-w-2xl",
    textColor: "text-gray-600",
    textColorDark: "dark:text-gray-400",
    animation: "slideUp",
    animationType: "entrance",
    delay: 0.2
  },

  // Feature description
  feature: {
    size: "md",
    weight: "normal",
    leading: "normal",
    textColor: "text-gray-600",
    textColorDark: "dark:text-gray-400",
    hoverEffect: true,
    hoverScale: 1.02
  },

  // Testimonial text
  testimonial: {
    size: "lg",
    weight: "medium",
    leading: "relaxed",
    align: "center",
    maxWidth: "max-w-3xl",
    textColor: "text-gray-700",
    textColorDark: "dark:text-gray-300",
    animation: "reveal",
    animationType: "entrance"
  },

  // Caption text
  caption: {
    size: "sm",
    weight: "normal",
    textColor: "text-gray-500",
    textColorDark: "dark:text-gray-500",
    animation: "fade",
    animationType: "entrance"
  },

  // Highlighted text
  highlight: {
    size: "lg",
    weight: "semibold",
    leading: "snug",
    textColor: "text-blue-600",
    textColorDark: "dark:text-blue-400",
    animation: "glow",
    animationType: "continuous"
  },

  // Stats description
  stats: {
    size: "sm",
    weight: "medium",
    tracking: "wide",
    textColor: "text-gray-500",
    textColorDark: "dark:text-gray-500",
    animation: "scale",
    animationType: "entrance"
  }
};

// Example usage component
export const DescriptionShowcase = () => {
  return (
    <div className="space-y-8 p-8">
      {/* Basic entrance animations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Entrance Animations</h3>
        <DescriptionSection
          description="This description fades in smoothly when it enters the viewport."
          animation="fade"
          animationType="entrance"
        />
        <DescriptionSection
          description="This one slides up from below with a spring effect."
          animation="slideUp"
          animationType="entrance"
        />
        <DescriptionSection
          description="Scale animation makes it pop into view."
          animation="scale"
          animationType="entrance"
        />
        <DescriptionSection
          description="Reveal animation with blur effect for a sophisticated look."
          animation="reveal"
          animationType="entrance"
        />
      </div>

      {/* Continuous animations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Continuous Animations</h3>
        <DescriptionSection
          description="This text gently pulses to draw attention."
          animation="pulse"
          animationType="continuous"
        />
        <DescriptionSection
          description="A subtle wave effect makes it playful."
          animation="wave"
          animationType="continuous"
        />
        <DescriptionSection
          description="Glowing text for emphasis and importance."
          animation="glow"
          animationType="continuous"
          textColor="text-purple-600"
          textColorDark="dark:text-purple-400"
        />
      </div>

      {/* Stagger animations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Stagger Animations</h3>
        <DescriptionSection
          description="Each word appears one after another"
          staggerChildren={true}
          staggerType="words"
          staggerDelay={0.1}
        />
        <DescriptionSection
          description="Each letter fades in sequentially for a dramatic effect"
          staggerChildren={true}
          staggerType="letters"
          staggerDelay={0.03}
          size="lg"
        />
        <DescriptionSection
          description={`Multiple lines
can be staggered
for better readability`}
          staggerChildren={true}
          staggerType="lines"
          staggerDelay={0.15}
        />
      </div>

      {/* Interactive */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive</h3>
        <DescriptionSection
          description="Hover over me to see the scale effect"
          hoverEffect={true}
          hoverScale={1.05}
          onClick={() => alert('Description clicked!')}
          className="cursor-pointer"
        />
      </div>

      {/* Special effects */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Special Effects</h3>
        <DescriptionSection
          description="Typewriter effect for short impactful messages"
          animation="typewriter"
          size="xl"
          weight="bold"
          className="border-r-2 border-current"
        />
      </div>

      {/* Presets */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Preset Configurations</h3>
        <DescriptionSection
          {...DescriptionSection.presets.hero}
          description="Hero section descriptions are larger and slide up with a delay for maximum impact."
        />
        <DescriptionSection
          {...DescriptionSection.presets.feature}
          description="Feature descriptions have hover effects to make them more interactive and engaging."
        />
        <DescriptionSection
          {...DescriptionSection.presets.testimonial}
          description="This is a testimonial text that centers itself and uses a reveal animation for a polished look."
        />
        <DescriptionSection
          {...DescriptionSection.presets.highlight}
          description="Important information with continuous glow effect"
        />
      </div>

      {/* Multi-line with line breaks */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Multi-line Support</h3>
        <DescriptionSection
          description={`First line of text
Second line with more information
Third line for additional details`}
          align="center"
          animation="slideUp"
          animationType="entrance"
          leading="relaxed"
        />
      </div>

      {/* Truncation examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Truncation</h3>
        <DescriptionSection
          description="This is a very long description that will be truncated to a single line with an ellipsis at the end because it's too long to display fully in the available space."
          truncate={true}
          maxWidth="max-w-md"
        />
        <DescriptionSection
          description={`This description will be truncated to 2 lines. It will show an ellipsis after the second line if the content is too long. This is useful for cards and previews where you want to maintain consistent height.`}
          truncateLines={2}
          maxWidth="max-w-md"
        />
      </div>
    </div>
  );
};

export default DescriptionSection;