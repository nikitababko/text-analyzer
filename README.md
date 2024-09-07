
# Text Analyzer

`Text Analyzer` is a simple TypeScript tool that provides functions to analyze text. It allows you to count the number of words, characters, and special symbols in a string.

## Installation

First, install the dependencies if they are not already installed:

```bash
# With pnpm
pnpm install

# With npm
npm install

# With yarn
yarn install
```

## Usage

### Counting Words: `getCountWords`

The `getCountWords` function counts the number of words in a given text. Words are separated by spaces and other whitespace characters.

```typescript
import { getCountWords } from './path/to/module';

const text = 'Hello, world! This is a simple text analyzer.';
const wordCount = getCountWords(text);

console.log(`Number of words: ${wordCount}`); // Output: Number of words: 7
```

### Counting Characters: `getCharsCount`

The `getCharsCount` function counts the number of characters in a string, excluding line breaks (`
` and `
`).

```typescript
import { getCharsCount } from './path/to/module';

const text = 'Hello, world!\nThis is a simple text analyzer.';
const charCount = getCharsCount(text);

console.log(`Number of characters: ${charCount}`); // Output: Number of characters: 41
```

### Counting Special Symbols: `getSymbolsCount`

The `getSymbolsCount` function counts the number of special symbols in a string. The special symbols considered are: `!"#$%&'()*+,-./:;<=>?@[]^_`{|}~`.

```typescript
import { getSymbolsCount } from './path/to/module';

const text = 'Hello, world! How are you today?';
const symbolCount = getSymbolsCount(text);

console.log(`Number of special symbols: ${symbolCount}`); // Output: Number of special symbols: 3
```

## API

### `getCountWords(text: string): number`

Counts the number of words in a string.

- **Parameters**:
  - `text`: The string of text to analyze.

- **Returns**:
  - The number of words in the string.

### `getCharsCount(text: string): number`

Counts the number of characters in a string, excluding line breaks.

- **Parameters**:
  - `text`: The string of text to analyze.

- **Returns**:
  - The number of characters in the string (excluding line breaks).

### `getSymbolsCount(text: string): number`

Counts the number of special symbols in a string.

- **Parameters**:
  - `text`: The string of text to analyze.

- **Returns**:
  - The number of special symbols in the string.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
