import { useIntl, IntlShape } from 'react-intl';
import { useCallback } from 'react';

type ReturnType = {
  formatMessage: (
    id: string | number,
    values?: Record<string, string | number | boolean | null | undefined | Date>
  ) => string;
  formatRequiredField: (
    id: string | number,
    values?: Record<string, string | number | boolean | null | undefined | Date>
  ) => string;
  intl: IntlShape;
};

const useFormatMessage = (): ReturnType => {
  const intl: IntlShape = useIntl();

  const formatMessage = useCallback(
    (
      id: string | number,
      values?: Record<
        string,
        string | number | boolean | null | undefined | Date
      >
    ) => {
      const message = intl.formatMessage({ id }, values);
      return message;
    },
    [intl]
  );

  const formatRequiredField = useCallback(
    (
      id: string | number,
      values?: Record<
        string,
        string | number | boolean | null | undefined | Date
      >
    ) => {
      const message = `${intl.formatMessage({ id }, values)} *`;
      return message;
    },
    [intl]
  );

  return { formatMessage, formatRequiredField, intl };
};

export default useFormatMessage;
