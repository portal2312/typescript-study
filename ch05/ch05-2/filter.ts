export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
  let result: T[] = [];
  for (let index: number = 0; index < array.length; ++index) {
    const value = array[index];
    console.log(`filter-${index}:`, value);
    if (callback(value, index)) {
      result = [...result, value];
      console.log('  ', 'result: ', result);
    }
  }
  return result;
};