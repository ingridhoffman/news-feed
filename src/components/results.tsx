/** @format */

// Global
import { FC } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

// Local
import { NewsItem } from "../App";

export const ResultContainer: FC = ({ children }): JSX.Element => {
	return <CardColumns>{children}</CardColumns>;
};

export const ResultCard = (props: NewsItem) => {
	return (
		// with more time I would wrap the card with the anchor so the anchor would have content
		// this would require re-styling all text to override standard link properties
		<Card className="mt-3" id={props.id}>
			<a
				style={{ position: "absolute", top: 0, bottom: 0, height: "100%", width: "100%" }}
				href={props.link}
				target="_blank"
				rel="noreferrer"
			/>
			<Card.Img
				variant="top"
				style={{ height: "auto", maxWidth: "400px", minWidth: "300px" }}
				src={props.thumbnail}
				alt="Article Thumbnail"
			/>
			<Card.Body>
				<Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.summary}</Card.Text>
			</Card.Body>
		</Card>
	);
};
