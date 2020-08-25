type MapFunc<T, R> = (T) => R;
type IdentityFunc<T> = MapFunc<T, T>;

// const INumber = IdentityFunc<number> = (x: number): number => x;
// const IString = IdentityFunc<string> = (x: string): string => x;
// const IObject = IdentityFunc<object> = (x: object): object => x;
// const IArray = IdentityFunc<any[]> = (x: any[]): any[] => x;
// const IArray = IdentityFunc<T> = (x: T): T => x;