// pages/backend/CustomSectionBuilder/CustomSectionBuilder.jsx
import React, { useState } from 'react';
import GrapeJSEditor from '../../../components/grapejs/GrapeJSEditor';
import HeroInventory from '../../frontend/Home/HeroSection/HeroSectionCustom';
import { Save, Eye } from 'lucide-react';

const CustomSectionBuilder = () => {
  const [mode, setMode] = useState('edit');
  const [config, setConfig] = useState(null);

  // Load your initial config
  React.useEffect(() => {
    // Your existing PAGE_CONFIG.heroConfig
    setConfig({
      "uid": "hero-section-001",
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
          "uid": "hero-grid-002",
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
              "uid": "hero-left-flex-003",
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
                  "uid": "hero-badge-004",
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
                  "uid": "hero-title-005",
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
                  "uid": "hero-description-006",
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
                  "uid": "hero-buttons-flex-007",
                  "component": "CMS_Flex",
                  "config": {
                    "flex": {
                      "direction": "row",
                      "align": "center"
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
                      "uid": "primary-button-008",
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
                      "uid": "secondary-button-009",
                      "component": "CMS_Button",
                      "config": {
                        "text": "Track Shipments",
                        "size": "lg",
                        "icon": "FaTruck",
                        "iconLibrary": "fa",
                        "bgColor": "bg-transparent",
                        "darkBgColor": "dark:bg-transparent",
                        "border": "border-2 border-blue-600",
                        "darkBorder": "dark:border-blue-400",
                        "color": "text-[#000000]",
                        "rounded": "rounded-full",
                        "hover": {
                          "bgColor": "bg-blue-600",
                          "darkBgColor": "dark:bg-blue-500",
                          "color": "text-[#ffffff]",
                          "darkColor": "text-[#ffffff]",
                          "scale": "scale-100",
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
              "uid": "hero-right-flex-010",
              "component": "CMS_Flex",
              "config": {
                "flex": {
                  "direction": "col",
                  "align": "center"
                }
              },
              "children": [
                {
                  "uid": "hero-media-011",
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
          "uid": "stats-grid-012",
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
              "uid": "stats-item1-013",
              "component": "CMS_Flex",
              "config": {
                "flex": {
                  "direction": "col",
                  "align": "center"
                }
              },
              "children": [
                {
                  "uid": "stats-number1-014",
                  "component": "CMS_Title",
                  "config": {
                    "text": "10K+",
                    "fontSize": "text-3xl",
                    "color": "text-gray-900",
                    "darkColor": "dark:text-white"
                  }
                },
                {
                  "uid": "stats-label1-015",
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
              "uid": "stats-item2-016",
              "component": "CMS_Flex",
              "config": {
                "flex": {
                  "direction": "col",
                  "align": "center"
                }
              },
              "children": [
                {
                  "uid": "stats-number2-017",
                  "component": "CMS_Title",
                  "config": {
                    "text": "500+",
                    "fontSize": "text-3xl",
                    "color": "text-gray-900",
                    "darkColor": "dark:text-white"
                  }
                },
                {
                  "uid": "stats-label2-018",
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
              "uid": "stats-item3-019",
              "component": "CMS_Flex",
              "config": {
                "flex": {
                  "direction": "col",
                  "align": "center"
                }
              },
              "children": [
                {
                  "uid": "stats-number3-020",
                  "component": "CMS_Title",
                  "config": {
                    "text": "99.9%",
                    "fontSize": "text-3xl",
                    "color": "text-gray-900",
                    "darkColor": "dark:text-white"
                  }
                },
                {
                  "uid": "stats-label3-021",
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
    });
  }, []);



  const handleSave = (newConfig) => {
    setConfig(newConfig);
    localStorage.setItem('cms-config', JSON.stringify(newConfig));
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white border-b px-6 py-3 flex justify-between">
        <h1 className="text-xl font-bold">Section Builder</h1>
        <div className="flex gap-2">
          <button onClick={() => setMode(mode === 'edit' ? 'preview' : 'edit')}>
            {mode === 'edit' ? <Eye /> : 'Edit'}
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        {mode === 'edit' ? (
          <GrapeJSEditor
            initialConfig={config}
            onSave={handleSave}
            onCancel={() => setMode('preview')}
          />
        ) : (
          <div className="p-8 overflow-auto">
            <HeroInventory config={config} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomSectionBuilder;