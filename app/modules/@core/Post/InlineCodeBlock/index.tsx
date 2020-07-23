import React from 'react';
import {useRecoilValue} from 'recoil';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula, prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {themeState} from '@/modules/@core/App/atoms';

interface Props {
  value: string;
  language: string;
}

export default function InlineCodeBlock(props: Props) {
  const currentThemeState = useRecoilValue(themeState);

  return (
    <SyntaxHighlighter
      language="jsx"
      style={currentThemeState ? darcula : prism}
      customStyle={{
        transition: 'all 0.25s linear',
        display: 'inline',
        fontSize: '1em',
        padding: '1px',
      }}>
      {props.value}
    </SyntaxHighlighter>
  );
}
