// page/frontend/Home/HeroSection/CustomSection.jsx

import React, { Suspense, lazy } from "react";

/*
|--------------------------------------------------------------------------
| Dynamic Lazy Loader
|--------------------------------------------------------------------------
| Loads CMS components automatically from /components folder
*/

const load = (path, exportName = "default") =>
  lazy(() =>
    import(`../../../components/${path}`).then((m) => ({
      default: exportName === "default" ? m.default : m[exportName],
    }))
  );

/*
|--------------------------------------------------------------------------
| Component Registry
|--------------------------------------------------------------------------
*/

const componentRegistry = {
  // Containers
  CMS_Container: load("CMS_Container"),
  CMS_Grid: load("CMS_Container", "CMS_Grid"),
  CMS_Flex: load("CMS_Container", "CMS_Flex"),
  CMS_Section: load("CMS_Container", "CMS_Section"),

  // Titles
  CMS_Title: load("CMS_Title"),
  CMS_H1: load("CMS_Title", "CMS_H1"),
  CMS_H2: load("CMS_Title", "CMS_H2"),
  CMS_H3: load("CMS_Title", "CMS_H3"),
  CMS_H4: load("CMS_Title", "CMS_H4"),

  // Text
  CMS_Text: load("CMS_Text"),
  CMS_Span: load("CMS_Text", "CMS_Span"),
  CMS_Code: load("CMS_Text", "CMS_Code"),
  CMS_Label: load("CMS_Text", "CMS_Label"),
  CMS_Quote: load("CMS_Text", "CMS_Quote"),
  CMS_Paragraph: load("CMS_Text", "CMS_Paragraph"),

  // Buttons
  CMS_Button: load("CMS_Button"),
  CMS_IconButton: load("CMS_Button", "CMS_IconButton"),
  CMS_DangerButton: load("CMS_Button", "CMS_DangerButton"),
  CMS_OutlineButton: load("CMS_Button", "CMS_OutlineButton"),
  CMS_PrimaryButton: load("CMS_Button", "CMS_PrimaryButton"),
  CMS_GradientButton: load("CMS_Button", "CMS_GradientButton"),
  CMS_SecondaryButton: load("CMS_Button", "CMS_SecondaryButton"),

  // Badge
  CMS_Badge: load("CMS_Badge"),

  CMS_DotBadge: load("CMS_Badge", "CMS_DotBadge"),
  CMS_InfoBadge: load("CMS_Badge", "CMS_InfoBadge"),
  CMS_CountBadge: load("CMS_Badge", "CMS_CountBadge"),
  CMS_DangerBadge: load("CMS_Badge", "CMS_DangerBadge"),
  CMS_OutlineBadge: load("CMS_Badge", "CMS_OutlineBadge"),
  CMS_PrimaryBadge: load("CMS_Badge", "CMS_PrimaryBadge"),
  CMS_SuccessBadge: load("CMS_Badge", "CMS_SuccessBadge"),
  CMS_WarningBadge: load("CMS_Badge", "CMS_WarningBadge"),

  // Media
  CMS_Media: load("CMS_Media"),
  CMS_Image: load("CMS_Media", "CMS_Image"),
  CMS_Video: load("CMS_Media", "CMS_Video"),
  CMS_Vimeo: load("CMS_Media", "CMS_Vimeo"),
  CMS_YouTube: load("CMS_Media", "CMS_YouTube"),

  // Cards
  CMS_Card: load("CMS_Card"),
  CMS_CardHeader: load("CMS_Card", "CMS_CardHeader"),
  CMS_CardBody: load("CMS_Card", "CMS_CardBody"),
  CMS_CardFooter: load("CMS_Card", "CMS_CardFooter"),
  CMS_ProductCard: load("CMS_Card", "CMS_ProductCard"),
  CMS_ProfileCard: load("CMS_Card", "CMS_ProfileCard"),
  CMS_ArticleCard: load("CMS_Card", "CMS_ArticleCard"),

  // Divider
  CMS_Divider: load("CMS_Divider"),
  CMS_DashedDivider: load("CMS_Divider", "CMS_DashedDivider"),
  CMS_DividerWithText: load("CMS_Divider", "CMS_DividerWithText"),
  CMS_DividerWithIcon: load("CMS_Divider", "CMS_DividerWithIcon"),
  CMS_VerticalDivider: load("CMS_Divider", "CMS_VerticalDivider"),
  CMS_GradientDivider: load("CMS_Divider", "CMS_GradientDivider"),

  // Lists
  CMS_List: load("CMS_List"),
  CMS_ListItem: load("CMS_List", "CMS_ListItem"),
  CMS_IconList: load("CMS_List", "CMS_IconList"),
  CMS_Checklist: load("CMS_List", "CMS_Checklist"),
  CMS_BulletList: load("CMS_List", "CMS_BulletList"),
  CMS_OrderedList: load("CMS_List", "CMS_OrderedList"),
  CMS_UnorderedList: load("CMS_List", "CMS_UnorderedList"),
  CMS_DefinitionList: load("CMS_List", "CMS_DefinitionList"),

  // Tables
  CMS_Table: load("CMS_Table"),
  CMS_DataTable: load("CMS_Table", "CMS_DataTable"),
  CMS_TableHeader: load("CMS_Table", "CMS_TableHeader"),
  CMS_TableBody: load("CMS_Table", "CMS_TableBody"),
  CMS_TableFooter: load("CMS_Table", "CMS_TableFooter"),
  CMS_SimpleTable: load("CMS_Table", "CMS_SimpleTable"),
  CMS_SelectableTable: load("CMS_Table", "CMS_SelectableTable"),

  // Inputs
  CMS_Input: load("CMS_Input"),
  CMS_Select: load("CMS_Input", "CMS_Select"),
  CMS_Textarea: load("CMS_Input", "CMS_Textarea"),
  CMS_TextInput: load("CMS_Input", "CMS_TextInput"),
  CMS_EmailInput: load("CMS_Input", "CMS_EmailInput"),
  CMS_InputGroup: load("CMS_Input", "CMS_InputGroup"),
  CMS_InputAddon: load("CMS_Input", "CMS_InputAddon"),
  CMS_NumberInput: load("CMS_Input", "CMS_NumberInput"),
  CMS_PasswordInput: load("CMS_Input", "CMS_PasswordInput"),
};

