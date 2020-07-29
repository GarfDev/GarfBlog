import React from 'react';
import {shallow} from 'enzyme';
// RESOURCE TO TEST
import {BrowserRouter as Router} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import NavigationBar from '@/global/components/NavigationBar';

test('NavigationBar did mouth', () => {
  const navigationBar = shallow(
    <RecoilRoot>
      <NavigationBar />
    </RecoilRoot>,
  );

  expect(navigationBar.length).toEqual(1);
  expect(navigationBar).toMatchSnapshot();
});

test('NavigationBar show up correctly', () => {
  const navigationBar = shallow(
    <RecoilRoot>
      <Router>
        <NavigationBar />
      </Router>
    </RecoilRoot>,
  );

  expect(navigationBar.render().text()).toEqual('GARFDEVContact');
});
