import React, { useState } from "react";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	return (
		<div className="container">
			<Header />
			<FeedBackList feedback={feedback} />
		</div>
	);
};

export default App;
