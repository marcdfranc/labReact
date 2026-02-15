import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div>Loading...</div>
	} else {
		const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
		return (<div>
			<div className="ui embed">
				<iframe alt={video.snippet.title} title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>);
	}
}

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/RIbQJU7OpRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

export default VideoDetail;