/*
|--------------------------------------------------------------------------
| Components that accept children
|--------------------------------------------------------------------------
*/

const containerComponents = new Set([
  "CMS_Section",
  "CMS_Grid",
  "CMS_Flex",
  "CMS_Container",
  "CMS_Card",
  "CMS_CardHeader",
  "CMS_CardBody",
  "CMS_CardFooter",
  "CMS_List",
  "CMS_UnorderedList",
  "CMS_OrderedList",
  "CMS_DefinitionList",
  "CMS_BulletList",
  "CMS_Checklist",
  "CMS_InputGroup",
  "CMS_Table",
  "CMS_TableHeader",
  "CMS_TableBody",
  "CMS_TableFooter",
]);

/*
|--------------------------------------------------------------------------
| Component Wrapper
|--------------------------------------------------------------------------
*/

const ComponentWrapper = ({ uid, componentType, children }) => {
  if (!uid) return children;

  return (
    <div
      data-component-id={uid}
      data-component-selectable="true"
      data-component-type={componentType}
    >
      {children}
    </div>
  );
};

/*
|--------------------------------------------------------------------------
| Custom Section Renderer
|--------------------------------------------------------------------------
*/

const CustomSection = ({ config }) => {

  const renderComponent = (node) => {
    if (!node) return null;

    const { uid, component, children, ...props } = node;

    const Component = componentRegistry[component];

    if (!Component) {
      console.warn("Unknown component:", component);
      return null;
    }

    const childNodes = Array.isArray(children) ? children : (children ? [children] : []);

    const element = containerComponents.has(component) ? (
      <Component {...props}>
        {childNodes.map((child, i) => (
          <React.Fragment key={child.uid || i}>
            {renderComponent(child)}
          </React.Fragment>
        ))}
      </Component>
    ) : (
      <Component {...props} />
    );

    return (
      <ComponentWrapper uid={uid} componentType={component}>
        {element}
      </ComponentWrapper>
    );
  };

  return (
    <Suspense fallback={<div className="animate-pulse h-96 bg-gray-200" />}>
      <section className="outline-none">
        {renderComponent(config)}
      </section>
    </Suspense>
  );
};

export default CustomSection;
