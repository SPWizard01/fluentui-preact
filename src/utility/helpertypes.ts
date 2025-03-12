import type { ComponentChild, ComponentChildren, JSX } from "preact";
import type { FASTElement } from "@microsoft/fast-element";

export type SlotComponentChild<T extends string> = ComponentChild & {
    slot?: T;
}

export type SlotComponentChildren<T extends string> = SlotComponentChild<T>[] | SlotComponentChild<T>;

export interface FluentBaseProps {
    disabled?: boolean;
    
}

export interface FluentProps<T extends FASTElement, S extends string = "">
    extends Omit<JSX.HTMLAttributes<T>, "children"> {
    children?: ComponentChildren;
    /**
     * DO NOT USE, THIS IS ONLY FOR DOCUMENTATION PURPOSES
     * 
     * Describes `slot` value available for children
     */
    _availableSlotsForChildren?: S;
}
