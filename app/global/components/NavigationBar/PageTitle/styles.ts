import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styles = {
  Title: Styled(Link)`
    margin: 0px 10px;
    color: ${({theme}) => theme.color};
    font-weight: bold;
    border-bottom: 3px solid transparent;
    transition: all 0.25s linear;
    &:hover {
      color: ${({theme}) => theme.borderColor};
      transition: all 0.25s linear;
    }
  `,
};

export default Styles;
