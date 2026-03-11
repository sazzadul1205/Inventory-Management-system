import React, { Suspense, lazy } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";
import CMSVisualBuilder from "../../backend/CMSVisualBuilder/CMSVisualBuilder";

// Lazy Hero Sections
const HeroSection1 = lazy(() => import("./HeroSection/HeroSection1"));
const HeroSection2 = lazy(() => import("./HeroSection/HeroSection2"));
const HeroSection3 = lazy(() => import("./HeroSection/HeroSection3"));
const HeroSectionCustom = lazy(() => import("./HeroSection/HeroSectionCustom"));

// Page configuration - Update this object to change which hero is shown
const PAGE_CONFIG = {
  heroVariant: "custom", // Change this to: "variant1", "variant2", "variant3", or "custom"
  "heroConfig": {
    "uid": "cms_section-1773233388249-rxh0gcw3a",
    "component": "CMS_Section",
    "classes": {
      "base": " py-20 px-4 bg-[#27F52E] min-h-auto",
      "dark": "dark:bg-[#111827]",
      "sm": "sm:py-12",
      "md": "md:py-16",
      "lg": "lg:py-20"
    },
    "fullWidth": true,
    "children": [
      {
        "uid": "cms_grid-1773233403769-gxqeeuojw",
        "component": "CMS_Grid",
        "classes": {
          "base": "grid gap-4 px-4 bg-[#5FED65] mx-5 min-h-auto",
          "dark": "dark:bg-[#1F2937]",
          "sm": "sm:gap-6 sm:px-6 grid-cols-1",
          "md": "md:grid-cols-2 md:gap-8",
          "lg": "lg:grid-cols-2 lg:gap-10"
        },
        "fullWidth": false,
        "children": [
          {
            "uid": "grid-item-1773233478930-o65xoc361",
            "component": "CMS_Container",
            "classes": {
              "base": "flex flex-col gap-3"
            },
            "children": [
              {
                "uid": "cms_title-1773233478930-us3c031cs",
                "component": "CMS_Title",
                "level": "h2",
                "text": "Edit this title",
                "alignment": "left",
                "classes": {
                  "base": "text-3xl font-bold text-[#111827]",
                  "dark": "dark:text-[#FFFFFF]",
                  "sm": "sm:text-4xl",
                  "md": "md:text-5xl",
                  "lg": "lg:text-6xl"
                },
               
              },
              {
                "uid": "cms_text-1773233519153-q5ofcyx0e",
                "component": "CMS_Text",
                "tag": "p",
                "text": "Edit this text content. You can change it in the editor. ffwe fef few wefe f gwegfw iu ew gwegiewqg swegewugug  gewi i gg h iwg giu g g ug ir hiq wg guqg  gh  qg ug ig ugauh",
                "alignment": "left",
                "classes": {
                  "base": "text-[#4B5563]",
                  "dark": "dark:text-[#D1D5DB]",
                  "sm": "sm:text-base",
                  "md": "md:text-lg"
                },
               
              },
              {
                "uid": "cms_button-1773233587617-g94ic1g76",
                "component": "CMS_Button",
                "text": "Lets Party",
                "size": "md",
                "icon": "FaArrowRight",
                "iconLibrary": "fa",
                "iconPosition": "right",
                "classes": {
                  "base": "bg-[#2563EB] text-[#FFFFFF] rounded-full px-6 py-3 font-medium",
                  "hover": "hover:bg-[#1D4ED8] hover:scale-100 hover:shadow-xl",
                  "dark": "dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]"
                },
             
                "style": {
                  "color": "#FFFFFF",
                  "backgroundColor": "#2563EB"
                }
              }
            ]
          },
          {
            "uid": "grid-item-1773233509140-g1l2cobkc",
            "component": "CMS_Container",
            "classes": {
              "base": "flex flex-col gap-3"
            },
            "children": [
              {
                "uid": "cms_media-1773233509140-hp3dd43fr",
                "component": "CMS_Media",
                "type": "image",
                "src": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
                "alt": "Placeholder image",
                "objectFit": "cover",
                "aspectRatio": "16/9",
                "classes": {
                  "base": "rounded-2xl shadow-2xl border border-[#E5E7EB] bg-[#FFFFFF]",
                  "dark": "dark:border-[#374151] dark:bg-[#1F2937]",
                  "media": "w-full h-full"
                },
                "position": {
                  "x": 778,
                  "y": 133
                }
              }
            ]
          }
        ],
      
        "style": {
          "backgroundColor": "#5FED65"
        }
      }
    ],
  
    "style": {
      "backgroundColor": "#27F52E"
    }
  }
};

const Home = () => {
  // Render the appropriate hero section based on config
  const renderHeroSection = () => {
    switch (PAGE_CONFIG.heroVariant) {
      case "variant1":
        return <HeroSection1 {...PAGE_CONFIG.heroProps} />;
      case "variant2":
        return <HeroSection2 {...PAGE_CONFIG.heroProps} />;
      case "variant3":
        return <HeroSection3 {...PAGE_CONFIG.heroProps} />;
      case "custom":
      default:
        return <HeroSectionCustom config={PAGE_CONFIG.heroConfig} {...PAGE_CONFIG.heroProps} />;
    }
  };

  return (
    <FrontEnd_Layout>
      <Suspense fallback={<HeroSectionSkeleton />}>
        {renderHeroSection()}
      </Suspense>

      <CMSVisualBuilder />
    </FrontEnd_Layout>
  );
};

export default Home;