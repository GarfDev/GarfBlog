import React, {Suspense} from 'react';
import {Route} from 'react-router-dom';
// Import Resources
import Homepage from '@/modules/@core/Homepage';
import Contact from '@/modules/@core/Contact';
import Post from '@/modules/@core/Post';

import 'antd/dist/antd.css';

export default function RootRouter() {
  return (
    <Suspense fallback={<></>}>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/post/:gistHash/:fileHash/:filename" component={Post} />
    </Suspense>
  );
}
