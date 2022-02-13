import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedBackList from "./components/FeedBackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();

		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
};

export default App;
