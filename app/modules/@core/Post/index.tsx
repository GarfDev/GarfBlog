import React, {useEffect} from 'react';
import {Row, Col} from 'antd';
import {useParams} from 'react-router-dom';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import Markdown from 'react-markdown';
//
import Styles from './styles';
import {currentGist, gistDataSelector} from './atoms';
import CodeBlock from './CodeBlock';

export default function Post() {
  const {gistHash, fileHash, filename} = useParams();
  const setGistDataURL = useSetRecoilState(currentGist);
  const gistPost = useRecoilValue(gistDataSelector);

  useEffect(() => {
    setGistDataURL(`https://gist.githubusercontent.com/GarfDev/${gistHash}/raw/${fileHash}/${filename}.md`);
  }, [gistHash, fileHash, filename, setGistDataURL]);

  return (
    <Styles.PostContainer>
      <Row justify="center">
        <Col xs={23} md={16} lg={8}>
          <Markdown source={gistPost?.data} renderers={{code: CodeBlock}} />
        </Col>
      </Row>
    </Styles.PostContainer>
  );
}
