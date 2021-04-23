/** @format */
//global
import axios from "axios";

// js file needs update to tsx
export default {
	guardianContent: (searchWords, pageNumber) => {
		console.log("search: ", searchWords);
		console.log("page: ", pageNumber);
		const contentPath = "https://content.guardianapis.com/search?";
		const specialRequests = "show-fields=thumbnail,trailText&";
		// env is used to make api key less visible but it is still not secure
		// preferred approach would be to make the call from the server rather than the client
		const permission = "api-key=" + process.env.REACT_APP_API_KEY;
		const numResults = "page-size=12&";
		const search = searchWords ? "q=" + searchWords + "&" : "";
		const page = pageNumber !== 1 ? "page=" + pageNumber.toString() + "&" : "";

		const query = contentPath + specialRequests + numResults + search + page + permission;
		console.log("query: ", query);
		return axios.get(query);
	},
};
