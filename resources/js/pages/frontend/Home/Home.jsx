import React, { Suspense, lazy } from "react";

// Layout
import FrontEnd_Layout from "../Layout/FrontEnd_Layout";
import HeroSectionSkeleton from "./HeroSection/HeroSectionSkeleton";

// Lazy Hero Sections
const HeroSection1 = lazy(() => import("./HeroSection/HeroSection1"));
const HeroSection2 = lazy(() => import("./HeroSection/HeroSection2"));
const HeroSection3 = lazy(() => import("./HeroSection/HeroSection3"));
const HeroSectionCustom = lazy(() => import("./HeroSection/HeroSectionCustom"));

// Page configuration - Update this object to change which hero is shown
const PAGE_CONFIG = {
  heroVariant: "custom", // Change this to: "variant1", "variant2", "variant3", or "custom"
  "heroConfig": {
    "uid": "hero-section-001",
    "component": "CMS_Section",
    "classes": {
      "base": "min-h-screen max-w-7xl mx-auto bg-gradient-to-br from-indigo-50 via-white to-blue-50",
      "dark": "dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800",
      "sm": "sm:py-12",
      "md": "md:py-16",
      "lg": "lg:py-20",
      "xl": "xl:py-24",
      "2xl": "2xl:py-28"
    },
    "fullWidth": true,
    "children": [
      {
        "uid": "hero-grid-002",
        "component": "CMS_Grid",
        "classes": {
          "base": "grid gap-4 px-4",
          "sm": "sm:gap-6 sm:px-6",
          "md": "md:grid-cols-2 md:gap-8 md:px-8",
          "lg": "lg:gap-12 lg:px-8",
          "xl": "xl:gap-16"
        },
        "children": [
          {
            "uid": "hero-left-flex-003",
            "component": "CMS_Flex",
            "classes": {
              "base": "flex-col items-start gap-4",
              "sm": "sm:gap-5",
              "md": "md:gap-6",
              "lg": "lg:gap-7",
              "xl": "xl:gap-8"
            },
            "children": [
              {
                "uid": "hero-badge-004",
                "component": "CMS_Badge",
                "classes": {
                  "base": "bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium",
                  "dark": "dark:bg-indigo-900 dark:text-indigo-200",
                  "sm": "sm:text-sm sm:px-4 sm:py-2",
                  "md": "md:text-base md:px-5 md:py-2.5",
                },
                "text": "SMART INVENTORY PLATFORM"
              },
              {
                "uid": "hero-title-005",
                "component": "CMS_Title",
                "level": "h1",
                "text": "Manage Inventory, Warehouses & Logistics in One Powerful Platform",
                "alignment": "left",
                "classes": {
                  "base": "text-gray-900 font-bold tracking-tight",
                  "dark": "dark:text-white",
                  "sm": "sm:text-4xl sm:leading-tight",
                  "md": "md:text-5xl md:leading-tight",
                },
                "highlightClasses": [
                  {
                    "start": 48,
                    "end": 65,
                    "class": "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
                  }
                ]
              },
              {
                "uid": "hero-description-006",
                "component": "CMS_Text",
                "tag": "p",
                "text": "Sazzad Inventory & Logistics helps businesses track products, control warehouses, monitor shipments, and automate supply chains with real-time analytics.",
                "classes": {
                  "base": "text-gray-600 max-w-xl",
                  "dark": "dark:text-gray-300",
                  "sm": "sm:text-base sm:leading-relaxed",
                  "md": "md:text-lg md:leading-relaxed",
                  "lg": "lg:text-xl lg:leading-relaxed"
                }
              },
              {
                "uid": "hero-buttons-flex-007",
                "component": "CMS_Flex",
                "classes": {
                  "base": "flex-col items-stretch w-full gap-3",
                  "sm": "sm:flex-row sm:items-center sm:w-auto sm:gap-4",
                  "md": "md:gap-5",
                  "lg": "lg:gap-6"
                },
                "children": [
                  {
                    "uid": "primary-button-008",
                    "component": "CMS_Button",
                    "text": "Start Managing Inventory",
                    "size": "lg",
                    "icon": "FaArrowRight",
                    "iconLibrary": "fa",
                    "iconPosition": "right",
                    "classes": {
                      "base": "bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-medium text-center",
                      "hover": "hover:from-indigo-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl",
                      "dark": "dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600",
                      "sm": "sm:px-6 sm:py-3 sm:text-sm",
                      "md": "md:px-8 md:py-4 md:text-base",
                    },
                    "href": "/inventory"
                  },
                  {
                    "uid": "secondary-button-009",
                    "component": "CMS_Button",
                    "text": "Track Shipments",
                    "size": "lg",
                    "icon": "FaTruck",
                    "iconLibrary": "fa",
                    "classes": {
                      "base": "bg-transparent border-2 border-blue-600 text-black rounded-full font-medium text-center",
                      "hover": "hover:bg-blue-600 hover:text-white hover:shadow-lg",
                      "dark": "dark:border-blue-400 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white",
                      "sm": "sm:px-6 sm:py-3 sm:text-sm",
                      "md": "md:px-8 md:py-4 md:text-base",
                    },
                    "href": "/tracking"
                  }
                ]
              }
            ]
          },
          {
            "uid": "hero-right-flex-010",
            "component": "CMS_Flex",
            "classes": {
              "base": "flex-col items-center mt-8",
              "sm": "sm:mt-10",
              "md": "md:mt-0"
            },
            "children": [
              {
                "uid": "hero-media-011",
                "component": "CMS_Media",
                "type": "image",
                "src": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
                "alt": "Warehouse dashboard",
                "objectFit": "cover",
                "classes": {
                  "base": "rounded-xl shadow-xl border border-gray-200 dark:border-gray-700",
                  "dark": "dark:border-gray-700",
                  "sm": "sm:rounded-2xl sm:shadow-2xl",
                  "media": "w-full h-auto object-cover",
                  "sm:media": "sm:max-w-lg sm:mx-auto",
                  "md:media": "md:max-w-full",
                  "lg:media": "lg:h-[450px]",
                  "xl:media": "xl:h-[500px]"
                }
              }
            ]
          }
        ]
      },
      {
        "uid": "stats-grid-012",
        "component": "CMS_Grid",
        "classes": {
          "base": "grid gap-6 px-4 mt-12",
          "sm": "sm:grid-cols-2 sm:gap-8 sm:px-6 sm:mt-16",
          "md": "md:grid-cols-3 md:gap-10 md:px-8 md:mt-20",
          "lg": "lg:gap-12 lg:mt-24",
          "xl": "xl:gap-16 xl:mt-28"
        },
        "children": [
          {
            "uid": "stats-item1-013",
            "component": "CMS_Flex",
            "classes": {
              "base": "flex-col items-center p-4",
              "sm": "sm:p-5",
              "md": "md:p-6",
              "lg": "lg:p-8"
            },
            "children": [
              {
                "uid": "stats-number1-014",
                "component": "CMS_Title",
                "level": "h3",
                "text": "10K+",
                "classes": {
                  "base": "text-gray-900 font-bold",
                  "dark": "dark:text-white",
                  "sm": "sm:text-4xl",
                  "md": "md:text-5xl",
                  "lg": "lg:text-6xl",
                  "xl": "xl:text-7xl"
                }
              },
              {
                "uid": "stats-label1-015",
                "component": "CMS_Text",
                "tag": "p",
                "text": "Products Managed",
                "classes": {
                  "base": "text-gray-500 text-center",
                  "dark": "dark:text-gray-400",
                  "sm": "sm:text-sm sm:mt-1",
                  "md": "md:text-base md:mt-2",
                  "lg": "lg:text-lg"
                }
              }
            ]
          },
          {
            "uid": "stats-item2-016",
            "component": "CMS_Flex",
            "classes": {
              "base": "flex-col items-center p-4",
              "sm": "sm:p-5",
              "md": "md:p-6",
              "lg": "lg:p-8"
            },
            "children": [
              {
                "uid": "stats-number2-017",
                "component": "CMS_Title",
                "level": "h3",
                "text": "500+",
                "classes": {
                  "base": "text-gray-900 font-bold",
                  "dark": "dark:text-white",
                  "sm": "sm:text-4xl",
                  "md": "md:text-5xl",
                  "lg": "lg:text-6xl",
                  "xl": "xl:text-7xl"
                }
              },
              {
                "uid": "stats-label2-018",
                "component": "CMS_Text",
                "tag": "p",
                "text": "Active Warehouses",
                "classes": {
                  "base": "text-gray-500 text-center",
                  "dark": "dark:text-gray-400",
                  "sm": "sm:text-sm sm:mt-1",
                  "md": "md:text-base md:mt-2",
                  "lg": "lg:text-lg"
                }
              }
            ]
          },
          {
            "uid": "stats-item3-019",
            "component": "CMS_Flex",
            "classes": {
              "base": "flex-col items-center p-4",
              "sm": "sm:p-5",
              "md": "md:p-6",
              "lg": "lg:p-8"
            },
            "children": [
              {
                "uid": "stats-number3-020",
                "component": "CMS_Title",
                "level": "h3",
                "text": "99.9%",
                "classes": {
                  "base": "text-gray-900 font-bold",
                  "dark": "dark:text-white",
                  "sm": "sm:text-4xl",
                  "md": "md:text-5xl",
                  "lg": "lg:text-6xl",
                  "xl": "xl:text-7xl"
                }
              },
              {
                "uid": "stats-label3-021",
                "component": "CMS_Text",
                "tag": "p",
                "text": "Inventory Accuracy",
                "classes": {
                  "base": "text-gray-500 text-center",
                  "dark": "dark:text-gray-400",
                  "sm": "sm:text-sm sm:mt-1",
                  "md": "md:text-base md:mt-2",
                  "lg": "lg:text-lg"
                }
              }
            ]
          }
        ]
      }
    ]
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

    </FrontEnd_Layout>
  );
};

export default Home;