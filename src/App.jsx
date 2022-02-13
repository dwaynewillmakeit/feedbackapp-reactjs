import React, { useState } from "react";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<div className="container">
			<Header />
			<FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
		</div>
	);
};

export default App;
