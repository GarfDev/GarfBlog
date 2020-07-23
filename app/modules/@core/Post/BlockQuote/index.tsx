import React from 'react';
import Styles from './styles';

interface Props {
  children: React.ReactChild;
}

export default function BlockQuote(props: Props) {
  return <Styles.BlockQuote>{props.children}</Styles.BlockQuote>;
}
