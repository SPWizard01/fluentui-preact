import type { ComponentChildren, JSX } from "preact";
import type { FASTElement } from "@microsoft/fast-element";

export interface FluentProps<T extends FASTElement>
    extends Omit<JSX.HTMLAttributes<T>, "children"> {
    children?: ComponentChildren;
}
