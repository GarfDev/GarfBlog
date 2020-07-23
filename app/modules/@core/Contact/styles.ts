import Styled from 'styled-components';
import Markdown from 'react-markdown';

const Styles = {
  StyledMarkdown: Styled(Markdown)`
    padding-left: 20px;
    border-left: 5px solid;
    h1 {
      color: ${({theme}) => theme.color} !important;
    }
  `,
};

export default Styles;
