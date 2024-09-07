import { getCharsCount, getCountWords, getSymbolsCount } from '../dist';

const text = 'hello world ;;!';

console.log('getCharsCount', getCharsCount(text));
console.log('getCountWords', getCountWords(text));
console.log('getSymbolsCount', getSymbolsCount(text));
