import React from 'react';
import {Row, Col} from 'antd';
import Link from './Link';
import Styles from './styles';

export default function NavigationBar() {
  return (
    <Styles.NavigationContainer>
      <Row justify="center">
        <Col xs={23} md={16} lg={8}>
          <Styles.Images src="https://i.imgur.com/EJRmBIE.png" width="100%" />
          <Styles.RoutingContainer>
            <Link content="Homepage" url="/" />
            <Link content="Contact" url="/contact" />
            <Link content="About me" url="/about" />
          </Styles.RoutingContainer>
        </Col>
      </Row>
    </Styles.NavigationContainer>
  );
}
