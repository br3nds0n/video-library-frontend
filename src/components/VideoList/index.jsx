import React, { useEffect, useState } from 'react';

import { Container, VideoListWrapper } from './styles';

import AddVideo from '../AddVideo';
import Video from '../Video';

import api from '../../services/api';

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    api.get('video').then(({data})=> {
      setVideos(data);
    })

  }, []);

  return (
    <Container>
      <VideoListWrapper>
      { videos?.map((video) => (
          <Video 
          key={video._id}
          id={video._id}
          title={video.title}
          link={video.link}
          liked={video.liked}
        />
        ))}
        <AddVideo /> 
      </VideoListWrapper>
    </Container>
  );
}
