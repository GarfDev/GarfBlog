import React from 'react';
import {useRecoilValue} from 'recoil';
import {Row, Col} from 'antd';
import BlogPost from './BlogPost';
import {allGistSelector} from './atoms';
import {Post} from './BlogPost/types';
import Styles from './styles';

export default function Homepage() {
  const gits = useRecoilValue(allGistSelector);
  return (
    <Styles.Container>
      <Row justify="center">
        <Col xs={23} md={16} lg={8}>
          {gits.data.map((item: Post) => {
            return <BlogPost key={item.id} {...item} />;
          })}
        </Col>
      </Row>
    </Styles.Container>
  );
}
