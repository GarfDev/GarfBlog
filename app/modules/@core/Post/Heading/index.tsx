import React from 'react';
import Styles from './styles';

interface Props {
  children: React.ReactChild;
  level: number;
}

export default function Heading(props: Props) {
  return <Styles.HeadingContainer level={props.level}>{props.children}</Styles.HeadingContainer>;
}
