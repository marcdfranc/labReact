import '../style/VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect }) => {
	return (<div className="video-item item" onClick={() => onVideoSelect(video)}>
		<img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
		<div className="content" >
			<b className="header">{video.snippet.title}</b>
		</div>
	</div>);
}

export default VideoItem;