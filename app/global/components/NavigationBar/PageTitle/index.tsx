import React from 'react';
import Styles from './styles';

interface Props {
  content: string;
  url: string;
}

export default function PageTitle(props: Props) {
  return <Styles.Title to={props.url}>{props.content}</Styles.Title>;
}
