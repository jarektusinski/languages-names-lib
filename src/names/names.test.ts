import Names from './index';

const { LANGUAGE_NAMES, LANGUAGE_NATIVE_NAMES } = Names;

const NUMBER_OF_LANGUAGES = 233;

describe('Names: ', () => {
    it('Should contain all names', () => {
        expect(LANGUAGE_NAMES).toHaveLength(NUMBER_OF_LANGUAGES);
        expect(LANGUAGE_NATIVE_NAMES).toHaveLength(NUMBER_OF_LANGUAGES);
    });
});