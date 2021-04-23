/** @format */

//global
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

//local
import "./App.css";
import API from "./util/api";
import { ResultContainer, ResultCard } from "./components/results";
import { ControlBar } from "./components/controls";
import { type } from "node:os";

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
	const [searchEntry, setSearchEntry] = useState<string>("");

	const fetchNewsContent = (page: number) => {
		setLoading(true);
		API.guardianContent(searchEntry, page)
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
	};

	// get first page of content on page load (default per api so no page parameter needed)
	useEffect(() => {
		fetchNewsContent(1);
	}, []);

	const handlePageChange = (goTo: -1 | 1): void => {
		// this function will only be called when there are news results so is there a better way to avoid typescript error that it might be undefined??
		if (newsResults) {
			let newPage: number = newsResults.page + goTo;
			// disable buttons so these conditions will always be met
			if (newPage >= 1 && newPage <= newsResults.totalPages) {
				fetchNewsContent(newPage);
			}
		}
	};

	const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		setSearchEntry(event.target.value);
	};

	const handleSearch = (event: FormEvent) => {
		event.preventDefault();
		fetchNewsContent(1);
	};

	useEffect(() => {
		console.log("news state: ", newsResults);
	}, [newsResults]);

	return (
		<div className="App">
			<ControlBar
				goBack={() => handlePageChange(-1)}
				goNext={() => handlePageChange(1)}
				handleInput={handleInput}
				handleSearch={handleSearch}
			/>
			{loading ? (
				"Please wait while we load your results..."
			) : !newsResults ? (
				"We are sorry. Something has gone wrong. Please try your search again later."
			) : (
				<>
					<ResultContainer>
						{newsResults.results.length
							? newsResults.results.map((result: NewsItem) => {
									return <ResultCard key={result.id} {...result} />;
							  })
							: "No results match your search criteria. Please try a different search."}
					</ResultContainer>
				</>
			)}
		</div>
	);
}

export default App;
