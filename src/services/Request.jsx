import axios from "axios";
const request = axios.create({
	baseURL: "https://api.al-muamalat.uz/api",
	headers: {
		"Content-Type": "application/json",
	},
});
request.interceptors.request.use(
	(response) => {
		const token = localStorage.getItem("testUserToken");
		if (token) {
			response.headers["Authorization"] = `Bearer ${token}`;
		}
		return response;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	},
);
request.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const statusCode = error.response.status;
		if (statusCode === 401) {
			localStorage.clear();
		}
		return Promise.reject(error);
	},
);
export { request };
