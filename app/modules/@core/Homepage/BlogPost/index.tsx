import React from 'react';
import moment from 'moment';
import {useHistory} from 'react-router-dom';
// import {Card} from '@/global/components';
import {Post} from './types';
import Styles from './Styles';

type Props = Post;

const parseURL = (url: string) => {
  const regex = /https:\/\/gist\.githubusercontent\.com\/GarfDev\/.*?\/raw\/(.*?)\.md/;
  const path = regex.exec(url)?.[1];
  return path;
};

export default function BlogPost(props: Props) {
  const history = useHistory();

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();

    history.push(`/post/${props.id}/${parseURL(props.files[Object.keys(props.files)[0]].raw_url)}`);
  };

  return (
    <Styles.PostContainer onClick={handleOnClick}>
      <>
        <Styles.Header>{Object.keys(props.files)[0]}</Styles.Header>
        <Styles.Datetime>Updated at {moment(props.updated_at).format('DD-MMM-YYYY HH:MM')}</Styles.Datetime>
        <Styles.Description>{props.description}</Styles.Description>
      </>
    </Styles.PostContainer>
  );
}
