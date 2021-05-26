export const transformFilters = (filter: any) => {
  for (const key in filter) {
    if (typeof filter[key] === 'undefined') {
      delete filter[key];
    } else if (filter[key] instanceof Array) {
      filter[key] = { $in: filter[key] };
    }
  }
}