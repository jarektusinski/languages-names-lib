import Names from './names';
import NativeNames from './nativeNames';

/** @type LanguageName[] */
const LANGUAGE_NAMES = [...Object.values(Names)] as const;

/** @type LanguageNativeName[] */
const LANGUAGE_NATIVE_NAMES = [...Object.values(NativeNames)] as const;

type LanguageName = typeof LANGUAGE_NAMES[number];
type LanguageNativeName = typeof LANGUAGE_NATIVE_NAMES[number];

export type {
    LanguageName,
    LanguageNativeName,
};

export default {
    ...Names,
    ...NativeNames,
    LANGUAGE_NAMES,
    LANGUAGE_NATIVE_NAMES,
};
