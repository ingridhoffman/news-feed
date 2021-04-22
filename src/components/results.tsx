/** @format */

// Global
import React, { FC } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Media from "react-bootstrap/Media";

// Local
import { NewsItem } from "../App";

export const ResultContainer: FC = ({ children }): JSX.Element => {
	return <CardDeck className="flex-column">{children}</CardDeck>;
};

export const ResultCard = (props: NewsItem) => {
	return (
		<Card className="mt-3" id={props.id}>
			<Navbar bg="light" variant="light" className="justify-content-between">
				<div>
					<Card.Title>{props.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
				</div>
			</Navbar>
			<Card.Body>
				<Media>
					<img width={120} className="mr-3" src={props.thumbnail} alt="Article Thumbnail" />
					<Media.Body>
						<p>{props.summary}</p>
					</Media.Body>
				</Media>
				<Button variant="link" href={props.link} target="_blank">
					View more...
				</Button>
			</Card.Body>
		</Card>
	);
};
