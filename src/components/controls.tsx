/** @format */

// Global
import React, { ChangeEvent, FormEvent } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface controlProps {
	goBack: () => void;
	goNext: () => void;
	handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSearch: (event: FormEvent) => void;
}

export const ControlBar = ({ goBack, goNext, handleInput, handleSearch }: controlProps) => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Pagination>
						<Pagination.Prev onClick={goBack} />
						<Pagination.Next onClick={goNext} />
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
			</Navbar.Collapse>
		</Navbar>
	);
};
