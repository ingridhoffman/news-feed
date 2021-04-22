/** @format */

//global
import React, { useState, useEffect } from "react";

//local
import "./App.css";
import API from "./util/api";
import { ResultContainer, ResultCard } from "./components/results";

// custom types
export interface NewsItem {
	id: string;
	date: string;
	title: string;
	summary: string;
	thumbnail: string;
	link: string;
}

interface NewsFeed {
	page: number;
	totalPages: number;
	results: NewsItem[];
}

// helper functions
// to meet time constraints for this exercise I am not creating a type for the full api response and instead using any
const processNewsResults = (res: any): NewsFeed => {
	let itemArray: NewsItem[] = res.results.map((result: any) => {
		let item: NewsItem = {
			id: result.id,
			date: new Date(result.webPublicationDate).toDateString(),
			title: result.webTitle,
			summary: result.fields.trailText,
			thumbnail: result.fields.thumbnail,
			link: result.webUrl,
		};
		return item;
	});
	return { page: res.currentPage, totalPages: res.pages, results: itemArray };
};

function App() {
	const [loading, setLoading] = useState<boolean>(true);
	const [newsResults, setNewsResults] = useState<NewsFeed>();

	useEffect(() => {
		API.guardianContent()
			.then((res) => {
				let newResults: NewsFeed = processNewsResults(res.data.response);
				setNewsResults(newResults);
				setLoading(false);
			})
			.catch((err) => {
				console.log("error: ", err.code);
				// for now, api errors are all handled by setting loading as complete and not setting results
				// eventually differnt errors could be handled more specifically with an error state
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		console.log("news state: ", newsResults);
	}, [newsResults]);

	return (
		<div className="App">
			{loading ? (
				"Please wait while we load your results..."
			) : !newsResults ? (
				"We are sorry. Something has gone wrong. Please try your search again later."
			) : (
				<ResultContainer>
					{newsResults.results.length
						? newsResults.results.map((result: NewsItem) => {
								return <ResultCard key={result.id} {...result} />;
						  })
						: "No results match your search criteria. Please try a different search."}
				</ResultContainer>
			)}
		</div>
	);
}

export default App;
