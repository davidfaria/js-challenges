export function toCamelCase(str: string) {
  const words = String(str).split(/[-_ ]/);

  // const camelCaseWords = [words[0]];
  // for (let i = 1; i < words.length; i += 1) {
  //   camelCaseWords.push(`${words[i].charAt(0).toUpperCase()}${words[i].slice(1)}`);
  // }
  // const camelCaseStr = camelCaseWords.join('');

  const camelCaseWords = words
    ?.slice(1)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  const camelCaseStr = `${words[0]}${camelCaseWords.join('')}`;

  // console.log({ words, camelCaseWords, camelCaseStr });

  // const end = performance.now();
  // console.log(`took: ${end - start} ms`);

  return camelCaseStr;
}

export function toCamelCase2(str: string) {
  const regExp = /[-_ ]\w/gi;
  return String(str).replace(regExp, (match) => match.charAt(1).toUpperCase());
}
