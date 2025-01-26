import {
  FluentDesignSystem,
  TextInputDefinition as FluentElementDefinition,
  TextInputAppearance,
  TextInputType,
  type TextInput as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TextInputProps extends FluentProps<FluentElement> {
  appearance?: TextInputAppearance;
  autocomplete?: string;
  autofocus?: boolean;
  autoResize?: boolean;
  block?: boolean;
  dirName?: string;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  type?: TextInputType;
  value?: any;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-text-input": TextInputProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const TextInput = forwardRef<FluentElement, TextInputProps>(
  (props, ref) => {
    return <fluent-text-input {...props} ref={ref} />;
  }
);
