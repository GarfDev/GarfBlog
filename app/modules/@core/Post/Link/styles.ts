import Styled from 'styled-components';

const Styles = {
  Link: Styled.a`
    color: #ffa7c4;
    font-weight: 500;
    border-bottom: 2px solid;
    border-color: #ffa7c4;
    transition: all 0.07s linear;
    &:hover {
      color: #ffa7c4;
      border-bottom: 2px solid transparent;
      border-color: none;
      transition: all 0.07s linear;
    }
  `,
};

export default Styles;
