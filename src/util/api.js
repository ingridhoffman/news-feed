/** @format */
//global
import axios from "axios";

export default {
	guardianContent: (searchWords, pageNumber) => {
		const contentPath = "https://content.guardianapis.com/search?";
		const specialRequests = "search-fields=thumbnail,trailText&";
		// env is used to make api key less visible but it is still not secure
		// preferred approach would be to make the call from the server rather than the client
		const permission = "api-key=" + process.env.REACT_APP_API_KEY;
		let search = searchWords ? "q=" + searchWords + "&" : "";
		let page = pageNumber ? "page=" + pageNumber + "&" : "";

		return axios.get(contentPath + specialRequests + search + page + permission);
	},
};
