/**
 * CMS_Media Component - A highly customizable media component for images and videos
 * 
 * This component renders images and videos with configurable styling, lazy loading,
 * placeholders, overlays, and hover effects. Supports both static and dynamic content.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo, useState, useRef } from 'react';

// Default configuration
const defaultConfig = {
  // Media type
  type: 'image',                    // 'image', 'video', 'iframe', 'youtube', 'vimeo'

  // Source
  src: null,                         // Media source URL
  poster: null,                      // Poster image for videos
  alt: 'Media',                      // Alt text for accessibility
  title: null,                       // Title attribute

  // Dimensions
  width: null,                       // Width in pixels or 'full', 'auto'
  height: null,                      // Height in pixels or 'full', 'auto'
  aspectRatio: null,                 // e.g., '16/9', '4/3', '1/1', '21/9'

  // Sizing
  objectFit: 'cover',                // 'cover', 'contain', 'fill', 'scale-down', 'none'
  objectPosition: 'center',          // 'center', 'top', 'bottom', 'left', 'right'

  // Responsive
  responsive: true,                  // Enable responsive behavior
  sizes: null,                        // srcset sizes attribute
  srcSet: null,                       // srcset for responsive images

  // Video specific
  controls: true,                     // Show video controls
  autoPlay: false,                    // Autoplay video
  loop: false,                        // Loop video
  muted: false,                       // Muted video
  playsInline: true,                   // Play inline on mobile

  // YouTube/Vimeo specific
  videoId: null,                      // YouTube or Vimeo video ID
  startAt: 0,                          // Start time in seconds
  showInfo: true,                      // Show video info
  showControls: true,                  // Show player controls
  modestBranding: false,                // YouTube modest branding

  // Loading
  lazy: true,                         // Lazy load
  loading: 'lazy',                    // 'lazy', 'eager'
  placeholder: null,                   // Placeholder image while loading
  blurUp: false,                       // Blur-up effect
  blurAmount: 'blur-sm',               // Blur amount for placeholder

  // Fallback
  fallback: null,                      // Fallback image on error
  fallbackText: 'Media failed to load', // Fallback text

  // Overlay
  overlay: null,                       // Overlay color/gradient
  overlayOpacity: '50',                // '0' to '100'
  overlayHover: null,                  // Overlay on hover

  // Hover effects
  hover: {
    scale: null,                       // e.g., 'scale-105', 'scale-110'
    rotate: null,                       // e.g., 'rotate-3', '-rotate-3'
    translateX: null,                    // e.g., 'translate-x-2'
    translateY: null,                    // e.g., '-translate-y-2'
    brightness: null,                    // e.g., 'brightness-110'
    contrast: null,                       // e.g., 'contrast-125'
    grayscale: null,                      // e.g., 'grayscale-0', 'grayscale'
    blur: null,                           // e.g., 'blur-sm', 'blur-none'
    opacity: null,                        // e.g., 'opacity-90'
    shadow: null,                         // e.g., 'shadow-xl'
    transition: 'transition-all duration-300',
    customClasses: null,
    customStyles: {}
  },

  // Border & Shadow
  rounded: null,                       // 'rounded', 'rounded-lg', 'rounded-full', etc.
  border: null,                        // 'border', 'border-2', etc.
  borderColor: null,                    // 'border-gray-200', etc.
  shadow: null,                         // 'shadow', 'shadow-md', 'shadow-lg', etc.

  // Z-Layer support
  zLayer: 'auto',
  zLayerMobile: null,
  zLayerTablet: null,
  zLayerDesktop: null,

  // Positioning
  position: 'relative',

  // Margin & Padding
  margin: 'm-0',
  padding: 'p-0',

  // Background (for containers)
  bgColor: null,
  darkBgColor: null,

  // Interactive
  clickable: false,
  href: null,                          // Link URL
  target: null,                        // '_blank', etc.
  onClick: null,

  // Caption
  caption: null,                        // Caption text
  captionPosition: 'bottom',             // 'top', 'bottom', 'overlay'
  captionBg: 'bg-black/50',              // Caption background
  captionColor: 'text-white',            // Caption text color

  // Play button (for videos)
  playButton: true,                      // Show play button
  playButtonIcon: null,                   // Custom play icon
  playButtonSize: 'lg',                   // 'sm', 'md', 'lg'
  playButtonPosition: 'center',            // 'center', 'top-left', etc.

  // Accessibility
  ariaLabel: null,
  role: null,

  // Events
  onLoad: null,
  onError: null,
  onPlay: null,
  onPause: null,
  onEnded: null,

  // Additional
  className: '',
  style: {}
};

// Aspect ratio classes
const aspectRatios = {
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-video',
  '21/9': 'aspect-[21/9]',
  '2/1': 'aspect-[2/1]',
  '3/2': 'aspect-[3/2]',
  '5/4': 'aspect-[5/4]',
  'golden': 'aspect-[1.618/1]'
};

// Object fit classes
const objectFitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  'scale-down': 'object-scale-down',
  none: 'object-none'
};

// Object position classes
const objectPositionClasses = {
  center: 'object-center',
  top: 'object-top',
  bottom: 'object-bottom',
  left: 'object-left',
  right: 'object-right',
  'top-left': 'object-left-top',
  'top-right': 'object-right-top',
  'bottom-left': 'object-left-bottom',
  'bottom-right': 'object-right-bottom'
};

// Play button positions
const playButtonPositions = {
  center: 'inset-1/2 transform -translate-x-1/2 -translate-y-1/2',
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4'
};

// Play button sizes
const playButtonSizes = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20'
};

// Z-index mapping
const zIndexMap = {
  'auto': 'z-auto',
  '0': 'z-0',
  '10': 'z-10',
  '20': 'z-20',
  '30': 'z-30',
  '40': 'z-40',
  '50': 'z-50'
};

/**
 * Main Media Component
 */
