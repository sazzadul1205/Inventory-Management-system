// components/grapejs/GrapeJSEditor.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

// =============================
// CMS Content Components
// =============================
import CMS_Title from '../CMS_Title';
import CMS_Subtitle from '../CMS_Subtitle';
import CMS_Text from '../CMS_Text';
import CMS_Button from '../CMS_Button';
import CMS_Badge from '../CMS_Badge';
import CMS_Media from '../CMS_Media';

// =============================
// Layout Components
// =============================
import CMS_Card from '../CMS_Card';
import CMS_Divider from '../CMS_Divider';
import { CMS_DividerWithText, CMS_DividerWithIcon, CMS_VerticalDivider } from '../CMS_Divider';
import CMS_List from '../CMS_List';
import { CMS_ListItem, CMS_IconList } from '../CMS_List';

// =============================
// Data Display Components
// =============================
import CMS_Table from '../CMS_Table';

// =============================
// Form Components
// =============================
import CMS_Input, { CMS_InputGroup, CMS_InputAddon } from '../CMS_Input';

const GrapeJSEditor = ({ initialConfig, onSave, onCancel }) => {
  const editorRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // ==========================================================================
  // Convert your JSON to GrapeJS HTML
  // ==========================================================================
  const convertYourJSONToHTML = useCallback((config) => {
    if (!config) return '';

    const convertComponent = (comp) => {
      if (!comp) return '';

      // Map your component types to HTML elements
      const getElement = (componentType) => {
        switch (componentType) {
          // Container Components
          case 'CMS_Section': return 'section';
          case 'CMS_Grid': return 'div';
          case 'CMS_Flex': return 'div';
          case 'CMS_Container': return 'div';

          // Content Components
          case 'CMS_Title': return 'h2';
          case 'CMS_Subtitle': return 'h3';
          case 'CMS_Text': return 'p';
          case 'CMS_Button': return 'button';
          case 'CMS_Badge': return 'span';
          case 'CMS_Media': return 'div';

          // Layout Components
          case 'CMS_Card': return 'div';
          case 'CMS_List': return 'ul';
          case 'CMS_ListItem': return 'li';
          case 'CMS_IconList': return 'div';
          case 'CMS_Divider': return 'hr';
          case 'CMS_DividerWithText': return 'div';
          case 'CMS_DividerWithIcon': return 'div';
          case 'CMS_VerticalDivider': return 'div';

          // Data Display
          case 'CMS_Table': return 'table';

          // Form Components
          case 'CMS_Input': return 'input';
          case 'CMS_InputGroup': return 'div';
          case 'CMS_InputAddon': return 'div';

          default: return 'div';
        }
      };

      const element = getElement(comp.component);

      // Build classes from config
      const buildClasses = (config) => {
        const classes = [];

        // Background
        if (config?.background?.gradient) classes.push(config.background.gradient);
        if (config?.background?.color) classes.push(config.background.color);
        if (config?.background?.darkGradient) classes.push(config.background.darkGradient);
        if (config?.background?.darkColor) classes.push(`dark:${config.background.darkColor}`);

        // Spacing
        if (config?.spacing?.padding) classes.push(config.spacing.padding);
        if (config?.spacing?.margin) classes.push(config.spacing.margin);

        // Dimensions
        if (config?.dimensions?.maxWidth) classes.push(`max-w-${config.dimensions.maxWidth}`);
        if (config?.dimensions?.width === 'full') classes.push('w-full');
        if (config?.dimensions?.minHeight === 'screen') classes.push('min-h-screen');

        // Borders
        if (config?.borders?.rounded) classes.push(config.borders.rounded);
        if (config?.borders?.border) classes.push(config.borders.border);
        if (config?.borders?.borderColor) classes.push(config.borders.borderColor);

        // Effects
        if (config?.effects?.shadow) classes.push(config.effects.shadow);
        if (config?.effects?.opacity) classes.push(`opacity-${config.effects.opacity}`);

        // Flex
        if (config?.flex?.direction) classes.push(`flex-${config.flex.direction}`);
        if (config?.flex?.justify) classes.push(`justify-${config.flex.justify}`);
        if (config?.flex?.align) classes.push(`items-${config.flex.align}`);

        // Grid
        if (config?.grid?.cols) classes.push(`grid-cols-${config.grid.cols}`);
        if (config?.grid?.gap) classes.push(`gap-${config.grid.gap}`);

        // Text specific
        if (config?.fontSize) classes.push(config.fontSize);
        if (config?.fontWeight) classes.push(config.fontWeight);
        if (config?.color) classes.push(config.color);
        if (config?.darkColor) classes.push(config.darkColor);
        if (config?.alignment) {
          if (config.alignment === 'center') classes.push('text-center');
          else if (config.alignment === 'right') classes.push('text-right');
          else classes.push('text-left');
        }

        return classes.join(' ');
      };

      // Get text content
      let content = '';
      if (comp.config?.text) {
        content = comp.config.text;
      } else if (comp.component === 'CMS_Media' && comp.config?.src) {
        // Handle media specially
        if (comp.config.type === 'image') {
          content = `<img src="${comp.config.src}" alt="${comp.config.alt || ''}" class="w-full h-full object-cover" />`;
        } else if (comp.config.type === 'video') {
          content = `<video src="${comp.config.src}" controls class="w-full h-full"></video>`;
        }
      } else if (comp.component === 'CMS_Button' && comp.config?.text) {
        content = comp.config.text;
      }

      // Handle children
      const children = comp.children?.map(child => convertComponent(child)).join('') || '';

      // Store full config as data attribute
      const configStr = JSON.stringify(comp.config || {}).replace(/"/g, '&quot;');

      // For self-closing tags like input
      if (element === 'input' || element === 'hr') {
        return `<${element} 
          data-uid="${comp.uid}"
          data-component="${comp.component}"
          data-config='${configStr}'
          class="${buildClasses(comp.config)}"
          ${comp.config?.placeholder ? `placeholder="${comp.config.placeholder}"` : ''}
          ${comp.config?.type ? `type="${comp.config.type}"` : ''}
        />`;
      }

      // Regular tags
      return `
        <${element} 
          data-uid="${comp.uid}"
          data-component="${comp.component}"
          data-config='${configStr}'
          class="${buildClasses(comp.config)}"
          ${comp.config?.href ? `href="${comp.config.href}"` : ''}
          ${comp.config?.target ? `target="${comp.config.target}"` : ''}
        >
          ${content}
          ${children}
        </${element}>
      `;
    };

    return convertComponent(config);
  }, []);

  // ==========================================================================
  // Convert GrapeJS HTML back to your JSON
  // ==========================================================================
  const convertGrapeToYourJSON = useCallback(() => {
    if (!editor) return null;

    const html = editor.getHtml();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const parseElement = (element) => {
      if (!element || !element.dataset) return null;

      // Get stored config from data attribute
      let config = {};
      try {
        if (element.dataset.config) {
          config = JSON.parse(element.dataset.config);
        }
      } catch (e) {
        console.warn('Failed to parse config', e);
      }

      // Update text content for text components
      if (element.dataset.component?.includes('Title') ||
        element.dataset.component?.includes('Subtitle') ||
        element.dataset.component?.includes('Text') ||
        element.dataset.component?.includes('Button') ||
        element.dataset.component?.includes('Badge')) {
        config.text = element.textContent;
      }

      // Update src for media
      if (element.dataset.component === 'CMS_Media') {
        const img = element.querySelector('img');
        if (img) {
          config.src = img.src;
          config.alt = img.alt;
        }
        const video = element.querySelector('video');
        if (video) {
          config.src = video.src;
        }
      }

      // Parse children
      const children = [];
      Array.from(element.children).forEach(child => {
        // Skip if it's a media element's internal children
        if (element.dataset.component === 'CMS_Media' &&
          (child.tagName === 'IMG' || child.tagName === 'VIDEO')) {
          return;
        }

        const parsedChild = parseElement(child);
        if (parsedChild) children.push(parsedChild);
      });

      return {
        uid: element.dataset.uid || `comp-${Date.now()}-${Math.random()}`,
        component: element.dataset.component || 'CMS_Container',
        config: config,
        ...(children.length > 0 && { children })
      };
    };

    // Start from body children
    const components = [];
    Array.from(doc.body.children).forEach(child => {
      const parsed = parseElement(child);
      if (parsed) components.push(parsed);
    });

    // Return the first component (root) or null
    return components[0] || null;
  }, [editor]);

  // ==========================================================================
  // Initialize editor
  // ==========================================================================
  useEffect(() => {
    if (!editorRef.current || editor) return;

    console.log('Initializing GrapeJS...');

    const gjsEditor = grapesjs.init({
      container: editorRef.current,
      height: '100%',

      // Storage
      storageManager: false,

      // Undo manager
      undoManager: {
        trackSelection: true
      },

      // Device Manager for responsive design
      deviceManager: {
        devices: [
          {
            name: 'Desktop',
            width: '',
          },
          {
            name: 'Tablet',
            width: '768px',
            widthMedia: '768px',
          },
          {
            name: 'Mobile',
            width: '320px',
            widthMedia: '320px',
          }
        ]
      },

      // Style Manager configuration
      styleManager: {
        sectors: [
          {
            name: 'General',
            open: false,
            buildProps: ['display', 'position', 'top', 'right', 'bottom', 'left']
          },
          {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding']
          },
          {
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'color', 'text-align', 'line-height']
          },
          {
            name: 'Background',
            open: false,
            buildProps: ['background-color', 'background-image', 'background-repeat', 'background-position', 'background-size']
          },
          {
            name: 'Border',
            open: false,
            buildProps: ['border-radius', 'border-width', 'border-style', 'border-color']
          },
          {
            name: 'Shadow',
            open: false,
            buildProps: ['box-shadow']
          }
        ]
      },

      // Block Manager for component library
      blockManager: {
        appendTo: '#blocks-container',
        blocks: [
          {
            id: 'cms-section',
            label: 'Section',
            content: `
              <section 
                data-component="CMS_Section" 
                data-uid="section-${Date.now()}"
                data-config='{"variant":"section"}'
                class="relative w-full min-h-screen px-4 py-12"
              >
                <div class="max-w-7xl mx-auto">
                  <h2 data-component="CMS_Title" class="text-3xl font-bold">New Section</h2>
                </div>
              </section>
            `,
            category: 'Containers',
          },
          {
            id: 'cms-grid',
            label: 'Grid',
            content: `
              <div 
                data-component="CMS_Grid" 
                data-uid="grid-${Date.now()}"
                data-config='{"grid":{"cols":2,"gap":4}}'
                class="grid grid-cols-2 gap-4 p-4"
              >
                <div class="bg-gray-100 p-4 rounded">Column 1</div>
                <div class="bg-gray-100 p-4 rounded">Column 2</div>
              </div>
            `,
            category: 'Containers',
          },
          {
            id: 'cms-flex',
            label: 'Flex',
            content: `
              <div 
                data-component="CMS_Flex" 
                data-uid="flex-${Date.now()}"
                data-config='{"flex":{"direction":"row","justify":"center","align":"center"},"spacing":{"gap":4}}'
                class="flex flex-row justify-center items-center gap-4 p-4"
              >
                <div class="bg-gray-100 p-4 rounded">Item 1</div>
                <div class="bg-gray-100 p-4 rounded">Item 2</div>
              </div>
            `,
            category: 'Containers',
          },
          {
            id: 'cms-title',
            label: 'Title',
            content: `
              <h2 
                data-component="CMS_Title" 
                data-uid="title-${Date.now()}"
                data-config='{"variant":"hero","text":"Your Title Here","alignment":"center"}'
                class="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white"
              >
                Your Title Here
              </h2>
            `,
            category: 'Content',
          },
          {
            id: 'cms-subtitle',
            label: 'Subtitle',
            content: `
              <h3 
                data-component="CMS_Subtitle" 
                data-uid="subtitle-${Date.now()}"
                data-config='{"variant":"subtitle","text":"Your subtitle text here","alignment":"center"}'
                class="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-400"
              >
                Your subtitle text here
              </h3>
            `,
            category: 'Content',
          },
          {
            id: 'cms-text',
            label: 'Text',
            content: `
              <p 
                data-component="CMS_Text" 
                data-uid="text-${Date.now()}"
                data-config='{"variant":"body","text":"Your paragraph text goes here. This is a customizable text component."}'
                class="text-base text-gray-700 dark:text-gray-300"
              >
                Your paragraph text goes here. This is a customizable text component.
              </p>
            `,
            category: 'Content',
          },
          {
            id: 'cms-button',
            label: 'Button',
            content: `
              <button 
                data-component="CMS_Button" 
                data-uid="button-${Date.now()}"
                data-config='{"text":"Click Me","variant":"primary","size":"md","rounded":"rounded-md"}'
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Click Me
              </button>
            `,
            category: 'Content',
          },
          {
            id: 'cms-badge',
            label: 'Badge',
            content: `
              <span 
                data-component="CMS_Badge" 
                data-uid="badge-${Date.now()}"
                data-config='{"text":"New","variant":"primary","size":"sm","shape":"pill"}'
                class="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
              >
                New
              </span>
            `,
            category: 'Content',
          },
          {
            id: 'cms-media',
            label: 'Media',
            content: `
              <div 
                data-component="CMS_Media" 
                data-uid="media-${Date.now()}"
                data-config='{"type":"image","src":"https://via.placeholder.com/640x360","alt":"Placeholder","rounded":"rounded-lg"}'
                class="relative overflow-hidden rounded-lg"
              >
                <img src="https://via.placeholder.com/640x360" alt="Placeholder" class="w-full h-full object-cover" />
              </div>
            `,
            category: 'Content',
          },
          {
            id: 'cms-card',
            label: 'Card',
            content: `
              <div 
                data-component="CMS_Card" 
                data-uid="card-${Date.now()}"
                data-config='{"variant":"elevated","rounded":"rounded-lg","shadow":"shadow"}'
                class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
              >
                <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 class="text-lg font-semibold">Card Title</h3>
                </div>
                <div class="p-4">
                  <p class="text-gray-600 dark:text-gray-400">Card content goes here</p>
                </div>
                <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                  <button class="text-sm text-blue-600">Action</button>
                </div>
              </div>
            `,
            category: 'Layout',
          },
          {
            id: 'cms-list',
            label: 'List',
            content: `
              <ul 
                data-component="CMS_List" 
                data-uid="list-${Date.now()}"
                data-config='{"type":"ul","style":"disc"}'
                class="list-disc pl-5 space-y-2"
              >
                <li class="text-gray-700 dark:text-gray-300">List item 1</li>
                <li class="text-gray-700 dark:text-gray-300">List item 2</li>
                <li class="text-gray-700 dark:text-gray-300">List item 3</li>
              </ul>
            `,
            category: 'Layout',
          },
          {
            id: 'cms-divider',
            label: 'Divider',
            content: `
              <hr 
                data-component="CMS_Divider" 
                data-uid="divider-${Date.now()}"
                data-config='{"variant":"solid","thickness":"thin"}'
                class="my-4 border-gray-300 dark:border-gray-700"
              />
            `,
            category: 'Layout',
          },
          {
            id: 'cms-input',
            label: 'Input',
            content: `
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Label</label>
                <input 
                  data-component="CMS_Input" 
                  data-uid="input-${Date.now()}"
                  data-config='{"type":"text","placeholder":"Enter text..."}'
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  placeholder="Enter text..."
                />
              </div>
            `,
            category: 'Form',
          },
          {
            id: 'cms-table',
            label: 'Table',
            content: `
              <table 
                data-component="CMS_Table" 
                data-uid="table-${Date.now()}"
                data-config='{"variant":"striped"}'
                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              >
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Header 1</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Header 2</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Data 1</td>
                    <td class="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Data 2</td>
                  </tr>
                </tbody>
              </table>
            `,
            category: 'Data',
          }
        ]
      },

      // Panels configuration
      panels: {
        defaults: [
          {
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [
              {
                id: 'visibility',
                active: true,
                label: '<u>V</u>',
                command: 'sw-visibility',
              },
              {
                id: 'export',
                label: 'Exp',
                command: 'export-template',
              },
              {
                id: 'show-json',
                label: 'JSON',
                command: 'show-json',
              },
              {
                id: 'undo',
                label: 'Undo',
                command: 'undo',
              },
              {
                id: 'redo',
                label: 'Redo',
                command: 'redo',
              },
            ],
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: 'D',
                command: 'set-device-desktop',
                active: true,
              },
              {
                id: 'device-tablet',
                label: 'T',
                command: 'set-device-tablet',
              },
              {
                id: 'device-mobile',
                label: 'M',
                command: 'set-device-mobile',
              },
            ],
          },
        ],
      },

      // Add custom commands
      commands: {
        defaults: [
          {
            id: 'show-json',
            run(editor) {
              const json = convertGrapeToYourJSON();
              alert(JSON.stringify(json, null, 2));
            },
          },
        ],
      },
    });

    // Load initial config if provided
    if (initialConfig) {
      const html = convertYourJSONToHTML(initialConfig);
      console.log('Loading initial config:', html);
      gjsEditor.setComponents(html);
    }

    setEditor(gjsEditor);
    setIsReady(true);

    // Log when editor is ready
    gjsEditor.on('load', () => {
      console.log('GrapeJS Editor loaded');
    });

    return () => {
      gjsEditor.destroy();
    };
  }, [initialConfig, convertYourJSONToHTML, convertGrapeToYourJSON]);

  // ==========================================================================
  // Save handler
  // ==========================================================================
  const handleSave = () => {
    if (!editor) return;
    const yourJSON = convertGrapeToYourJSON();
    console.log('Saved JSON:', yourJSON);
    onSave?.(yourJSON);
  };

  // ==========================================================================
  // Render
  // ==========================================================================
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Custom Toolbar */}
      <div className="bg-gray-100 border-b p-2 flex items-center gap-2">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Save to My System
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
        <div className="flex-1" />
        <div className="panel__basic-actions flex gap-2" />
        <div className="panel__devices flex gap-2" />
      </div>

      {/* Main Editor Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Blocks Panel */}
        <div className="w-64 bg-gray-50 border-r overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Components
            </h3>
            <div id="blocks-container" className="space-y-2" />
          </div>
        </div>

        {/* Editor Container */}
        <div className="flex-1 overflow-hidden">
          <div ref={editorRef} className="h-full" />
        </div>

        {/* Style Manager (will be populated by GrapeJS) */}
        <div className="w-64 bg-gray-50 border-l overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Properties
            </h3>
            <div className="space-y-4" id="style-manager-container" />
          </div>
        </div>
      </div>

      {/* Loading State */}
      {!isReady && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading GrapeJS Editor...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrapeJSEditor;