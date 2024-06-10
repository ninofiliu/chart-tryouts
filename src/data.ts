export const data = Array(20)
  .fill(null)
  .map((_, index) => ({
    index,
    float: Math.random(),
    category: `cat-${index}`,
    date: new Date(2000 + index, 1, 1),
  }));
