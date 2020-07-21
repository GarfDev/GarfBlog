import React, {Suspense} from 'react';
import {ThemeProvider} from 'styled-components';
import {Route} from 'react-router-dom';
// Import Resources
import {BaseStyle, DarkTheme} from '@/modules/@core/Theme';

function HelloWord() {
  return <button>Change Theme</button>;
}

export default function RootRouter() {
  return (
    <Suspense fallback={<></>}>
      <ThemeProvider theme={{...DarkTheme}}>
        <Route exact path="/" component={HelloWord} />
        <BaseStyle />
      </ThemeProvider>
    </Suspense>
  );
}
