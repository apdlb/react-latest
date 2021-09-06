import { createTheme, Theme } from '@material-ui/core';

const defaultTheme = createTheme();

const createMyTheme = (): Theme => {
  return defaultTheme;
};

export default createMyTheme;
