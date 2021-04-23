/** @format */

// Global
import React, { ChangeEvent, FormEvent } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface controlProps {
	page: number;
	lastPage: number;
	goBack: () => void;
	goNext: () => void;
	handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSearch: (event: FormEvent) => void;
}

export const ControlBar = ({
	page,
	lastPage,
	goBack,
	goNext,
	handleInput,
	handleSearch,
}: controlProps) => {
	return (
		// ux consderations - not optimized for mobile, need page controls at bottom of feed or implement bottomless scroll
		<Navbar bg="light" expand="lg">
			<Nav className="mr-auto">
				<Pagination className="my-0">
					<Pagination.Prev disabled={page <= 1} onClick={goBack} />
					<Pagination.Next disabled={lastPage === page} onClick={goNext} />
				</Pagination>
			</Nav>
			<Form inline onSubmit={handleSearch}>
				<Form.Control
					as="input"
					type="text"
					placeholder="Search"
					className="mr-sm-2"
					onChange={handleInput}
				/>
				<Button variant="outline-success" type="submit">
					Search
				</Button>
			</Form>
		</Navbar>
	);
};
