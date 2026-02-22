import Names from './names';
import NativeNames from './nativeNames';

/** @type LanguageName[] */
const LANGUAGES = [...Object.values(Names)] as const;

/** @type LanguageNativeName[] */
const LANGUAGES_NATIVES = [...Object.values(NativeNames)] as const;

type LanguageName = typeof LANGUAGES[number];
type LanguageNativeName = typeof LANGUAGES_NATIVES[number];

export type {
    LanguageName,
    LanguageNativeName,
}

export default {
    LANGUAGES,
    LANGUAGES_NATIVES,
};
