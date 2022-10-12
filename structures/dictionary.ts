export const dictionary = <T>(keys: string[], val: T) =>
  Object.fromEntries(keys.map((key) => [key, val]));
