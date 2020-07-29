import React from 'react';
import {shallow} from 'enzyme';
// RESOURCE TO TEST
import {RecoilRoot} from 'recoil';
import NavigationBar from '@/global/components/NavigationBar';

test('NavigationBar did show up', () => {
  const navigationBar = shallow(
    <RecoilRoot>
      <NavigationBar />
    </RecoilRoot>,
  );

  expect(navigationBar.length).toEqual(1);
  expect(navigationBar).toMatchSnapshot();
});
