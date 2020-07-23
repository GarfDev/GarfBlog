import React from 'react';
import Styles from './styles';

interface Props {
  children: React.ReactChild;
  href: string;
}

export default function Link(props: Props) {
  return <Styles.Link href={props.href}>{props.children}</Styles.Link>;
}
