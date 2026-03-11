/**
 * Utility functions for CMS Builder
 */

/**
 * Generate unique ID
 */
export const generateId = (prefix = 'comp') => {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Find component by ID in nested structure
 */
export const findComponentById = (components, id) => {
    for (const component of components) {
        if (component.uid === id) return component;
        if (component.children) {
            const found = findComponentById(component.children, id);
            if (found) return found;
        }
    }
    return null;
};

/**
 * Update component in nested structure
 */
export const updateComponentById = (components, id, updates) => {
    return components.map((component) => {
        if (component.uid === id) {
            return { ...component, ...updates };
        }
        if (component.children) {
            return {
                ...component,
                children: updateComponentById(component.children, id, updates),
            };
        }
        return component;
    });
};

/**
 * Append child to a component by ID (nested structure)
 */
export const addChildById = (components, id, child) => {
    return components.map((component) => {
        if (component.uid === id) {
            const children = Array.isArray(component.children) ? component.children : [];
            return { ...component, children: [...children, child] };
        }
        if (component.children) {
            return {
                ...component,
                children: addChildById(component.children, id, child),
            };
        }
        return component;
    });
};

/**
 * Delete component from nested structure
 */
export const deleteComponentById = (components, id) => {
    return components.filter((component) => {
        if (component.uid === id) return false;
        if (component.children) {
            component.children = deleteComponentById(component.children, id);
        }
        return true;
    });
};

/**
 * Move component in array
 */
export const moveComponent = (components, fromIndex, toIndex) => {
    const result = [...components];
    const [removed] = result.splice(fromIndex, 1);
    result.splice(toIndex, 0, removed);
    return result;
};

/**
 * Parse class string into object for editing
 */
export const parseClassString = (classString) => {
    if (!classString) return {};
    const classes = classString.split(' ');
    const result = {};

    classes.forEach((cls) => {
        if (cls.startsWith('hover:')) {
            result.hover = result.hover ? `${result.hover} ${cls}` : cls;
        } else if (cls.startsWith('focus:')) {
            result.focus = result.focus ? `${result.focus} ${cls}` : cls;
        } else if (cls.startsWith('active:')) {
            result.active = result.active ? `${result.active} ${cls}` : cls;
        } else if (cls.startsWith('dark:')) {
            result.dark = result.dark ? `${result.dark} ${cls}` : cls;
        } else if (cls.startsWith('sm:')) {
            result.sm = result.sm ? `${result.sm} ${cls}` : cls;
        } else if (cls.startsWith('md:')) {
            result.md = result.md ? `${result.md} ${cls}` : cls;
        } else if (cls.startsWith('lg:')) {
            result.lg = result.lg ? `${result.lg} ${cls}` : cls;
        } else if (cls.startsWith('xl:')) {
            result.xl = result.xl ? `${result.xl} ${cls}` : cls;
        } else {
            result.base = result.base ? `${result.base} ${cls}` : cls;
        }
    });

    return result;
};

/**
 * Build class string from object
 */
export const buildClassString = (classObj) => {
    const parts = [];
    if (classObj.base) parts.push(classObj.base);
    if (classObj.hover) parts.push(classObj.hover);
    if (classObj.focus) parts.push(classObj.focus);
    if (classObj.active) parts.push(classObj.active);
    if (classObj.dark) parts.push(classObj.dark);
    if (classObj.sm) parts.push(classObj.sm);
    if (classObj.md) parts.push(classObj.md);
    if (classObj.lg) parts.push(classObj.lg);
    if (classObj.xl) parts.push(classObj.xl);
    return parts.join(' ');
};

/**
 * Deep clone object
 */
export const deepClone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};

/**
 * Validate JSON structure
 */
export const validateComponentJSON = (json) => {
    if (!Array.isArray(json)) return false;

    const validateComponent = (comp) => {
        if (!comp.uid || !comp.component) return false;
        if (comp.children && !Array.isArray(comp.children)) return false;
        if (comp.children) {
            return comp.children.every(validateComponent);
        }
        return true;
    };

    return json.every(validateComponent);
};
