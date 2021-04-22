/** @format */

//global
import React, { useState, useEffect } from "react";

//local
import "./App.css";
import API from "./util/api";

function App() {
	const [loading, setLoading] = useState<boolean>(true);
	const [newsContent, setNewsContent] = useState({});

	useEffect(() => {
		API.guardianContent()
			.then((res) => {
				console.log("results: ", res);
			})
			.catch((err) => {
				console.log("error: ", err.code);
			});
	}, []);

	return <div className="App"></div>;
}

export default App;
