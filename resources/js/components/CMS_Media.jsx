/**
 * CMS_Media Component - Editor-friendly media component with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Supports images, videos, iframes, YouTube, Vimeo
 * - Lazy loading and placeholders
 * - Hover effects with classes
 * - Overlay support
 * - Captions
 * - Play button for videos
 */

import React, { forwardRef, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

// ============================================================================
// Types & Defaults
// ============================================================================

const defaultClasses = {
  // Container base styles
  base: '',

  // Container states
  hover: '',
  focus: '',
  active: '',

  // Theme states
  dark: '',
  darkHover: '',

  // Responsive
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',

  // Media element specific
  media: '',
  mediaHover: '',
  mediaDark: '',

  // Overlay classes
  overlay: '',
  overlayHover: '',

  // Caption classes
  caption: '',
  captionHover: '',
  captionDark: '',

  // Play button classes
  playButton: '',
  playButtonHover: '',

  // Custom override
  custom: '',
};

// Default props (non-class properties)
const defaultProps = {
  type: 'image',           // 'image', 'video', 'iframe', 'youtube', 'vimeo'
  src: null,
  alt: 'Media',
  poster: null,

  // Dimensions
  aspectRatio: null,
  objectFit: 'cover',
  objectPosition: 'center',

  // Video specific
  controls: true,
  autoPlay: false,
  loop: false,
  muted: false,
  playsInline: true,

  // Loading
  lazy: true,
  placeholder: null,

  // Fallback
  fallback: null,
  fallbackText: 'Media failed to load',

  // Caption
  caption: null,
  captionPosition: 'bottom', // 'top', 'bottom', 'overlay'

  // Play button
  playButton: true,

  // Link
  href: null,
  target: null,

  // Events
  onClick: null,
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
};

// Object fit classes
const objectFitClasses = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  'scale-down': 'object-scale-down',
  none: 'object-none',
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
  'bottom-right': 'object-right-bottom',
};

