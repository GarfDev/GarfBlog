import Styled from 'styled-components';
import Toggle from 'react-toggle';

const Styles = {
  NavigationContainer: Styled.header`
    width: 100%;
  `,
  PageTitleContainer: Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 50px;
    margin-top: 100px;
    
  `,
  RoutingContainer: Styled.div<{marginFromTop: boolean}>`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${props => (props.marginFromTop ? '10px' : '5px')};
    margin-bottom: ${props => (props.marginFromTop ? '20px' : '5px')};
    justify-content: flex-start;
    margin: 0px 50px;
    margin-bottom: 20px;
    font-size: 1rem;
  `,
  Images: Styled.img`
    transition: all 0.25s linear;
  `,
  PageTitle: Styled.div`
    font-size: 2.5rem;
    font-weight: 500;
  `,
  StyledToggle: Styled(Toggle)`
    &.react-toggle--checked .react-toggle-track {
      background-color: #F3FAF6;
      border-color: ${({theme}) => theme.color}
      &.react-toggle-track {
        background-color: #F3FAF6;
      };
      &.react-toggle-thumb {
        border-color: ${({theme}) => theme.color}
      };
      &:hover {
        background-color: #F3FAF6;
      }
    };
  `,
};

export default Styles;
