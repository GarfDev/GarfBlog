import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
// Import Resources
import Homepage from '../Homepage';

export default function RootRouter() {
  return (
    <Suspense fallback={<></>}>
      <Route exact path="/" component={Homepage} />
    </Suspense>
  );
}
