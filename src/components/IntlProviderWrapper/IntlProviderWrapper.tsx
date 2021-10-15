import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { loadTranslation, LOCALE_ES } from '../../i18n';
import es from '../../i18n/es';

/**
 * Wrapper of IntlProvider that manage the language changes
 */
const IntlProviderWrapper: React.FC = props => {
  const { children } = props;
  const [locale] = useState(LOCALE_ES);
  const [messages, setMessages] = useState<Record<string, string>>(es);

  const onChangeLocale = () => {
    loadTranslation(locale).then(newMessages => {
      setMessages(newMessages);
    });
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export default IntlProviderWrapper;
