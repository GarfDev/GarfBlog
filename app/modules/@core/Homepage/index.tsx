import React from 'react';
import {useRecoilValue} from 'recoil';
import BlogPost from './BlogPost';
import {allGistSelector} from './atoms';
import {Post} from './BlogPost/types';
import Styles from './styles';

export default function Homepage() {
  const gits = useRecoilValue(allGistSelector);
  // console.log(gits.data);
  return (
    <Styles.Container>
      {gits.data.map((item: Post) => {
        // console.log(item);
        return <BlogPost key={item.id} {...item} />;
      })}
    </Styles.Container>
  );
}
