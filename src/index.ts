export const getCountWords = (text: string) => {
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  return words.length;
};

export const getCharsCount = (text: string) => {
  const cleanedText = text.replaceAll(/[\n\r]/g, '');
  return cleanedText.length;
};

export const getSymbolsCount = (text: string) => {
  const symbols = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

  let count = 0;

  for (const element of text) {
    if (symbols.includes(element)) count += 1;
  }

  return count;
};
