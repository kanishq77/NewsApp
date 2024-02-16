import "./App.css";
import React, { Component } from "react";
import Na from "./components/Na";
import News from "./components/News";
export default class App extends Component {
	render() {
		return (
			<div>
				<Na></Na>
				<News pageSize={8} />
			</div>
		);
	}
}
