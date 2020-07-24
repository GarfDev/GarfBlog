import React from 'react';
import {useRecoilValue} from 'recoil';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula, prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {themeState} from '@/modules/@core/App/atoms';

interface Props {
  value: string;
  language: string;
}

export default function CodeBlock(props: Props) {
  const currentThemeState = useRecoilValue(themeState);

  return (
    <SyntaxHighlighter
      language={props.language === 'javascript' ? 'jsx' : props.language}
      style={currentThemeState ? darcula : prism}
      customStyle={{
        transition: 'all 0.25s linear',
        margin: '10px 0px',
        font: "'Ubuntu Mono', monospace",
      }}>
      {props.value}
    </SyntaxHighlighter>
  );
}