// Caption positions
const captionPositions = {
  top: 'top-0 left-0 right-0',
  bottom: 'bottom-0 left-0 right-0',
  overlay: 'inset-0 flex items-center justify-center',
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Media',
  description: 'Image, video, and iframe with overlay and hover effects',
  category: 'media',
  icon: '🖼️',
  editable: ['base', 'hover', 'dark', 'media', 'overlay', 'caption', 'playButton'],
  controls: [
    { type: 'select', target: 'type', label: 'Media Type', options: ['image', 'video', 'youtube', 'vimeo', 'iframe'] },
    { type: 'text', target: 'src', label: 'Source URL' },
    { type: 'text', target: 'alt', label: 'Alt Text' },
    { type: 'select', target: 'aspectRatio', label: 'Aspect Ratio', options: ['1/1', '4/3', '16/9', '21/9', '2/1', '3/2'] },
    { type: 'select', target: 'objectFit', label: 'Object Fit', options: ['cover', 'contain', 'fill', 'scale-down', 'none'] },
    { type: 'class-editor', target: 'base', label: 'Container Styles' },
    { type: 'class-editor', target: 'media', label: 'Media Styles' },
    { type: 'class-editor', target: 'overlay', label: 'Overlay Styles' },
    { type: 'class-editor', target: 'caption', label: 'Caption Styles' },
    { type: 'class-editor', target: 'playButton', label: 'Play Button Styles' },
    { type: 'toggle', target: 'controls', label: 'Show Controls' },
    { type: 'toggle', target: 'autoPlay', label: 'Auto Play' },
    { type: 'toggle', target: 'loop', label: 'Loop' },
    { type: 'toggle', target: 'playButton', label: 'Show Play Button' },
    { type: 'text', target: 'caption', label: 'Caption Text' },
  ]
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Build final class string from config
 */
const buildClasses = (classes = {}, extraClassName) => {
  return clsx(
    // Base styles
    classes.base,

    // Interactive states
    classes.hover,
    classes.focus,
    classes.active,

    // Theme states
    classes.dark,
    classes.darkHover,

    // Responsive
    classes.sm,
    classes.md,
    classes.lg,
    classes.xl,
    classes['2xl'],

    // Custom override
    classes.custom,

    // Emergency override
    extraClassName
  );
};

/**
 * Extract YouTube ID from URL
 */
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

/**
 * Extract Vimeo ID from URL
 */
const getVimeoId = (url) => {
  if (!url) return null;
  const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// ============================================================================
// Main Component
// ============================================================================

const CMS_Media = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Media',

  // Main styling - flat class structure
  classes = defaultClasses,

  // Non-class props
  type = 'image',
  src,
  alt = 'Media',
  poster,

  // Dimensions
  aspectRatio,
  objectFit = 'cover',
  objectPosition = 'center',

  // Video specific
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,

  // Loading
  lazy = true,
  placeholder,

  // Fallback
  fallback,
  fallbackText = 'Media failed to load',

  // Caption
  caption,
  captionPosition = 'bottom',

  // Play button
  playButton = true,

  // Link
  href,
  target,

  // Events
  onClick,

  // Debug
  debug = false,

  // Extra
  className,
  style,
  children,
  ...props
}, ref) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Determine actual media type
  const mediaType = useMemo(() => {
    if (type !== 'image' && type !== 'video') return type;

    if (src) {
      if (src.includes('youtube.com') || src.includes('youtu.be')) return 'youtube';
      if (src.includes('vimeo.com')) return 'vimeo';
    }

    return type;
  }, [type, src]);

  // Build YouTube embed URL
  const youtubeUrl = useMemo(() => {
    const id = getYouTubeId(src);
    if (!id) return null;

    const params = new URLSearchParams({
      autoplay: autoPlay ? '1' : '0',
      controls: controls ? '1' : '0',
      loop: loop ? '1' : '0',
      muted: muted ? '1' : '0',
      playsinline: playsInline ? '1' : '0',
    });

    return `https://www.youtube.com/embed/${id}?${params.toString()}`;
  }, [src, autoPlay, controls, loop, muted, playsInline]);

  // Build Vimeo embed URL
  const vimeoUrl = useMemo(() => {
    const id = getVimeoId(src);
    if (!id) return null;

    const params = new URLSearchParams({
      autoplay: autoPlay ? '1' : '0',
      controls: controls ? '1' : '0',
      loop: loop ? '1' : '0',
      muted: muted ? '1' : '0',
    });

    return `https://player.vimeo.com/video/${id}?${params.toString()}`;
  }, [src, autoPlay, controls, loop, muted]);

  // Build container classes
  const containerClasses = useMemo(() => {
    return clsx(
      buildClasses(classes, className),
      'relative overflow-hidden',
      aspectRatio && (aspectRatios[aspectRatio] || `aspect-[${aspectRatio}]`),
      href && 'cursor-pointer',
      className
    );
  }, [classes, aspectRatio, href, className]);

  // Build media element classes
  const mediaClasses = useMemo(() => {
    return clsx(
      'w-full h-full',
      objectFitClasses[objectFit],
      objectPositionClasses[objectPosition],
      classes.media,
      isHovered && classes.mediaHover,
      classes.mediaDark
    );
  }, [objectFit, objectPosition, classes.media, classes.mediaHover, classes.mediaDark, isHovered]);

  // Handle load/error
  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  // Render image
  const renderImage = () => {
    const imageSrc = hasError && fallback ? fallback : src;

    if (!imageSrc) {
      return renderFallback();
    }

    return (
      <>
        {/* Placeholder */}
        {placeholder && !isLoaded && (
          <img
            src={placeholder}
            alt={alt}
            className={clsx(
              'absolute inset-0 w-full h-full',
              objectFitClasses[objectFit],
              'transition-opacity duration-300',
              isLoaded ? 'opacity-0' : 'opacity-100'
            )}
          />
        )}

        {/* Main image */}
        <img
          src={imageSrc}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          className={clsx(
            mediaClasses,
            'transition-opacity duration-300',
            placeholder && !isLoaded ? 'opacity-0' : 'opacity-100'
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      </>
    );
  };

  // Render video
  const renderVideo = () => {
    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        className={mediaClasses}
        onLoadedData={handleLoad}
        onError={handleError}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    );
  };

  // Render YouTube
  const renderYouTube = () => {
    if (!youtubeUrl) return renderFallback('Invalid YouTube URL');

    return (
      <iframe
        src={youtubeUrl}
        title={alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={clsx('absolute inset-0 w-full h-full', classes.media)}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  };

  // Render Vimeo
  const renderVimeo = () => {
    if (!vimeoUrl) return renderFallback('Invalid Vimeo URL');

    return (
      <iframe
        src={vimeoUrl}
        title={alt}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className={clsx('absolute inset-0 w-full h-full', classes.media)}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  };

  // Render iframe
  const renderIframe = () => {
    return (
      <iframe
        src={src}
        title={alt}
        allow={autoPlay ? 'autoplay' : ''}
        allowFullScreen
        className={clsx('absolute inset-0 w-full h-full', classes.media)}
        onLoad={handleLoad}
        onError={handleError}
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
          <p>{customMessage || fallbackText}</p>
        </div>
      </div>
    );
  };

  // Render overlay
  const renderOverlay = () => {
    if (!classes.overlay) return null;

    return (
      <div
        className={clsx(
          'absolute inset-0 transition-all duration-300',
          classes.overlay,
          isHovered && classes.overlayHover
        )}
      />
    );
  };

  // Render caption
  const renderCaption = () => {
    if (!caption) return null;

    return (
      <div
        className={clsx(
          'absolute z-10 p-4',
          captionPositions[captionPosition],
          classes.caption,
          isHovered && classes.captionHover,
          classes.captionDark
        )}
      >
        {caption}
      </div>
    );
  };

  // Render play button
  const renderPlayButton = () => {
    if (!playButton || mediaType === 'image') return null;
    if (isPlaying && mediaType !== 'youtube' && mediaType !== 'vimeo') return null;

    return (
      <button
        onClick={() => {
          const video = videoRef.current;
          if (video) {
            if (isPlaying) video.pause();
            else video.play();
            setIsPlaying(!isPlaying);
          }
        }}
        className={clsx(
          'absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20',
          'flex items-center justify-center',
          'rounded-full transition-all duration-300',
          'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white',
          classes.playButton,
          isHovered && classes.playButtonHover
        )}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <svg className="w-1/2 h-1/2 text-white" fill="currentColor" viewBox="0 0 24 24">
          {isPlaying ? (
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          ) : (
            <path d="M8 5v14l11-7L8 5z" />
          )}
        </svg>
      </button>
    );
  };

  // Render media based on type
  const renderMedia = () => {
    switch (mediaType) {
      case 'video': return renderVideo();
      case 'youtube': return renderYouTube();
      case 'vimeo': return renderVimeo();
      case 'iframe': return renderIframe();
      case 'image':
      default: return renderImage();
    }
  };

  // Container element
  const Container = href ? 'a' : 'div';
  const rel = href && target === '_blank' ? 'noreferrer' : undefined;

  return (
    <Container
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={containerClasses}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-uid={uid}
      data-component={component}
      {...props}
    >
      <div className="relative w-full h-full">
        {renderMedia()}
        {renderOverlay()}
        {renderCaption()}
        {renderPlayButton()}
        {children}
      </div>
    </Container>
  );
});

CMS_Media.displayName = 'CMS_Media';
CMS_Media.metadata = componentMetadata;
CMS_Media.defaultProps = defaultProps;

// ============================================================================
// Pre-configured Media Components
// ============================================================================

export const CMS_Image = forwardRef((props, ref) => (
  <CMS_Media ref={ref} type="image" {...props} />
));
CMS_Image.displayName = 'CMS_Image';

export const CMS_Video = forwardRef((props, ref) => (
  <CMS_Media ref={ref} type="video" {...props} />
));
CMS_Video.displayName = 'CMS_Video';

export const CMS_YouTube = forwardRef((props, ref) => (
  <CMS_Media ref={ref} type="youtube" {...props} />
));
CMS_YouTube.displayName = 'CMS_YouTube';

export const CMS_Vimeo = forwardRef((props, ref) => (
  <CMS_Media ref={ref} type="vimeo" {...props} />
));
CMS_Vimeo.displayName = 'CMS_Vimeo';

// ============================================================================
// Export
// ============================================================================

export default CMS_Media;
