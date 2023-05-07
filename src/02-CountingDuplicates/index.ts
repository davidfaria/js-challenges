export function duplicateCount(text: string) {
  const result: { [key: string]: number } = {};

  text.split("").reduce((_: any, current: string) => {
    const key = String(current).toLowerCase();

    if (result[key]) {
      result[key] = result[key] + 1;
    } else {
      result[key] = 1;
    }
  }, {});

  const count = Object.values(result).filter((val) => val > 1)?.length || 0;

  return count;
}

export function duplicateCount2(text: string) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
