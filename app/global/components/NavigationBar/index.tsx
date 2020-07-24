import React from 'react';
import {useRecoilState} from 'recoil';
import {Row, Col} from 'antd';
import {themeState} from '@/modules/@core/App/atoms';
import Link from './Link';
import Title from './PageTitle';
import Styles from './styles';

export default function NavigationBar() {
  const [currentThemeState, setThemeState] = useRecoilState(themeState);

  const handleOnChangeState = () => {
    window.localStorage.setItem('theme', JSON.stringify(!currentThemeState));
    setThemeState(!currentThemeState);
  };

  return (
    <Styles.NavigationContainer>
      <Row justify="center">
        <Col xs={23} md={16} lg={8}>
          <Styles.PageTitleContainer>
            <Styles.PageTitle>
              <Title content="GARFDEV" url="/" />
              <Styles.StyledToggle icons={false} checked={currentThemeState} onChange={handleOnChangeState} />
            </Styles.PageTitle>
          </Styles.PageTitleContainer>
          <Styles.RoutingContainer marginFromTop={true}>
            <Link content="Contact" url="/contact" />
          </Styles.RoutingContainer>
        </Col>
      </Row>
    </Styles.NavigationContainer>
  );
}