const CMS_Media = ({
  config = defaultConfig,
  children
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  // Merge config with defaults
  const mergedConfig = useMemo(() => {
    return {
      ...defaultConfig,
      ...config
    };
  }, [config]);

  // Check if YouTube URL
  const isYouTubeUrl = (url) => {
    return url && (
      url.includes('youtube.com') ||
      url.includes('youtu.be') ||
      url.includes('youtube-nocookie.com')
    );
  };

  // Check if Vimeo URL
  const isVimeoUrl = (url) => {
    return url && url.includes('vimeo.com');
  };

  // Extract YouTube ID from URL
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Extract Vimeo ID from URL
  const getVimeoId = (url) => {
    if (!url) return null;
    const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // Determine media type
  const mediaType = useMemo(() => {
    if (mergedConfig.type !== 'image' && mergedConfig.type !== 'video') {
      return mergedConfig.type;
    }

    if (mergedConfig.src) {
      if (isYouTubeUrl(mergedConfig.src)) return 'youtube';
      if (isVimeoUrl(mergedConfig.src)) return 'vimeo';
    }

    if (mergedConfig.videoId) return 'youtube';

    return mergedConfig.type;
  }, [mergedConfig.type, mergedConfig.src, mergedConfig.videoId]);

  // Build YouTube embed URL
  const youtubeEmbedUrl = useMemo(() => {
    const id = mergedConfig.videoId || getYouTubeId(mergedConfig.src);
    if (!id) return null;

    const params = new URLSearchParams({
      autoplay: mergedConfig.autoPlay ? '1' : '0',
      controls: mergedConfig.showControls ? '1' : '0',
      loop: mergedConfig.loop ? '1' : '0',
      muted: mergedConfig.muted ? '1' : '0',
      playsinline: mergedConfig.playsInline ? '1' : '0',
      start: mergedConfig.startAt,
      modestbranding: mergedConfig.modestBranding ? '1' : '0',
      rel: mergedConfig.showInfo ? '1' : '0'
    });

    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  }, [mergedConfig]);

  // Build Vimeo embed URL
  const vimeoEmbedUrl = useMemo(() => {
    const id = mergedConfig.videoId || getVimeoId(mergedConfig.src);
    if (!id) return null;

    const params = new URLSearchParams({
      autoplay: mergedConfig.autoPlay ? '1' : '0',
      controls: mergedConfig.showControls ? '1' : '0',
      loop: mergedConfig.loop ? '1' : '0',
      muted: mergedConfig.muted ? '1' : '0',
      title: mergedConfig.showInfo ? '1' : '0',
      byline: mergedConfig.showInfo ? '1' : '0',
      portrait: mergedConfig.showInfo ? '1' : '0'
    });

    return `https://player.vimeo.com/video/${id}?${params.toString()}`;
  }, [mergedConfig]);

  // Build hover classes
  const getHoverClasses = useMemo(() => {
    if (!mergedConfig.hover) return '';

    const hoverClasses = [];
    const hover = mergedConfig.hover;

    if (hover.scale) hoverClasses.push(`hover:${hover.scale}`);
    if (hover.rotate) hoverClasses.push(`hover:${hover.rotate}`);
    if (hover.translateX) hoverClasses.push(`hover:${hover.translateX}`);
    if (hover.translateY) hoverClasses.push(`hover:${hover.translateY}`);
    if (hover.brightness) hoverClasses.push(`hover:${hover.brightness}`);
    if (hover.contrast) hoverClasses.push(`hover:${hover.contrast}`);
    if (hover.grayscale) hoverClasses.push(`hover:${hover.grayscale}`);
    if (hover.blur) hoverClasses.push(`hover:${hover.blur}`);
    if (hover.opacity) hoverClasses.push(`hover:${hover.opacity}`);
    if (hover.shadow) hoverClasses.push(`hover:${hover.shadow}`);
    if (hover.transition) hoverClasses.push(hover.transition);

    return hoverClasses.join(' ');
  }, [mergedConfig.hover]);

  // Build z-index classes
  const getZLayerClasses = (zLayer, zMobile, zTablet, zDesktop) => {
    const classes = [];

    if (zLayer) {
      if (zIndexMap[zLayer]) {
        classes.push(zIndexMap[zLayer]);
      } else if (zLayer.startsWith('z-')) {
        classes.push(zLayer);
      } else if (!isNaN(zLayer)) {
        classes.push(`z-${zLayer}`);
      }
    }

    if (zMobile) {
      const mobileClass = zIndexMap[zMobile] || (zMobile.startsWith('z-') ? zMobile : `z-${zMobile}`);
      classes.push(mobileClass);
    }

    if (zTablet) {
      const tabletClass = zIndexMap[zTablet] || (zTablet.startsWith('z-') ? zTablet : `z-${zTablet}`);
      classes.push(`md:${tabletClass}`);
    }

    if (zDesktop) {
      const desktopClass = zIndexMap[zDesktop] || (zDesktop.startsWith('z-') ? zDesktop : `z-${zDesktop}`);
      classes.push(`lg:${desktopClass}`);
    }

    return classes;
  };

  // Build container classes
  const containerClasses = useMemo(() => {
    const zLayerClasses = getZLayerClasses(
      mergedConfig.zLayer,
      mergedConfig.zLayerMobile,
      mergedConfig.zLayerTablet,
      mergedConfig.zLayerDesktop
    );

    const aspectClass = mergedConfig.aspectRatio
      ? aspectRatios[mergedConfig.aspectRatio] || `aspect-[${mergedConfig.aspectRatio}]`
      : '';

    const classes = [
      mergedConfig.position,
      mergedConfig.margin,
      mergedConfig.padding,
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.rounded,
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.shadow,
      aspectClass,
      ...zLayerClasses,
      mergedConfig.clickable ? 'cursor-pointer' : '',
      getHoverClasses,
      mergedConfig.className
    ].filter(Boolean).join(' ');

    return classes;
  }, [mergedConfig, getHoverClasses]);

  // Handle image load
  const handleImageLoad = (e) => {
    setIsLoaded(true);
    setHasError(false);
    mergedConfig.onLoad?.(e);
  };

  // Handle image error
  const handleImageError = (e) => {
    setHasError(true);
    mergedConfig.onError?.(e);
  };

  // Handle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Render image
  const renderImage = () => {
    const imageSrc = hasError && mergedConfig.fallback
      ? mergedConfig.fallback
      : mergedConfig.src;

    if (!imageSrc) {
      return renderFallback();
    }

    const width = mergedConfig.width === 'full' ? 'w-full' : mergedConfig.width;
    const height = mergedConfig.height === 'full' ? 'h-full' : mergedConfig.height;

    return (
      <>
        {/* Placeholder */}
        {mergedConfig.placeholder && !isLoaded && (
          <img
            src={mergedConfig.placeholder}
            alt={mergedConfig.alt}
            className={`
              absolute inset-0 w-full h-full
              ${objectFitClasses[mergedConfig.objectFit]}
              ${mergedConfig.blurUp ? mergedConfig.blurAmount : ''}
              transition-opacity duration-300
              ${isLoaded ? 'opacity-0' : 'opacity-100'}
            `}
          />
        )}

        {/* Main image */}
        <img
          ref={mediaRef}
          src={imageSrc}
          srcSet={mergedConfig.srcSet}
          sizes={mergedConfig.sizes}
          alt={mergedConfig.alt}
          title={mergedConfig.title}
          width={!isNaN(mergedConfig.width) ? mergedConfig.width : undefined}
          height={!isNaN(mergedConfig.height) ? mergedConfig.height : undefined}
          loading={mergedConfig.lazy ? 'lazy' : 'eager'}
          className={`
            w-full h-full
            ${objectFitClasses[mergedConfig.objectFit]}
            ${objectPositionClasses[mergedConfig.objectPosition]}
            transition-opacity duration-300
            ${mergedConfig.placeholder && !isLoaded ? 'opacity-0' : 'opacity-100'}
          `}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </>
    );
  };

  // Render video
  const renderVideo = () => {
    return (
      <video
        ref={videoRef}
        src={mergedConfig.src}
        poster={mergedConfig.poster}
        controls={mergedConfig.controls}
        autoPlay={mergedConfig.autoPlay}
        loop={mergedConfig.loop}
        muted={mergedConfig.muted}
        playsInline={mergedConfig.playsInline}
        className={`
          w-full h-full
          ${objectFitClasses[mergedConfig.objectFit]}
          ${objectPositionClasses[mergedConfig.objectPosition]}
        `}
        onLoad={handleImageLoad}
        onError={handleImageError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={mergedConfig.onEnded}
      />
    );
  };

  // Render YouTube embed
  const renderYouTube = () => {
    const embedUrl = youtubeEmbedUrl;
    if (!embedUrl) return renderFallback('Invalid YouTube URL');

    return (
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={mergedConfig.title || mergedConfig.alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    );
  };

  // Render Vimeo embed
  const renderVimeo = () => {
    const embedUrl = vimeoEmbedUrl;
    if (!embedUrl) return renderFallback('Invalid Vimeo URL');

    return (
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={mergedConfig.title || mergedConfig.alt}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    );
  };

  // Render iframe
  const renderIframe = () => {
    return (
      <iframe
        ref={iframeRef}
        src={mergedConfig.src}
        title={mergedConfig.title || mergedConfig.alt}
        allow={mergedConfig.autoPlay ? 'autoplay' : ''}
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    );
  };

  // Render fallback
  const renderFallback = (customMessage = null) => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
        <div className="text-center p-4">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>{customMessage || mergedConfig.fallbackText}</p>
        </div>
      </div>
    );
  };

  // Render play button
  const renderPlayButton = () => {
    if (!mergedConfig.playButton || mediaType === 'image') return null;
    if (isPlaying && mediaType !== 'youtube' && mediaType !== 'vimeo') return null;

    const position = playButtonPositions[mergedConfig.playButtonPosition] || playButtonPositions.center;
    const size = playButtonSizes[mergedConfig.playButtonSize] || playButtonSizes.lg;

    return (
      <button
        onClick={togglePlay}
        className={`
          absolute ${position} z-20
          flex items-center justify-center
          bg-black/50 hover:bg-black/70
          rounded-full
          transition-all duration-300
          ${size}
          transform hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-white
        `}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {mergedConfig.playButtonIcon ? (
          mergedConfig.playButtonIcon
        ) : (
          <svg className="w-1/2 h-1/2 text-white" fill="currentColor" viewBox="0 0 24 24">
            {isPlaying ? (
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            ) : (
              <path d="M8 5v14l11-7L8 5z" />
            )}
          </svg>
        )}
      </button>
    );
  };

  // Render overlay
  const renderOverlay = () => {
    if (!mergedConfig.overlay) return null;

    const overlayClass = mergedConfig.overlayHover && !isHovered
      ? 'opacity-0'
      : 'opacity-' + mergedConfig.overlayOpacity;

    return (
      <div
        className={`
          absolute inset-0 z-10
          ${mergedConfig.overlay}
          transition-opacity duration-300
          ${overlayClass}
        `}
      />
    );
  };

  // Render caption
  const renderCaption = () => {
    if (!mergedConfig.caption) return null;

    const positionClasses = {
      top: 'top-0 left-0 right-0',
      bottom: 'bottom-0 left-0 right-0',
      overlay: 'inset-0 flex items-center justify-center'
    };

    return (
      <div
        className={`
          absolute z-20 p-4
          ${positionClasses[mergedConfig.captionPosition]}
          ${mergedConfig.captionBg}
          ${mergedConfig.captionColor}
          ${mergedConfig.captionPosition === 'overlay' ? 'text-center' : ''}
        `}
      >
        {mergedConfig.caption}
      </div>
    );
  };

  // Render media based on type
  const renderMedia = () => {
    switch (mediaType) {
      case 'video':
        return renderVideo();
      case 'youtube':
        return renderYouTube();
      case 'vimeo':
        return renderVimeo();
      case 'iframe':
        return renderIframe();
      case 'image':
      default:
        return renderImage();
    }
  };

  // Container element
  const Container = mergedConfig.href ? 'a' : 'div';

  return (
    <Container
      href={mergedConfig.href}
      target={mergedConfig.target}
      className={containerClasses}
      style={{
        width: mergedConfig.width && !isNaN(mergedConfig.width) ? `${mergedConfig.width}px` : mergedConfig.width,
        height: mergedConfig.height && !isNaN(mergedConfig.height) ? `${mergedConfig.height}px` : mergedConfig.height,
        ...mergedConfig.style,
        ...(isHovered ? mergedConfig.hover?.customStyles : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={mergedConfig.onClick}
      aria-label={mergedConfig.ariaLabel}
      role={mergedConfig.role}
    >
      <div className="relative w-full h-full overflow-hidden">
        {renderMedia()}
        {renderOverlay()}
        {renderPlayButton()}
        {renderCaption()}
        {children}
      </div>
    </Container>
  );
};

export default CMS_Media;