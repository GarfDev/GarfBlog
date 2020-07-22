import React, {lazy, Suspense} from 'react';
import {Route} from 'react-router-dom';
// Import Resources
import 'antd/dist/antd.css';

export default function RootRouter() {
  const Homepage = lazy(() => import('../Homepage'));
  const Post = lazy(() => import('../Post'));
  return (
    <Suspense fallback={<></>}>
      <Route exact path="/" component={Homepage} />
      <Route path="/post/:gistHash/:fileHash/:filename" component={Post} />
    </Suspense>
  );
}
