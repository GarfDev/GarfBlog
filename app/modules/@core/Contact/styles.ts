import Styled from 'styled-components';
import Markdown from 'react-markdown';

const Styles = {
  StyledMarkdown: Styled(Markdown)`
    h1 {
      color: ${({theme}) => theme.color} !important;
    }
  `,
};

export default Styles;
