export declare const UNIT: {
    readonly PEDERTRACTOR: "PEDERTRACTOR";
    readonly TRACTOR: "TRACTOR";
};
export type UNIT = (typeof UNIT)[keyof typeof UNIT];
export declare const ACTION: {
    readonly CREATE: "CREATE";
    readonly READ: "READ";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly LIST: "LIST";
};
export type ACTION = (typeof ACTION)[keyof typeof ACTION];
export declare const LOGACTIONS: {
    readonly LOGIN: "LOGIN";
    readonly CREATE: "CREATE";
    readonly DELETE: "DELETE";
    readonly EDIT: "EDIT";
    readonly LIST: "LIST";
};
export type LOGACTIONS = (typeof LOGACTIONS)[keyof typeof LOGACTIONS];
