import Styled from 'styled-components';

const Styles = {
  HeadingContainer: Styled.div<{level: number}>`
    color: ${({theme}) => theme.color};
    font-size: ${props => `${1.45 + (6 - props.level) * 0.35}rem`};
  `,
};

export default Styles;
