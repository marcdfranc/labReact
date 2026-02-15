import axios from "axios";
import secrets from "../config";

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: secrets.SPLASH_API_KEY
	}
});