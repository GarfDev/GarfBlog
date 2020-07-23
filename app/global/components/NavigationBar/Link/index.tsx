import React from 'react';
import Styles from './styles';

interface Props {
  content: string;
  url: string;
}

export default function Link(props: Props) {
  return <Styles.Link to={props.url}>{props.content}</Styles.Link>;
}
