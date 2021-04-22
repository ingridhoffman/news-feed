/** @format */

// Global
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface controlProps {
	goBack: () => void;
	goNext: () => void;
}

export const ControlBar = ({ goBack, goNext }: controlProps) => {
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
			</Navbar.Collapse>
		</Navbar>
	);
};
