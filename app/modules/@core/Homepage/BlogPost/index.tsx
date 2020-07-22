import React from 'react';
import moment from 'moment';
// import {Card} from '@/global/components';
import {Post} from './types';
import Styles from './Styles';

type Props = Post;

export default function BlogPost(props: Props) {
  // console.log(props);
  return (
    <Styles.PostContainer>
      <>
        <Styles.Header>{Object.keys(props.files)[0]}</Styles.Header>
        <Styles.Datetime>Updated at {moment(props.updated_at).format('DD-MMM-YYYY HH:MM')}</Styles.Datetime>
        <Styles.Description>{props.description}</Styles.Description>
      </>
    </Styles.PostContainer>
  );
}
