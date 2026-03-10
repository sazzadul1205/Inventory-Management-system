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
  heroConfig : {
    "component": "CMS_Section",
    "config": {
      "background": {
        "gradient": "bg-gradient-to-br from-indigo-50 via-white to-blue-50",
        "darkGradient": "dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800",
        "fullWidth": true
      },
      "dimensions": {
        "minHeight": "screen"
      },
      "spacing": {
        "padding": "py-20 lg:py-28"
      }
    },
    "children": [
      {
        "component": "CMS_Grid",
        "config": {
          "grid": {
            "cols": 1,
            "colsDesktop": 2,
            "gap": 16
          },
          "spacing": {
            "padding": "px-6"
          }
        },
        "children": [
          {
            "component": "CMS_Flex",
            "config": {
              "flex": {
                "direction": "col",
                "align": "start"
              },
              "spacing": {
                "gap": 6
              }
            },
            "children": [
              {
                "component": "CMS_Badge",
                "config": {
                  "text": "SMART INVENTORY PLATFORM",
                  "size": "sm",
                  "shape": "pill",
                  "padding": "px-3 py-4",
                  "color": "text-indigo-700",
                  "bgColor": "bg-indigo-100",
                  "darkColor": "dark:text-indigo-200",
                  "darkBgColor": "dark:bg-indigo-900",
                  "rounded": "rounded-full"
                }
              },
              {
                "component": "CMS_Title",
                "config": {
                  "text": "Manage Inventory, Warehouses & Logistics in One Powerful Platform",
                  "fontSize": "text-4xl md:text-5xl lg:text-6xl",
                  "color": "text-gray-900",
                  "darkColor": "dark:text-white",
                  "alignment": "left",
                  "highlightParts": [
                    {
                      "start": 48,
                      "end": 65,
                      "highlightGradient": "from-blue-600 to-purple-600",
                      "darkHighlightGradient": "dark:from-blue-400 dark:to-purple-400",
                      "highlightGradientDirection": "to-r"
                    }
                  ]
                }
              },
              {
                "component": "CMS_Text",
                "config": {
                  "text": "Sazzad Inventory & Logistics helps businesses track products, control warehouses, monitor shipments, and automate supply chains with real-time analytics.",
                  "fontSize": "text-lg",
                  "color": "text-gray-600",
                  "darkColor": "dark:text-gray-300",
                  "maxWidth": "max-w-xl"
                }
              },
              {
                "component": "CMS_Flex",
                "config": {
                  "flex": {
                    "direction": "row",
                    "align": "start"
                  },
                  "grid": {
                    "gap": 4
                  },
                  "spacing": {
                    "padding": "px-0"
                  }
                },
                "children": [
                  {
                    "component": "CMS_Button",
                    "config": {
                      "text": "Start Managing Inventory",
                      "size": "lg",
                      "icon": "FaArrowRight",
                      "iconLibrary": "fa",
                      "iconPosition": "right",
                      "gradient": "from-indigo-600 to-blue-600",
                      "gradientDirection": "to-r",
                      "darkGradient": "dark:from-indigo-500 dark:to-blue-500",
                      "color": "text-white",
                      "rounded": "rounded-full",
                      "hover": {
                        "gradient": "from-indigo-700 to-blue-700",
                        "darkGradient": "dark:from-indigo-600 dark:to-blue-600",
                        "scale": "scale-105",
                        "shadow": "shadow-xl"
                      },
                      "href": "/inventory"
                    }
                  },
                  {
                    "component": "CMS_Button",
                    "config": {
                      "text": "Track Shipments",
                      "size": "lg",
                      "icon": "FaTruck",
                      "iconLibrary": "fa",
                      "bgColor": "bg-transparent",
                      "border": "border-2 border-blue-600",
                      "darkBorder": "dark:border-blue-400",
                      "color": "text-[#000000]",
                      "darkColor": "dark:text-blue-400",
                      "rounded": "rounded-full",
                      "hover": {
                        "bgColor": "bg-blue-600",
                        "darkBgColor": "dark:bg-blue-500",
                        "color": "text-[#ffffff]",
                        "scale": "scale-105",
                        "shadow": "shadow-lg"
                      },
                      "href": "/tracking"
                    }
                  }
                ]
              }
            ]
          },
          {
            "component": "CMS_Flex",
            "config": {
              "flex": {
                "direction": "col",
                "align": "center"
              }
            },
            "children": [
              {
                "component": "CMS_Media",
                "config": {
                  "type": "image",
                  "src": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
                  "alt": "Warehouse dashboard",
                  "width": "640px",
                  "height": "420px",
                  "objectFit": "cover",
                  "rounded": "rounded-2xl",
                  "shadow": "shadow-2xl",
                  "border": "border",
                  "borderColor": "border-gray-200",
                  "darkBorderColor": "dark:border-gray-700"
                }
              }
            ]
          }
        ]
      },
      {
        "component": "CMS_Grid",
        "config": {
          "grid": {
            "cols": 1,
            "colsTablet": 2,
            "colsDesktop": 3,
            "gap": 8
          },
          "spacing": {
            "margin": ""
          }
        },
        "children": [
          {
            "component": "CMS_Flex",
            "config": {
              "flex": {
                "direction": "col",
                "align": "center"
              }
            },
            "children": [
              {
                "component": "CMS_Title",
                "config": {
                  "text": "10K+",
                  "fontSize": "text-3xl",
                  "color": "text-gray-900",
                  "darkColor": "dark:text-white"
                }
              },
              {
                "component": "CMS_Text",
                "config": {
                  "text": "Products Managed",
                  "fontSize": "text-sm",
                  "color": "text-gray-500",
                  "darkColor": "dark:text-gray-400"
                }
              }
            ]
          },
          {
            "component": "CMS_Flex",
            "config": {
              "flex": {
                "direction": "col",
                "align": "center"
              }
            },
            "children": [
              {
                "component": "CMS_Title",
                "config": {
                  "text": "500+",
                  "fontSize": "text-3xl",
                  "color": "text-gray-900",
                  "darkColor": "dark:text-white"
                }
              },
              {
                "component": "CMS_Text",
                "config": {
                  "text": "Active Warehouses",
                  "fontSize": "text-sm",
                  "color": "text-gray-500",
                  "darkColor": "dark:text-gray-400"
                }
              }
            ]
          },
          {
            "component": "CMS_Flex",
            "config": {
              "flex": {
                "direction": "col",
                "align": "center"
              }
            },
            "children": [
              {
                "component": "CMS_Title",
                "config": {
                  "text": "99.9%",
                  "fontSize": "text-3xl",
                  "color": "text-gray-900",
                  "darkColor": "dark:text-white"
                }
              },
              {
                "component": "CMS_Text",
                "config": {
                  "text": "Inventory Accuracy",
                  "fontSize": "text-sm",
                  "color": "text-gray-500",
                  "darkColor": "dark:text-gray-400"
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
        return <HeroSectionCustom config={PAGE_CONFIG. heroConfig} {...PAGE_CONFIG.heroProps} />;
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