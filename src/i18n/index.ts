import es from './es';

export const LOCALE_ES = 'es';

export const loadTranslation = (
  locale: string
): Promise<Record<string, string>> => {
  if (locale === LOCALE_ES) {
    return import('./es').then(module => module.default);
  }
  throw new Error('Translation not found');
};

const messages = {
  es,
};

export default messages;
