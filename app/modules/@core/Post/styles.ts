import Styled from 'styled-components';

const Styles = {
  PostContainer: Styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    font-size: 1.35rem;
  `,
  GistTitle: Styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  `,
  MetaData: Styled.div`
    font-size: 1rem;
    opacity: 0.7;
    margin-bottom: 30px;
  `,
};

export default Styles;
