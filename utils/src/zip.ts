export const zip = <K extends string|number, V>(keys: K[], values: V[]) => {
    if (
        !Array.isArray(keys) ||
        !Array.isArray(values) ||
        !keys.length || 
        !values.length || 
        keys.length !== values.length ||
        !keys.some(x => typeof x === 'string' || typeof x === 'number')
        ) return;

    return values.reduce((map: Object, val: V, i: number) => ({
        ...map, [keys[i]]: val
    }), {} as {[key in K]: V});
}