import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from  './VideoItem';

const VideoList= ({videos,onVideoSelect}) =>{
    const listofvideos= videos.map((video,id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return (
        <Grid container spacing={5}>
            {listofvideos}
        </Grid>
        
    )
}
export default VideoList;