import Styled from 'styled-components';
import {Card} from '@/global/components/';

const Styles = {
  PostContainer: Styled(Card)`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 15px;
  `,
  Header: Styled.div`
    font-size: 1.25rem;
  `,
  Datetime: Styled.div`
    font-size: 0.64rem;
    margin-bottom: 10px;
    opacity: 0.6;
  `,
  Description: Styled.div`
    font-size: 1rem;
    opacity: 0.9;
  `,
};

export default Styles;
