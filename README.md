# Languages Names Lib

TypeScript library providing language names in English and in their native forms, with mapping utilities.

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Running tests

After installing dependencies, you can run the tests with:

```bash
npm test
```

## Available scripts

- `npm run build` — Compiles TypeScript to JavaScript in the `dist/` folder
- `npm test` — Runs tests with Jest
- `npm run lint` — Checks the code for lint errors
- `npm run lint:fix` — Automatically fixes lint errors
- `npm run format` — Formats the code using Prettier
- `npm run format:check` — Checks code formatting

## Usage

```typescript
import Languages, {
    LanguageName,
    LanguageNativeName,
} from 'languages-names-lib';

// Language names (English) and native names arrays
const { LANGUAGES, LANGUAGES_NATIVES } = Languages;
console.log(LANGUAGES[0]);        // e.g. "Acehnese"
console.log(LANGUAGES_NATIVES[0]); // e.g. "Bahsa Acèh"

// Individual constants (spread from Names and NativeNames)
console.log(Languages.POLISH);           // "Polish"
console.log(Languages.POLISH_NATIVE);    // "Polski"

// Mapping: English name → native name
const { mapLanguageToNative, LANGUAGES_TO_NATIVES } = Languages;
console.log(mapLanguageToNative('Polish'));  // "Polski"
console.log(LANGUAGES_TO_NATIVES['Japanese']); // "日本語"

// Mapping: native name → English name
const { mapNativeToLanguages, NATIVES_TO_LANGUAGES } = Languages;
console.log(mapNativeToLanguages('Polski'));  // "Polish"
console.log(NATIVES_TO_LANGUAGES['日本語']);   // "Japanese"

// Using types
const myLanguage: LanguageName = 'German';
const nativeName: LanguageNativeName = Languages.mapLanguageToNative(myLanguage);
```

## Project structure

```
LanguagesNamesLib/
├── src/
│   ├── index.ts        # Main entry point; re-exports names, native names, maps, and types
│   ├── names.ts        # English language name constants
│   ├── nativeNames.ts  # Native language name constants
│   ├── maps.ts         # language ↔ native name mappings and mapper functions
│   ├── types.ts        # LANGUAGES, LANGUAGES_NATIVES arrays and TypeScript types
│   └── test.ts         # Test utilities or additional tests
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## License
MIT
