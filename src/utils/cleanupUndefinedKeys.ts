export const cleanupUndefinedKeys = (obj: any) => {
  if (!obj) return;
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'undefined') {
      delete obj[key];
    }
  });
}