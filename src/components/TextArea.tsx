import {
  FluentDesignSystem,
  TextAreaDefinition as FluentElementDefinition,
  TextAreaAppearance,
  TextAreaAutocomplete,
  TextAreaResize,
  TextAreaSize,
  type TextArea as FluentElement,
} from "@fluentui/web-components";
import { forwardRef } from "preact/compat";
import type { FluentProps } from "../utility/helpertypes";

export interface TextAreaProps extends FluentProps<FluentElement> {
  appearance?: TextAreaAppearance;
  autocomplete?: TextAreaAutocomplete;
  autofocus?: boolean;
  autoResize?: boolean;
  block?: boolean;
  dirName?: string;
  disabled?: boolean;
  minLength?: number;
  maxLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  resize?: TextAreaResize;
  size?: TextAreaSize;
  spellcheck?: boolean;
}

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-textarea": TextAreaProps;
    }
  }
}

FluentElementDefinition.define(FluentDesignSystem.registry);

export const TextArea = forwardRef<FluentElement, TextAreaProps>(
  (props, ref) => {
    return <fluent-textarea {...props} ref={ref} />;
  }
);
