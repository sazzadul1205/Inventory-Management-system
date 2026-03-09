// =============================================
// SECTION 2: BADGE COMPONENT
// =============================================

const BadgeSection = ({
  showBadge,
  badgeText,
  badgeIcon,
  badgeIconType,
  badgeRadius,
  badgeBg,
  badgeBgDark,
  badgeTextColor,
  badgeTextColorDark,
  badgeBorder,
  badgeBorderDark,
  badgeIconColor,
  badgeIconColorDark,
  featureIconColor,
  featureIconColorDark,
  alignment
}) => {
  if (!showBadge) return null;

  const renderBadgeIcon = () => {
    if (!badgeIcon) return null;

    switch (badgeIconType) {
      case 'dot':
        return <span className={`w-2 h-2 ${badgeIconColor} ${badgeIconColorDark} rounded-full animate-pulse mr-2`}></span>;
      case 'star':
        return <HiStar className={`w-4 h-4 ${featureIconColor} ${featureIconColorDark} mr-2`} />;
      case 'check':
        return <HiCheckCircle className={`w-4 h-4 text-green-500 mr-2`} />;
      default:
        return <span className={`w-2 h-2 ${badgeIconColor} ${badgeIconColorDark} rounded-full animate-pulse mr-2`}></span>;
    }
  };

  return (
    <div
      className={`inline-flex items-center backdrop-blur-sm ${badgeRadius} px-4 py-2 border 
        ${badgeBg} ${badgeBgDark} ${badgeBorder} ${badgeBorderDark} 
        ${alignment === 'center' ? 'mx-auto' : ''}`}
    >
      {renderBadgeIcon()}
      <span className={`text-sm font-medium ${badgeTextColor} ${badgeTextColorDark}`}>{badgeText}</span>
    </div>
  );
};