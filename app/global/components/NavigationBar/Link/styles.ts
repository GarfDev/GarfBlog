import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Styles = {
  Link: Styled(Link)`
    margin: 0px 10px;
    color: ${({theme}) => theme.color};
    border-bottom: 3px solid transparent;
    transition: all 0.25s linear;
    &:hover {
      color: ${({theme}) => theme.color};
      border-bottom: 3px solid;
      transition: all 0.25s linear;
    }
  `,
};

export default Styles;
