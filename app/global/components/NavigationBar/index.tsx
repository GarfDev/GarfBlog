import React from 'react';
import {Row, Col} from 'antd';
import Link from './Link';
import Styles from './styles';

export default function NavigationBar() {
  return (
    <Styles.NavigationContainer>
      <Row justify="center">
        <Col xs={23} md={16} lg={8}>
          <Styles.PageTitleContainer>
            <Styles.PageTitle>
              <Link content="GARFDEV" url="/" />
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
