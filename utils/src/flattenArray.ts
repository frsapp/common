export const flattenArray = (arr: any[]) => {

  if (!arr.length) return [];

  const result: any[] = [];

  const flatten = (_arr: any[]) => {
    for (const x of _arr) {
      if (Array.isArray(x)) flatten(x);
      else result.push(x);
    }
  }

  flatten(arr);

  return result;
}