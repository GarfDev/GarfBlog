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
    margin-top: 100px;
    
  `,
  RoutingContainer: Styled.div<{marginFromTop: boolean}>`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${props => (props.marginFromTop ? '30px' : '5px')};
    justify-content: flex-start;
    font-size: 1rem;
  `,
  Images: Styled.img`
    transition: all 0.25s linear;
  `,
  PageTitle: Styled.div`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 500;

  `,
  StyledToggle: Styled(Toggle)`

    margin-bottom: 6px;

    &.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
      background-color: ${({theme}) => theme.hoverColor} !important;
    }

    &.react-toggle--checked .react-toggle-track {
      background-color: ${({theme}) => theme.hoverColor} !important;
    }

    &.react-toggle-track {
      background-color: ${({theme}) => theme.hoverColor} !important;
    }

    &.react-toggle--checked .react-toggle-thumb {
      background-color: ${({theme}) => theme.backgroundColor};
      border-color: ${({theme}) => theme.backgroundColor} !important;
      box-shadow: none !important;

    };

    &.react-toggle--focus .react-toggle-thumb {
      box-shadow: none !important;
    };

    &.react-toggle--checked .react-toggle-track {
      background-color: #F3FAF6;
      border-color: ${({theme}) => theme.color}
      &.react-toggle-track {
        background-color: #F3FAF6;
      };
      &:hover {
        background-color: #F3FAF6;
      }
    };

  `,
};

export default Styles;
