import React from 'react';

import { Container, VideoListWrapper } from './styles';

import AddVideo from '../AddVideo';
import Video from '../Video';

export default function VideoList() {

  return (
    <Container>
      <VideoListWrapper>
        <Video 
          id={1}
          title='Title test'
          link='https://github.com/br3nds0n'
          liked={true} 
        />
        <AddVideo /> 
      </VideoListWrapper>
    </Container>
  );
}
