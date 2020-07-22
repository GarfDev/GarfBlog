import React from 'react';
import Styles from './styles';

interface Props {
  children: React.ReactChild;
  className?: string;
}

export default function Card(props: Props) {
  return <Styles.Container className={props.className}>{props.children}</Styles.Container>;
}
