# LanguagesNamesLib

TypeScript library providing language names as constants.

## Instalacja

Aby zainstalować zależności projektu, uruchom:

```bash
npm install
```

## Uruchamianie testów

Po zainstalowaniu zależności, możesz uruchomić testy za pomocą:

```bash
npm test
```

## Dostępne skrypty

- `npm run build` - Kompiluje TypeScript do JavaScript w folderze `dist/`
- `npm test` - Uruchamia testy z użyciem Jest
- `npm run lint` - Sprawdza kod pod kątem błędów lintingu
- `npm run lint:fix` - Automatycznie naprawia błędy lintingu
- `npm run format` - Formatuje kod używając Prettier
- `npm run format:check` - Sprawdza formatowanie kodu

## Użycie

```typescript
import { LANGUAGE_NAMES, ALL_LANGUAGE_NAMES, LanguageName } from 'languages-names-lib';

// Użycie pojedynczych stałych
console.log(LANGUAGE_NAMES.ENGLISH); // "English"
console.log(LANGUAGE_NAMES.POLISH);  // "Polish"

// Użycie tablicy wszystkich nazw
ALL_LANGUAGE_NAMES.forEach(name => {
  console.log(name);
});

// Użycie typu
const myLanguage: LanguageName = LANGUAGE_NAMES.GERMAN;
```

## Struktura projektu

```
LanguagesNamesLib/
├── src/
│   ├── constants.ts    # Definicje stałych nazw języków
│   └── index.ts        # Główny punkt wejścia biblioteki
├── tests/
│   ├── constants.test.ts
│   └── index.test.ts
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── jest.config.js
```

## Licencja

MIT

