import secrets from "./secrets";

const config = {
	youtube: {
		defaultParams: {
			key: secrets.YOUTUBE_API_KEY,
			part: 'snippet',
			maxResults: 5,
			type: 'video'
		}
	}
}


export default config;