export type IClass<T extends object = object, ARGS extends any[] = any[]> = new (...args: ARGS) => T;
