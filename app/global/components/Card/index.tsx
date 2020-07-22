import React from 'react';
import Styles from './styles';

interface Props {
  children: React.ReactChild;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Card(props: Props) {
  return (
    <Styles.Container className={props.className} onClick={props.onClick}>
      {props.children}
    </Styles.Container>
  );
}
