import React from 'react';
import {useRecoilValue} from 'recoil';
import {ThemeProvider} from 'styled-components';
import RootRouter from './route';
import {themeSelector} from './atoms';
import {BaseStyle} from '@/global/Theme';
import {NavigationBar} from '@/global/components';
import 'react-toggle/style.css';

export default function App() {
  const themeValue = useRecoilValue(themeSelector);

  return (
    <ThemeProvider theme={themeValue}>
      <NavigationBar />
      <RootRouter />
      <BaseStyle />
    </ThemeProvider>
  );
}
