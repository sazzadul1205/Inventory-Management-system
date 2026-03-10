import { color } from 'framer-motion';
import React, { Suspense, lazy } from 'react';

// Lazy load CMS components
const CMS_Section = lazy(() => import('../../../../components/CMS_Container').then(mod => ({ default: mod.CMS_Section })));
const CMS_Grid = lazy(() => import('../../../../components/CMS_Container').then(mod => ({ default: mod.CMS_Grid })));
const CMS_Flex = lazy(() => import('../../../../components/CMS_Container').then(mod => ({ default: mod.CMS_Flex })));
const CMS_Title = lazy(() => import('../../../../components/CMS_Title'));
const CMS_Text = lazy(() => import('../../../../components/CMS_Text'));
const CMS_List = lazy(() => import('../../../../components/CMS_List'));
const CMS_Media = lazy(() => import('../../../../components/CMS_Media'));
const CMS_Badge = lazy(() => import('../../../../components/CMS_Badge'));
const CMS_Button = lazy(() => import('../../../../components/CMS_Button'));

const ExamplePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CMS_Section
        config={{
          variant: 'hero',
          background: {
            color: 'bg-white',
            fullWidth: true,
          },
          dimensions: {
            minHeight: 'screen',
          },
          spacing: {
            padding: 'py-24 md:py-32 lg:py-40',
          },
        }}
      >
        <CMS_Grid
          config={{
            grid: {
              cols: 1,
              colsTablet: 2,
              colsDesktop: 2,
              gap: 12,
            },
            spacing: {
              padding: 'px-4',
            },
          }}
        >
          {/* Left Column */}
          <CMS_Flex
            config={{
              flex: {
                direction: 'col',
                align: 'start',
              },
              spacing: {
                gap: 6,
              },
            }}
          >
            {/* Fixed width and height for image */}
            <CMS_Media
              config={{
                type: 'image',
                src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                alt: 'Team collaboration',
                // Fixed dimensions
                width: '400px',      // Fixed width
                height: '225px',     // Fixed height (16:9 ratio)
                objectFit: 'cover',
                rounded: 'rounded-xl',
                shadow: 'shadow-lg',
                // Light mode border
                border: 'border',
                borderColor: 'border-gray-200',
                darkBorderColor: 'dark:border-gray-700',
              }}
            />

            <CMS_Title
              config={{
                text: 'Build Better Products Faster',
                variant: 'hero',
                // Light mode color
                color: 'text-gray-900',
                // Dark mode color
                darkColor: 'dark:text-white',
                alignment: 'left',
                margin: 'mt-4',
              }}
            />

            <CMS_Text
              config={{
                text: 'Our platform helps teams collaborate seamlessly, ship features faster, and delight users with exceptional experiences.',
                variant: 'lead',
                // Light mode color
                color: 'text-gray-600',
                // Dark mode color
                darkColor: 'dark:text-gray-300',
                alignment: 'left',
                maxWidth: 'max-w-xl',
              }}
            />

            <CMS_Badge
              config={{
                text: 'FEATURES',
                variant: 'primary',
                size: 'sm',
                // Light mode colors
                color: 'text-blue-800',
                bgColor: 'bg-blue-100',
                // Dark mode colors
                darkColor: 'dark:text-blue-200',
                darkBgColor: 'dark:bg-blue-900',
                rounded: 'pill',
                margin: 'mt-2',
              }}
            />

            <CMS_List
              config={{
                type: 'ul',
                style: 'none',
                spacing: 'space-y-3',
                // Light mode color
                color: 'text-gray-700',
                // Dark mode color
                darkColor: 'dark:text-white',
              }}
              items={[
                {
                  icon: 'FaCheckCircle',
                  iconLibrary: 'fa',
                  // Light mode icon color
                  iconColor: 'text-green-600',
                  // Dark mode icon color
                  darkIconColor: 'dark:text-green-400',
                  iconSize: 'w-5 h-5',
                  text: 'Unlimited projects and team members',
                  // Light mode text color
                  color: 'text-gray-700',
                  // Dark mode text color
                  darkColor: 'dark:text-white',
                },
                {
                  icon: 'FaCheckCircle',
                  iconLibrary: 'fa',
                  iconColor: 'text-green-600',
                  darkIconColor: 'dark:text-green-400',
                  iconSize: 'w-5 h-5',
                  text: 'Advanced analytics and reporting',
                  color: 'text-gray-700',
                  darkColor: 'dark:text-white',
                },
                {
                  icon: 'FaCheckCircle',
                  iconLibrary: 'fa',
                  iconColor: 'text-green-600',
                  darkIconColor: 'dark:text-green-400',
                  iconSize: 'w-5 h-5',
                  text: '24/7 priority support',
                  color: 'text-gray-700',
                  darkColor: 'dark:text-white',
                },
              ]}
            />

            <CMS_Button
              config={{
                text: 'Get Started Today',
                variant: 'gradient',
                size: 'lg',
                icon: 'FaArrowRight',
                iconLibrary: 'fa',
                iconPosition: 'right',
                // Light mode gradient
                gradient: 'from-purple-500 to-pink-500',
                // Dark mode gradient
                darkGradient: 'dark:from-purple-400 dark:to-pink-400',
                color: 'text-white',
                darkColor: 'dark:text-white',
                hover: {
                  scale: 'scale-105',
                  shadow: 'shadow-xl',
                },
                margin: 'mt-8',
                rounded: 'rounded-full',
              }}
            />
          </CMS_Flex>

          {/* Right Column */}
          <CMS_Flex
            config={{
              flex: {
                direction: 'col',
                align: 'start',
              },
              spacing: {
                gap: 6,
              },
            }}
          >
            <CMS_Badge
              config={{
                text: 'WHAT WE OFFER',
                variant: 'primary',
                size: 'sm',
                // Light mode colors
                color: 'text-blue-800',
                bgColor: 'bg-blue-100',
                // Dark mode colors
                darkColor: 'dark:text-blue-200',
                darkBgColor: 'dark:bg-blue-900',
                rounded: 'pill',
              }}
            />

            <CMS_Title
              config={{
                text: 'Everything You Need to Succeed',
                variant: 'section',
                // Light mode color
                color: 'text-gray-900',
                // Dark mode color
                darkColor: 'dark:text-white',
                alignment: 'left',
              }}
            />

            <CMS_Text
              config={{
                text: 'Comprehensive tools and features designed to streamline your workflow and boost productivity.',
                variant: 'description',
                // Light mode color
                color: 'text-gray-600',
                // Dark mode color
                darkColor: 'dark:text-gray-400',
                alignment: 'left',
                maxWidth: 'max-w-md',
              }}
            />

            <CMS_Flex
              config={{
                flex: {
                  direction: 'row',
                  wrap: 'wrap',
                },
                spacing: {
                  gap: 4,
                  margin: 'mt-8',
                },
              }}
            >
              <CMS_Button
                config={{
                  text: 'Learn More',
                  variant: 'outline',
                  size: 'md',
                  // Light mode colors
                  color: 'text-blue-600',
                  border: 'border-2 border-blue-600',
                  // Dark mode colors
                  darkColor: 'dark:text-blue-400',
                  darkBorder: 'dark:border-blue-400',
                  hover: {
                    // Light mode hover
                    bgColor: 'bg-blue-600',
                    textColor: 'text-white',
                    // Dark mode hover
                    darkBgColor: 'dark:bg-blue-500',
                    darkTextColor: 'dark:text-white',
                  },
                  rounded: 'rounded-full',
                }}
              />
              <CMS_Button
                config={{
                  text: 'Watch Demo',
                  variant: 'ghost',
                  size: 'md',
                  icon: 'FaPlay',
                  iconLibrary: 'fa',
                  // Light mode color
                  color: 'text-gray-700',
                  // Dark mode color
                  darkColor: 'dark:text-white',
                  hover: {
                    scale: 'scale-105',
                    // Light mode hover
                    bgColor: 'bg-gray-100',
                    // Dark mode hover
                    darkBgColor: 'dark:bg-white/10',
                  },
                  rounded: 'rounded-full',
                }}
              />
            </CMS_Flex>

            {/* Stats with light/dark mode */}
            <CMS_Flex
              config={{
                flex: {
                  direction: 'row',
                  wrap: 'wrap',
                },
                spacing: {
                  gap: 8,
                  margin: 'mt-12',
                },
              }}
            >
              <CMS_Flex
                config={{
                  flex: {
                    direction: 'col',
                    align: 'center',
                  },
                }}
              >
                <CMS_Title
                  config={{
                    text: '500+',
                    variant: 'hero',
                    fontSize: 'text-4xl',
                    // Light mode
                    color: 'text-gray-900',
                    // Dark mode
                    darkColor: 'dark:text-white',
                  }}
                />
                <CMS_Text
                  config={{
                    text: 'Happy Clients',
                    // Light mode
                    color: 'text-gray-600',
                    // Dark mode
                    darkColor: 'dark:text-gray-400',
                    fontSize: 'text-sm',
                  }}
                />
              </CMS_Flex>
              <CMS_Flex
                config={{
                  flex: {
                    direction: 'col',
                    align: 'center',
                  },
                }}
              >
                <CMS_Title
                  config={{
                    text: '50M+',
                    variant: 'hero',
                    fontSize: 'text-4xl',
                    color: 'text-gray-900',
                    darkColor: 'dark:text-white',
                  }}
                />
                <CMS_Text
                  config={{
                    text: 'Tasks Completed',
                    color: 'text-gray-600',
                    darkColor: 'dark:text-gray-400',
                    fontSize: 'text-sm',
                  }}
                />
              </CMS_Flex>
              <CMS_Flex
                config={{
                  flex: {
                    direction: 'col',
                    align: 'center',
                  },
                }}
              >
                <CMS_Title
                  config={{
                    text: '99.9%',
                    variant: 'hero',
                    fontSize: 'text-4xl',
                    color: 'text-gray-900',
                    darkColor: 'dark:text-white',
                  }}
                />
                <CMS_Text
                  config={{
                    text: 'Uptime',
                    color: 'text-gray-600',
                    darkColor: 'dark:text-gray-400',
                    fontSize: 'text-sm',
                  }}
                />
              </CMS_Flex>
            </CMS_Flex>
          </CMS_Flex>
        </CMS_Grid>
      </CMS_Section>
    </Suspense>
  );
};

export default ExamplePage;