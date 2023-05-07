export function duplicateCount(text: string) {
  const result: Record<string, number> = {};

  text.split('').reduce((_: object, current: string) => {
    const key = String(current).toLowerCase();

    if (result[key]) {
      result[key] += +1;
    } else {
      result[key] = 1;
    }
    return result;
  }, {});

  const count = Object.values(result).filter((val) => val > 1)?.length || 0;

  return count;
}

export function duplicateCount2(text: string) {
  const result = text
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/([^])\1+/g);

  return result ? result?.length : 0;
}
