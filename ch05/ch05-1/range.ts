export const range = (from: number, to: number): number[] => {
  console.log(from, to);
  return from < to ? [from, ...range(from + 1, to)]: [];
}
