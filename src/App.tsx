/** @format */

//global
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

//local
import "./App.css";
import API from "./util/api";
import { ResultContainer, ResultCard } from "./components/results";
import { ControlBar } from "./components/controls";
import TitleBar from "./components/titlebar";

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
	// this throws warning but it is correct implementation per docs for running only at load and not for rerenders
	// there is much debate on this issue and no agreed "right" answer so I am choosing to ignore the warning
	useEffect(() => {
		fetchNewsContent(1);
	}, []);

	const handlePageChange = (goTo: -1 | 1): void => {
		let newPage: number = newsResults!.page + goTo;
		// conditions kept to avoid actions on multi-click of button before disable is registered
		if (newPage >= 1 && newPage <= newsResults!.totalPages) {
			fetchNewsContent(newPage);
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
		// !bug - entire page is refreshing and "bouncing" every time a button is clicked
		// ui - styled messages component should be created for loading and errors
		<>
			<header>
				<TitleBar />
			</header>
			<main className="container-lg">
				<ControlBar
					page={newsResults ? newsResults.page : 0}
					lastPage={newsResults ? newsResults.totalPages : 0}
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
			</main>
		</>
	);
}

export default App;
