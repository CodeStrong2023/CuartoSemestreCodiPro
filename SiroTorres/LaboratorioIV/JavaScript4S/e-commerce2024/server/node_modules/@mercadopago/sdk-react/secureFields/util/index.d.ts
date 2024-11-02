import type { FieldName, Field } from "./types";
export declare const getInitializationDependencies: (params: any, keysToExclude: string[]) => any;
export declare const initSecureField: (fieldName: FieldName, params: any) => Promise<Field | undefined>;
