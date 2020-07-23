import React from 'react';
import {Row, Col} from 'antd';
import HomepageStyles from '@/modules/@core/Homepage/styles';
import Styles from './styles';
import {contactContent} from './constants';

export default function Contact() {
  return (
    <HomepageStyles.Container>
      <Row justify="center">
        <Col xs={23} md={16} lg={8}>
          <Styles.StyledMarkdown source={contactContent} />
        </Col>
      </Row>
    </HomepageStyles.Container>
  );
}
