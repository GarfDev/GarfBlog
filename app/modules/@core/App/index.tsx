import React from 'react';
import {useRecoilValue} from 'recoil';
import {ThemeProvider} from 'styled-components';
import RootRouter from './route';
import {themeState} from './atoms';
import {BaseStyle, DarkTheme, LightTheme} from '@/global/Theme';

export default function App() {
  const themeValue = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={themeValue ? DarkTheme : LightTheme}>
      <RootRouter />
      <BaseStyle />
    </ThemeProvider>
  );
}
