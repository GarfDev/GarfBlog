import Styled from 'styled-components';

const Styles = {
  HeadingContainer: Styled.div<{level: number}>`
    /* color: ${({theme}) => theme.color}; */
    color: #ffa7c4;
    font-size: ${props => `${1 + props.level * 0.25}rem`};
    margin: 20px 0px;
  `,
};

export default Styles;
