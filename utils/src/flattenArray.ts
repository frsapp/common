export const flattenArray = <T>(arr: T[]) => {
  const result: T[] = [];

  const flatten = (_arr: any[]) => {
    for (const item of _arr) {
      if (Array.isArray(item)) flatten(item);
      else result.push(item);
    }
  }

  flatten(arr);

  return result;
}