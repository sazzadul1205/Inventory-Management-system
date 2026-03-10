import React, { lazy } from 'react';

const CMSContainer = lazy(() =>
  import('../../../../components/CMS_Container')
);

const ContainerConfig = {
  "type": "section",
  "maxWidth": "7xl",
  "width": "full",
  "minHeight": "screen",
  "padding": "px-6 py-20",
  "margin": "mx-auto",
  "display": "flex",
  "flexDirection": "col",
  "justifyContent": "center",
  "alignItems": "center",
  "bgGradient": "bg-gradient-to-r from-blue-900 to-blue-800",
  "darkBgGradient": "dark:from-gray-900 dark:to-gray-800",
  "className": "text-white text-center"
}

const HeroSectionCustom = () => {
  return (
    <CMSContainer config={ContainerConfig} >

    </CMSContainer>
  );
};

export default HeroSectionCustom;