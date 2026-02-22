import Names from './names';
import NativeNames from './nativeNames';
import Mappers from './maps';
import Types, { LanguageName, LanguageNativeName } from './types';

export type {
    LanguageName,
    LanguageNativeName,
};

export default {
    ...Names,
    ...NativeNames,
    ...Mappers,
    ...Types,
};
