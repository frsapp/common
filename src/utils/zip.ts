export const zip = <K extends string|number, V>(keys: K[], values: V[]) => {
    if (
        !keys.length || 
        !values.length || 
        keys.length !== values.length ||
        !keys.some(x => typeof x === 'string' || typeof x === 'number')
        ) return;

    return values.reduce((map: Object, val: V, i: number) => ({
        ...map, [keys[i]]: val
    }),  <{[key in K]: V}>{});

}