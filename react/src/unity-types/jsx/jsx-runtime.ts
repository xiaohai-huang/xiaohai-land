import { UIToolkitElements, View } from "@reactunity/renderer/uitoolkit";
import { ReactUnity } from "@reactunity/renderer";

import Cmp = ReactUnity.UIToolkit;

type Children<T = any> = { children?: T };

interface XiaohaiUIToolkitElements extends UIToolkitElements {
  // Add custom elements here
  "my-image": UIToolkitElements["image"];
}

export namespace JSX {
  export type ElementType = React.JSX.ElementType;
  export interface Element extends React.JSX.Element {}
  export interface ElementClass extends React.JSX.ElementClass {}
  export interface ElementAttributesProperty
    extends React.JSX.ElementAttributesProperty {}
  export interface ElementChildrenAttribute
    extends React.JSX.ElementChildrenAttribute {}
  export type LibraryManagedAttributes<C, P> =
    React.JSX.LibraryManagedAttributes<C, P>;
  export interface IntrinsicAttributes
    extends React.JSX.IntrinsicAttributes,
      ReactUnityCustomAttributes {}
  export interface IntrinsicClassAttributes<T>
    extends React.JSX.IntrinsicClassAttributes<T> {}
  export interface IntrinsicElements
    extends XiaohaiUIToolkitElements,
      ReactUnityCustomElements {}
}
