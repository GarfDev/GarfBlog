import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import Markdown from 'react-markdown';
//
import {currentGist, gistDataSelector} from './atoms';

export default function Post() {
  const {gistHash, fileHash, filename} = useParams();
  const setGistDataURL = useSetRecoilState(currentGist);
  const gistPost = useRecoilValue(gistDataSelector);

  useEffect(() => {
    setGistDataURL(`https://gist.githubusercontent.com/GarfDev/${gistHash}/raw/${fileHash}/${filename}.md`);
  }, [gistHash, fileHash, filename, setGistDataURL]);

  return <Markdown source={gistPost?.data} />;
}
