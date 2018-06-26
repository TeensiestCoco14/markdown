import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import './App.css';

class App extends Component {

	state = {
		text: "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\nAlt-H1\n======\nAlt-H2\n------\n*Italics*\n**Bold**\n**_Both_**\n~~Strike through~~"
	}

	onChangeHandler = (event) => {
		this.setState({text: event.target.value})
	}

	render() {
		return (
			<div className="App">
				<textarea style = {{width: "50%", height: "500px", display: "inline-block"}} value = {this.state.text} onChange = {this.onChangeHandler} type = "text" />
				<ReactMarkdown style = {{width: "50%", height: "500px", display: "inline-block"}}source = {this.state.text}/>
			</div>
		);
	}
}

export default App;
