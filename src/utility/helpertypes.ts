export interface WithChildrenAndSlots<S extends string = ""> {
    /**
     * DO NOT USE, THIS IS ONLY FOR DOCUMENTATION PURPOSES
     * 
     * Describes `slot` value available for children
     */
    _availableSlotsForChildren?: S;
    children?: any;
}
