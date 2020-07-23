import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Row, Col} from 'antd';
import {useParams} from 'react-router-dom';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import Markdown from 'react-markdown';
//
import Styles from './styles';
import {currentGist, gistDataSelector} from './atoms';
import {wordMatchRegex} from './constants';
import Link from './Link';
import Heading from './Heading';
import CodeBlock from './CodeBlock';
import LineBreak from './LineBreak';
import BlockQuote from './BlockQuote';
import InlineCodeBlock from './InlineCodeBlock';

export default function Post() {
  const {gistHash, fileHash, filename} = useParams();
  const setGistDataURL = useSetRecoilState(currentGist);
  const gistPost = useRecoilValue(gistDataSelector);

  const [totalWords, setTotalWords] = useState(0);

  useEffect(() => {
    if (gistPost?.data) {
      setTotalWords((gistPost.data.match(wordMatchRegex) || []).length);
    }
  }, [gistPost]);

  useEffect(() => {
    setGistDataURL(`/${gistHash}/raw/${fileHash}/${filename}.md`);
  }, [gistHash, fileHash, filename, setGistDataURL]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{filename} -- GarfDev</title>
      </Helmet>
      <Styles.PostContainer>
        <Row justify="center">
          <Col xs={23} md={16} lg={12}>
            <Styles.GistTitle>{filename}.md</Styles.GistTitle>
            <Styles.MetaData>{Math.round(totalWords / 200)} min read ☕</Styles.MetaData>
            <Markdown
              source={gistPost?.data}
              renderers={{
                code: CodeBlock,
                link: Link,
                heading: Heading,
                inlineCode: InlineCodeBlock,
                blockquote: BlockQuote,
                thematicBreak: LineBreak,
              }}
            />
          </Col>
        </Row>
      </Styles.PostContainer>
    </>
  );
}
